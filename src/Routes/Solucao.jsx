import Solucao1 from '../assets/solucao1.png';
import Solucao2 from '../assets/solucao2.png';
import Solucao3 from '../assets/solucao3.png';
import Header from '../Components/Nav' // Assuming you have a CSS file for styles
import Footer from '../Components/Footer';

const Solucao = () =>{
    return(
        <>
        <Header/>
        <div className='h-screen bg-[#24140B] flex items-center justify-center text-[#CDC8C8] '>
            <div className='w-1/2 '>
                <h1 className='text-6xl mb-10'>Solução</h1>
                <h2 className='text-lg'>Nossa solução para o monitoramento de inundações é baseada no uso de tecnologia acessível e eficiente.<br/> Propomos a utilização do Arduino ESP32 integrado com sensores de nível de água, que serão instalados <br/>nas margens dos rios. Esses sensores realizam medições constantes da altura do rio e enviam os dados <br/>automaticamente por meio de rede sem fio.

                            As informações coletadas são processadas e exibidas em um mapa<br/> virtual, que utiliza um sistema de cores para indicar o nível de risco: verde para nível normal<br/> sem risco, amarelo para situação de atenção com risco moderado, e vermelho para alerta máximo de inundação.<br/>

                            Com esse sistema, é possível acompanhar remotamente a situação de diversos pontos de medição, permitindo<br/> que autoridades e comunidades tomem decisões rápidas e precisas para evitar desastres.<br/>  Nosso objetivoé oferecer uma ferramenta de baixo custo, de fácil instalação e alta eficiência, <br/>que contribua diretamente para a prevenção de enchentes e para a proteção<br/> das populações ribeirinhas.</h2>
            </div>
                <div className='flex flex-col relative gap-2 '>
                    <img src={Solucao2} alt="Solução 2" className='w-xl rounded-4xl border-5 border-[#1A2F08]'></img>
                    <img src={Solucao1} alt="Solução 1 " className='w-xl rounded-4xl border-5 border-[#1A2F08]'></img>
                    <img src={Solucao3} alt="Solução 3" className='absolute w-70 rounded-3xl flex top-2/3 -left-1/4 border-5 border-[#1A2F08]'></img>

                </div>
        </div>
        <Footer/>
        </>
    )
}
export default Solucao;

