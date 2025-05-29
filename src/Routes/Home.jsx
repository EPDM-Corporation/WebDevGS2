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

          <div className="absolute flex flex-col items-center text-white gap-15 pb-30">
            <h1 className="font-bold text-8xl">Enchentes no Brasil</h1>

            <h2 className="text-center text-2xl">
              Enchentes violentas destroem casas, arrastam <br />
              pertences  e transformam vidas em ruínas. <br />
              O caos e a perda são devastadores, deixando marcas<br /> profundas 
              que vão muito além do dano material.
            </h2>

            <button className=" bg-[#946631] px-10 py-2 rounded-full text-2xl hover:scale-95 transition-all duration-80 hover:text-[#C5C4C4]">Saiba Mais</button>
          </div>
        </div>

        <div className="w-full flex border-40 border-[#000000] gap-5 bg-black">
          <div className="w-1/3 relative flex items-end ">
            <img src={ImgHome2} className=" w-full h-[60vh] " />
            <div  className="absolute text-white pl-20 pb-15">
              <h1 className='text-3xl font-bold pb-3'>+100 mil</h1>
              <h2 className='font-light text-xl'>Cerca de 100 mil casas foram destruídas<br/> ou danificadas pelas enchentes que<br/> atingiram o estado em maio de 2024.</h2>
            </div>
            

          </div>
          <div className="w-1/3 relative flex items-end">
            <img src={ImgHome3} className="w-full h-[60vh]" />
            <div className="absolute pl-20 pb-15 text-white">
              <h1 className="text-3xl font-bold pb-3">+240 Vítimas</h1>
              <h2 className="text-xl font-light">Até agosto de 2024, as enchentes no <br/>RS causaram 183 mortes e 61 desaparecidos,<br/> principalmente idosos.</h2>
            </div>
            
          </div>

          <div className="w-1/3 text-white relative flex items-end">
            <img src={ImgHome4} className="w-full h-[60vh]" />
            <div className='absolute pl-20 pb-15 '>
              <h1 className='text-3xl font-bold pb-3'>+Doentes</h1>
              <h2 className="text-xl font-light">Foram 910 casos de leptospirose e 79 <br/>mortes no RS após as enchentes, além de aumento<br/> em dengue e outras doenças.</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;

