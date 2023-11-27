import create, { SetState } from "zustand";
import { Pokemon } from "./Utils";

const Store = create<Pokemon>((set: SetState<Pokemon>) => ({
  idPokemon: localStorage.getItem("id"),
  setIdPokemon: (idPokemon) => {
    if (idPokemon) {
      localStorage.setItem("idPokemon", idPokemon);
    } else {
      localStorage.removeItem("idPokemon");
    }
    set({ idPokemon });
  },
  removeIdPokemon: () => {
    localStorage.removeItem("idPokemon");
    set({ idPokemon: null });
  },


  
}));

export const useStore = Store;
