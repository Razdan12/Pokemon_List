import { useState, useEffect } from "react";
import Layout from "../component/Layout";
import ChartSide from "../component/Chart";
import Card from "../component/Card";
import { RestApi } from "../restApi/Api";
import { Pokemon } from "../restApi/Type";
import Modal from "../component/Modal";

const Dasboard = () => {
  const [generation, setGeneration] = useState<any>([]);
  const [type, setType] = useState<any>([]);
  const [score, setHighScore] = useState<any>([]);
  const [hp, setHp] = useState<any>([]);
  const [pokemon, setPokemon] = useState<Pokemon[]>();

  const dataChart = async () => {
    try {
      const response = await RestApi.GetChart();
      setGeneration(response.data.gen);
      setType(response.data.type);
      setHighScore(response.data.HighScore);
      setHp(response.data.HighHp);
    } catch (error) {
      console.log(error);
    }
  };

  const dataPokemon = async () => {
    try {
      const response = await RestApi.GetPokemon();
      setPokemon(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dataChart();
    dataPokemon();
  }, []);

  return (
    <>
        <Modal/>
      <Layout>
        <div className="w-full flex justify-center relative">
          <div className="w-full min-h-screen z-1">
            <div className="w-52 h-52 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full absolute blur-2xl right-5 " />
            <div className="w-72 h-72 bg-gradient-to-r from-indigo-500 rounded-full absolute blur-2xl left-5 top-20 " />
            <div className="flex w-full justify-center mt-20">
              <div className="w-96 h-96 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full absolute blur-2xl" />
            </div>
          </div>

          <div className="absolute w-full ">
            <div className="flex w-full flex-wrap justify-between items-center gap-">
              <div className="w-full sm:w-1/4 p-2 ">
                <div className="backdrop-blur-sm bg-white/10 p-5 rounded-md shadow-md flex flex-col items-center justify-center hover:ring-2 ring-pink-500 ring-inset">
                  <span className="font-bold text-xl">Generation</span>
                  <div className="mt-5">
                    <ChartSide
                      id="gen"
                      data={generation}
                      title1="gen"
                      tipe="pie"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/4 p-2">
                <div className=" backdrop-blur-sm bg-white/10 p-5 rounded-md shadow-md flex flex-col items-center justify-center hover:ring-2 ring-pink-500 ring-inset">
                  <span className="font-bold text-xl">Type</span>
                  <div className="mt-5">
                    <ChartSide
                      id="type"
                      data={type}
                      title1="gen"
                      tipe="doughnut"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/4 p-2">
                <div className=" backdrop-blur-sm bg-white/10 p-5 rounded-md shadow-md flex flex-col items-center justify-center hover:ring-2 ring-pink-500 ring-inset">
                  <span className="font-bold text-xl">Top 5 Higest Score</span>
                  <div className="mt-5">
                    <ChartSide
                      id="score"
                      data={score}
                      title1="gen"
                      tipe="polarArea"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/4 p-2">
                <div className=" backdrop-blur-sm bg-white/10 p-5 rounded-md shadow-md flex flex-col items-center justify-center hover:ring-2 ring-pink-500 ring-inse">
                  <span className="font-bold text-xl">Top 5 High HP</span>
                  <div className="mt-5">
                    <ChartSide id="spesies" data={hp} title1="gen" tipe="pie" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full my-5 justify-center  backdrop-blur-sm bg-white/10 p-5 rounded-md shadow-md">
              <div className="flex flex-col w-full">
                <span className="text-3xl font-bold divider divider-secondary">
                  Pokemon List
                </span>
              </div>
              <div className="w-full flex  max-h-[380px] overflow-auto ">
                <div className="w-full flex gap-4 flex-wrap justify-between">
                  {pokemon?.map((item: Pokemon, index: number) => (
                      <Card
                        id={item.id}
                        name={item.name}
                        img={item.img}
                        japan={item.nameJapan}
                        german={item.nameGerman}
                      />
                  
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Dasboard;
