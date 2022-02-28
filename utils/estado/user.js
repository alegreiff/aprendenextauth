import create from "zustand";
import { devtools } from "zustand/middleware";

const useStore = create(
  devtools((set, get) => ({
    usuario: null,
    setUsuario: (user) => set({ usuario: user }),
  }))
);

export const estadoUsuario = useStore;
