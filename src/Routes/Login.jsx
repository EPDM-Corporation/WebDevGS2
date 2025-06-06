import { useState } from "react";
import axios from "axios";
import Voltar from "../Components/Voltar";
import LoginImage from "../assets/Login.PNG";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
    let database
    const API_URL = 'http://localhost:3000/contas';
    const [dadosLogin, setDadosLogin] = useState({email: '', senha: ''});
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        
        if (!dadosLogin.email || !dadosLogin.senha) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        try {
            const response = await axios.get(API_URL);
            let usuarioFlag = false;
            database = response.data
            database.forEach(conta =>{
                if(dadosLogin['email'] == conta['email'] && dadosLogin['senha'] == conta['senha']){
                    alert("Acesso liberado.")
                    localStorage.setItem('email',dadosLogin['email'])
                    usuarioFlag = true;
                    navigate('/')
                    return
                }
            })
            if(!usuarioFlag){
            alert("Usuário ou senha não encontrada.")
            }
            
        } catch (error) {
            console.log("Erro ao buscar dados da API:", error);
            alert("Erro ao conectar com a API.");
        }
    }

    return(
        <section className="flex">
            <Voltar/>
            <div className="bg-[#24140B] w-3/5 h-screen text-[#CDC8C8] flex flex-col items-center justify-center">
                <div className="pb-10 w-1/2">
                    <h1 className="text-4xl font-bold">Login</h1>
                    <h2 className="text-xl pt-3">Entre com seu Email e Senha</h2>
                </div>
                <form className="w-1/2" onSubmit={handleLogin}>
                    <h2>Endereço de Email</h2>
                    <input 
                        type="email" 
                        placeholder="Digite Aqui Seu Email" 
                        className="border-2 border-[#CDC8C8] rounded-lg mb-5 w-full pl-3 mt-2 h-10 text-white"
                        value={dadosLogin.email}
                        onChange={(e) => setDadosLogin({...dadosLogin, email: e.target.value})}
                        required
                    />
                    <h2>Senha</h2>
                    <input 
                        type="password" 
                        placeholder="Digite Sua Senha Aqui" 
                        className="border-2 border-[#CDC8C8] rounded-lg mb-10 w-full pl-3 mt-2 h-10 text-white"
                        value={dadosLogin.senha}
                        onChange={(e) => setDadosLogin({...dadosLogin, senha: e.target.value})}
                        required
                    />
                    <button 
                        type="submit" 
                        className="bg-[#946631] my-2 rounded-xl font-bold justify-center w-1/2 flex p-2 hover:scale-95 hover:text-white transition-transform"
                    >
                        Login
                    </button>
                    <Link to="/cadastrar">
                        <button 
                            type="button"
                            className="bg-[#946631] my-2 rounded-xl font-bold justify-center w-1/2 flex p-2 hover:scale-95 hover:text-white transition-transform"
                        >
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