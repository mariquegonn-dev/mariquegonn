import { create } from "zustand";

type menuType = {
  open: boolean;
  addOpen: (payload: boolean) => void;
};

export const useMenuMobileStore = create<menuType>((set) => ({
  open: false,
  addOpen: (payload) => set(() => ({ open: payload })),
}));
