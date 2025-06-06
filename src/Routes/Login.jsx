import Voltar from "../Components/Voltar";
import LoginImage from "../assets/Login.PNG"; // Assuming you have a login image
import { Link } from "react-router-dom";

const Login = () => {
    return(
        <section className="flex">
            <Voltar/>
            <div className="bg-[#24140B] w-3/5 h-screen text-[#CDC8C8] flex flex-col items-center justify-center">
                <div className="pb-10 w-1/2">
                    <h1 className="text-4xl font-bold">Login</h1>
                    <h2 className="text-xl pt-3">Entre com seu Email e Senha</h2>
                </div>
                <form className="w-1/2">
                    <h2>Endereço de Email</h2>
                    <input type="email" placeholder="Digite Aqui Seu Email" className="border-2 border-[#CDC8C8] rounded-lg mb-5 w-full pl-3 mt-2"></input>
                    <h2>Senha</h2>
                    <input type="password" placeholder="Digite Sua Senha Aqui" className="border-2 border-[#CDC8C8] rounded-lg mb-10 w-full pl-3 mt-2"></input>
                    <button type="submit" className="bg-[#946631] my-2 rounded-xl font-bold justify-center w-1/2 flex p-2 hover:scale-95 hover:text-white">Login</button>
                    <Link to="/cadastrar">
                        <button className="bg-[#946631] my-2 rounded-xl font-bold justify-center w-1/2 flex p-2 hover:scale-95 hover:text-white">
                            Quero cadastrar
                        </button>
                    </Link>
                </form>
            </div>

            <img src={LoginImage} alt="Login" className="w-2/5 h-screen object-cover"/>
        </section>
    )
}

export default Login;