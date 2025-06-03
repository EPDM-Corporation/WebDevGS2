import EmailSenha from "../Components/EmailSenha";
import Voltar from "../Components/Voltar";
import LoginImage from "../assets/Login.PNG"; // Assuming you have a login image
const Login = () =>{
    return(
        <>
        <div className="flex">
            <Voltar/>
            <EmailSenha 
            title="Login"
            subtitle="Entre com seu Email e Senha"
            buttonText="Login"/>

            <img src={LoginImage} alt="Login" className="w-2/5 h-screen object-cover"/>
        </div>

        </>
    )
}
export default Login;