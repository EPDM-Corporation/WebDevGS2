import EmailSenha from "../Components/EmailSenha";
import LoginImage from "../assets/Login.PNG"; // Assuming you have a login image
const Login = () =>{
    return(
        <>
        <div className="flex">
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