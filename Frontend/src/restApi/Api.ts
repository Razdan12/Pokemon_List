import axios, { AxiosPromise } from "axios";
import { Data, PokById, Pokemon } from "./Type";

const instance = axios.create({ baseURL: "http://localhost:3002" });

const RestApi = {
  GetChart: (): AxiosPromise<Data> =>
    instance({
      method: "GET",
      url: "/pokemon/data",
    }),

  GetPokemon: (): AxiosPromise<Pokemon[]> =>
    instance({
      method: "GET",
      url: "/pokemon/all",
    }),
    
  GetPokemonById: (id: string | null): AxiosPromise<PokById> =>
    instance({
      method: "GET",
      url: `/pokemon/id/${id}`,
    }),
};

export { RestApi };
