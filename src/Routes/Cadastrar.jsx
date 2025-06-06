import axios from "axios";
import { useEffect, useState } from "react";
import CadastrarImagem from "../assets/Cadastrar.PNG";
import Voltar from "../Components/Voltar";

const Cadastrar = () => {
    
    const API_URL = 'http://localhost:3000/contas';
    
    const [novaConta, setNovaConta] = useState({email: '', senha: ''});

    const cadastrarConta = async() => {
        if (!novaConta.email || !novaConta.senha) {
            alert("Todos os campos são obrigatórios.");
            return;
        }

        // Validação básica de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(novaConta.email)) {
            alert("Por favor, insira um email válido.");
            return;
        }

        // Validação de senha (mínimo 6 caracteres)
        if (novaConta.senha.length < 6) {
            alert("A senha deve ter pelo menos 6 caracteres.");
            return;
        }

        try {
            const response = await axios.post(API_URL, novaConta);
            alert("Conta cadastrada com sucesso!");
            setNovaConta({email: '', senha: ''});
        } catch (error) {
            console.log("Erro ao cadastrar conta", error);
            if (error.response && error.response.status === 400) {
                alert("Email já cadastrado ou dados inválidos.");
            } else {
                alert("Erro ao cadastrar. Tente novamente.");
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        cadastrarConta();
    }

    return(
        <>
        <div className="flex relative">
            <Voltar/>
            <div className="bg-[#24140B] w-3/5 h-screen text-[#CDC8C8] flex flex-col items-center justify-center">
                <div className="pb-10 w-1/2">
                    <h1 className="text-4xl font-bold">Cadastrar</h1>
                    <h2 className="text-xl pt-3">Cadastre seu Email e Senha</h2>
                </div>
                <form className="w-1/2" onSubmit={handleSubmit}>
                    <h2>Endereço de Email</h2>
                    <input 
                        type="email" 
                        placeholder="Digite Aqui Seu Email" 
                        className="border-2 border-[#CDC8C8] rounded-lg mb-5 w-full pl-3 mt-2 h-10 text-white"
                        value={novaConta.email}
                        onChange={(e) => setNovaConta({...novaConta, email: e.target.value})}
                        required
                    />
                    <h2>Senha</h2>
                    <input 
                        type="password" 
                        placeholder="Digite Sua Senha Aqui" 
                        className="border-2 border-[#CDC8C8] rounded-lg mb-10 w-full pl-3 mt-2 h-10 text-white"
                        value={novaConta.senha}
                        onChange={(e) => setNovaConta({...novaConta, senha: e.target.value})}
                        required
                        minLength="6"
                    />
                    <button 
                        type="submit" 
                        className="bg-[#946631] my-2 rounded-xl font-bold justify-center w-1/2 flex p-2 hover:scale-95 hover:text-white transition-transform"
                    >
                        Cadastrar
                    </button>
                </form>
            </div>
            <img src={CadastrarImagem} className="w-2/5 h-screen object-cover"/>
        </div>
        </>
    )
}

export default Cadastrar;