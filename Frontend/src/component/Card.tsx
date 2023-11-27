import {FC} from "react";
import { useStore } from "../Store/StateStore";
interface Props {
  id: string,
  img: string,
  name: string,
  japan: string,
  german: string
}


const Card:FC<Props> = ({id, img, name, japan, german}) => {
  const { setIdPokemon} = useStore();

  const handleClick = () => {
    setIdPokemon(id)
    let modalElement = document.getElementById(
      "modal_pokemon"
    ) as HTMLDialogElement;
    if (modalElement) {
      modalElement.showModal();
    }
  };
  
  return (
    <>
      <div className="w-full sm:w-[32%]  backdrop-blur-sm bg-white/10 p-5 rounded-md shadow-md hover:ring-2 ring-cyan-500 ring-inset cursor-pointer" 
      onClick={handleClick}>
        <div className="flex flex-row items-center gap-5" id={id}>
          <img
            src={img}
            alt="name"
            className="w-12"
          />
          <span className="text-xl font-bold">{name} / {japan} / {german}</span>
          <div>
          </div>
        </div>
         
      </div>
    </>
  );
};

export default Card;
