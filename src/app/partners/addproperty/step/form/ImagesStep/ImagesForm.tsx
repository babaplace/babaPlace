import { useFormStore } from "@/store/useFormStore";
import React, { useState } from "react";
import ButtonBack from "../ButtonBack";
import ButtonNext from "../ButtonNext";
import { useEdgeStore } from "@/lib/edgestore/edgestore";
import { FileState, MultiImageDropzone } from "@/lib/edgestore/DropzoneImage";
const ImagesForm = () => {
  const { Images, addImage, removeImage } = useFormStore();
  const [fileStates, setFileStates] = useState<FileState[]>([]);
  const { edgestore } = useEdgeStore();
  function updateFileProgress(key: string, progress: FileState["progress"]) {
    setFileStates((fileStates) => {
      const newFileStates = structuredClone(fileStates);
      const fileState = newFileStates.find(
        (fileState) => fileState.key === key
      );

      if (fileState) {
        fileState.progress = progress;
      }

      return newFileStates;
    });
  }
  return (
    <div className="h-full flex flex-col justify-between">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col">
          <h1 className="text-black text-2xl font-bold">Choisir les images</h1>
          <p className="text-gray-500text-sm">
            Choisir des images pour votre bien
          </p>
        </div>
        <div>
          <MultiImageDropzone
            value={fileStates}
            dropzoneOptions={{
              maxFiles: 6,
            }}
            onChange={(files) => {
              setFileStates(files);
            }}
            onFilesAdded={async (addedFiles) => {
              setFileStates([...fileStates, ...addedFiles]);
              await Promise.all(
                addedFiles.map(async (addedFileState) => {
                  try {
                    const res = await edgestore.publicFiles.upload({
                      file: addedFileState.file as File,
                      options: {
                        temporary: true,
                      },
                      onProgressChange: async (progress) => {
                        updateFileProgress(addedFileState.key, progress);
                        if (progress === 100) {
                          // wait 1 second to set it to complete
                          // so that the user can see the progress bar at 100%
                          await new Promise((resolve) =>
                            setTimeout(resolve, 1000)
                          );

                          updateFileProgress(addedFileState.key, "COMPLETE");
                        }
                      },
                    });
                    addImage(res);
                    console.log(Images);
                  } catch (err) {
                    updateFileProgress(addedFileState.key, "ERROR");
                  }
                })
              );
            }}
          />
        </div>
      </div>

      <div className="hidden md:flex justify-between items-center">
        <ButtonBack step={6} />
        <ButtonNext step={6} />
      </div>
    </div>
  );
};

export default ImagesForm;
