import SobreImg1 from "../assets/sobre1.PNG"
import SobreImg2 from "../assets/sobre2.PNG"
import Nav from '../Components/Nav'
import Footer from "../Components/Footer"
import { Link } from "react-router-dom"
const Sobre = () =>{
    return(
        <>
        <Nav/>
        <div className="h-screen bg-[#24140B] flex items-center ">
            <div className="ml-70 text-[#CDC8C8]">
                <h1 className="text-6xl font-bold mb-10">Sobre Nós</h1>
                <h2 className="font-light text-lg">
                    Na EPDM, acreditamos no poder transformador da tecnologia para melhorar e <br/>salvar vidas. Somos uma empresa de tecnologia comprometida em desenvolver 
                    <br/>soluções inovadoras que impactam positivamente a sociedade, promovendo <br/>bem-estar,  segurança e qualidade de vida.
                    Nossa missão é clara: utilizar a<br/> tecnologia como ferramenta para resolver problemas  reais, tornando o mundo<br/>  um lugar melhor para todos. Trabalhamos
                    com ética, responsabilidade e paixão,<br/> sempre em busca  de novas formas de conectar pessoas, otimizar processos e criar um futuro mais seguro e eficiente.
                    <br/> Na EPDM, tecnologia e humanidade caminham juntas. É isso que nos move, inspira e nos simpulsiona a ir além, todos os dias.
                </h2>
                <Link to='/solucao'><button className="bg-[#946631] mt-10 w-50 h-15 rounded-2xl font-semibold text-2xl hover:scale-95 hover:text-white">Solução</button></Link>
            </div>
            <div className="mr-50 ml-20 ">
                <img src={SobreImg1} className="rounded-3xl mb-5"></img>
                <img src={SobreImg2} className="rounded-3xl"></img>
            </div>
            
        </div>
           <Footer/>
        </>
    )
}
export default Sobre;