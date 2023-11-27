import { useState, useEffect } from "react";
import { RestApi } from "../restApi/Api";
import { useStore } from "../Store/StateStore";
import { PokById } from "../restApi/Type";

const Modal = () => {
  const { idPokemon } = useStore();
const [pokemon, setPokemon] = useState<PokById>()


  const dataPokemon = async () => {
    try {
      const response = await RestApi.GetPokemonById(idPokemon);
      setPokemon(response.data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // dataChart();
    idPokemon ? dataPokemon() : null;
  }, [idPokemon]);
  return (
    <>
      <dialog id="modal_pokemon" className="modal">
        <div className="modal-box w-11/12 max-w-5xl backdrop-blur-lg bg-white/10 shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="p-10 flex justify-center items-center">
              <img
                src={pokemon?.img}
                alt={pokemon?.name}
              />
            </div>
            <div className="p-3 h-full shadow-lg flex flex-col gap-3 justify-center items-center">
              <div className="w-full flex-col flex mb-10">
                <div className=" w-full text-2xl font-bold">
                  {pokemon?.name} / {pokemon?.japan} / {pokemon?.german}
                </div>
                <span>Generation {pokemon?.gen}</span>
                <span>Species {pokemon?.species}</span>
              </div>

              <div className="flex flex-col gap-5 w-full">
                <div className="flex flex-col">
                  <label>HP ({pokemon?.hp})</label>
                  <progress
                    className="progress progress-accent"
                    value={pokemon?.hp}
                    max="100"
                  />
                </div>
                <div className="flex flex-col">
                  <label>Attack({pokemon?.attack})</label>
                  <progress
                    className="progress progress-accent"
                    value={pokemon?.attack}
                    max="100"
                  />
                </div>
                <div className="flex flex-col">
                  <label>Defense({pokemon?.defense})</label>
                  <progress
                    className="progress progress-accent"
                    value={pokemon?.defense}
                    max="100"
                  />
                </div>
                <div className="flex flex-col">
                  <label>Special Attack ({pokemon?.sp_attack})</label>
                  <progress
                    className="progress progress-accent"
                    value={pokemon?.sp_attack}
                    max="100"
                  />
                </div>
                <div className="flex flex-col">
                  <label>Special Defense({pokemon?.sp_defense})</label>
                  <progress
                    className="progress progress-accent"
                    value={pokemon?.sp_defense}
                    max="100"
                  />
                </div>
                <div className="flex flex-col">
                  <label>Speed({pokemon?.speed})</label>
                  <progress
                    className="progress progress-accent"
                    value={pokemon?.speed}
                    max="100"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Modal;
