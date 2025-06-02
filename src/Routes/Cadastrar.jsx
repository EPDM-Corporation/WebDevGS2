import EmailSenha from "../Components/EmailSenha";
import CadastrarImagem from "..//assets/Cadastrar.PNG";

const Cadastrar = () =>{
    return(
        <>
        <div className="flex">
            <EmailSenha
            title="Cadastrar"
            subtitle="Cadastre seu Email e Senha "
            buttonText="Cadastrar"
            />
            <img src={CadastrarImagem} className="w-2/5 h-screen object-cover"/>
        </div>
            
        </>
    )
}
export default Cadastrar;