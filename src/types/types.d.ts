export type CategorieType = {
  id: string;
  label: string;
  name: "Chambres" | "Appartement";
};

export type ImageUploadType = {
  url: string;
  size: number;
  uploadedAt: Date;
  metadata: Record<string, never>;
  path: Record<string, never>;
  pathOrder: string[];
};
