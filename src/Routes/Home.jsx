import ImgHome1 from '../assets/enchente1.PNG';
import ImgHome2 from "../assets/enchente2.PNG";
import ImgHome3 from "../assets/enchente3.PNG";
import ImgHome4 from "../assets/enchente4.PNG";

const Home = () => {
  return (
    <>
      <div className=" w-full h-screen">
        <div className="flex items-center justify-center">
          <img src={ImgHome1} className="top-0 left-0 w-full h-[140vh]"/> 

          <div className="absolute flex flex-col items-center text-white gap-15 ">
            <h1 className="font-bold text-8xl">Enchentes no Brasil</h1>

            <h2 className="text-center text-2xl">
              Enchentes violentas destroem casas, arrastam <br />
              pertences  e transformam vidas em ruínas. <br />
              O caos e a perda são devastadores, deixando marcas<br /> profundas 
              que vão muito além do dano material.
            </h2>

            <button className="bg-[#946631] px-10 py-2 rounded-full text-2xl">Saiba Mais</button>
          </div>
        </div>

        <div className="flex">
          <img src={ImgHome2} className="w-1/3 h-[60vh]" />
          <img src={ImgHome3} className="w-1/3 h-[60vh]" />
          <img src={ImgHome4} className="w-1/3 h-[60vh]" />
        </div>
      </div>
    </>
  )
}

export default Home;

