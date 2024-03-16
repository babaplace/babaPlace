import { CategorieType, ImageUploadType } from "@/types/types";
import { create } from "zustand";

export type FormStore = {
  city: string;
  address: string;
  category: CategorieType;
  chambres: number;
  Images: ImageUploadType[];
  salons?: boolean;
  toilettes: number;
  surface: number;
  nbreEtages: number;
  terasse?: boolean;
  niveau: number;
  balcon?: boolean;
  cuisine: number;
  details: string;
  prix: number;
  caution: number;
  addImage: (newImage: ImageUploadType) => void;
  removeImage: (newImage: ImageUploadType) => void;
  setSurface: (newSurface: number) => void;
  setNbreEtages: (newNbreEtages: number) => void;
  setCity: (newCity: string) => void;
  setAddress: (newAddress: string) => void;
  setCategory: (newCategory: CategorieType) => void;
  setChambres: (newChambres: number | undefined) => void;
  setSalons: (newSalons: boolean | undefined) => void;
  setToilettes: (newToilettes: number) => void;
  setTerasse: (newTerasse: boolean | undefined) => void;
  setNiveau: (newNiveau: number) => void;
  setBalcon: (newBalcon: boolean | undefined) => void;
  setCuisine: (newCuisine: number | undefined) => void;
  setDetails: (newDetails: string | undefined) => void;
  setPrix: (newPrix: number) => void;
  setCaution: (newCaution: number) => void;
  resetForm: () => void;
};

export const useFormStore = create<FormStore>((set) => {
  return {
    nbreEtages: 0,
    Images: [],
    surface: 0,
    cuisine: 0,
    details: "",
    city: "",
    address: "",
    chambres: 0,
    phone: "",
    category: {
      label: "",
      description: "",
      id: "",
      name: "Appartement",
    },
    toilettes: 0,
    niveau: 0,
    prix: 0,
    caution: 0,
    addImage(newImage) {
      set((state) => ({
        Images: [...state.Images, newImage],
      }));
    },
    removeImage(imageToRemove) {
      set((state) => ({
        Images: state.Images.filter((img) => img.url !== imageToRemove.url),
      }));
    },
    setNbreEtages: (newNbreEtages: number) =>
      set({ nbreEtages: newNbreEtages }),
    setCity: (newCity: string) => set({ city: newCity }),
    setAddress: (newAddress: string) => set({ address: newAddress }),
    setCategory: (newCategory: CategorieType) => set({ category: newCategory }),
    setChambres: (newChambres: number | undefined) =>
      set({ chambres: newChambres }),
    setSalons: (newSalons: boolean | undefined) => set({ salons: newSalons }),
    setToilettes: (newToilettes: number) => set({ toilettes: newToilettes }),
    setTerasse: (newTerasse: boolean | undefined) =>
      set({ terasse: newTerasse }),
    setNiveau: (newNiveau: number) => set({ niveau: newNiveau }),
    setBalcon: (newBalcon: boolean | undefined) => set({ balcon: newBalcon }),
    setCuisine: (newCuisine: number | undefined) =>
      set({ cuisine: newCuisine }),
    setDetails: (newDetails: string | undefined) =>
      set({ details: newDetails }),
    setPrix: (newPrix: number) => set({ prix: newPrix }),
    setSurface: (newSurfarce: number) => {
      set({ surface: newSurfarce });
    },
    setCaution: (newCaution: number) => set({ caution: newCaution }),

    resetForm: () =>
      set({
        city: "",
        address: "",
        surface: 0,

        nbreEtages: 0,
        category: {
          label: "",
          id: "",
          name: "Appartement",
        },
        chambres: 0,
        salons: undefined,
        toilettes: 0,
        terasse: undefined,
        niveau: 0,
        balcon: undefined,
        Images: [],
        cuisine: 0,
        details: "",
        prix: 0,
        caution: 0,
      }),
  };
});
interface FormSteps {
  currentStep: number;
  setCurrentStep: (newStep: number) => void;
}

export const useFormSteps = create<FormSteps>((set) => {
  return {
    currentStep: 0,
    setCurrentStep: (newStep) => set({ currentStep: newStep }),
  };
});

interface Successful {
  successful: boolean;
  setSuccessful: (state: boolean) => void;
}

export const useSuccessful = create<Successful>((set) => {
  return {
    successful: false,
    setSuccessful: (state: boolean) => set({ successful: state }),
  };
});
