import React from "react";

const Card = () => {
  return (
    <>
      <div className="w-full sm:w-[32%]  backdrop-blur-sm bg-white/10 p-5 rounded-md shadow-md hover:ring-2 ring-cyan-500 ring-inset cursor-pointer">
        <div className="flex flex-row items-center gap-5">
          <img
            src="https://id.portal-pokemon.com/play/resources/pokedex/img/pm/285395ca77d82861fd30cea64567021a50c1169c.png"
            alt="name"
            className="w-12"
          />
          <span className="text-xl font-bold">POKEDEX</span>
          <div>
          </div>
        </div>
         
      </div>
    </>
  );
};

export default Card;
