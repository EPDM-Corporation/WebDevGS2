const EmailSenha = () =>{
    return(
        <>
        <div className="bg-[#24140B] w-3/5 h-screen text-[#CDC8C8] flex flex-col items-center justify-center">
            <div className="pb-10 w-1/2">
                <h1 className="text-4xl font-bold">Login</h1>
                <h2 className="text-xl pt-3">Entre com seu Email e Senha</h2>
            </div>
            <form className="w-1/2">
                <h2>Endereço de Email</h2>
                <input type="email" placeholder="Digite Aqui Seu Email" className="border-2 border-[#CDC8C8] rounded-lg mb-5 w-full pl-3 mt-2"></input>
                <h2>Senha</h2>
                <input type="senha" placeholder="Digite Sua Senha Aqui" className="border-2 border-[#CDC8C8] rounded-lg mb-10 w-full pl-3 mt-2"></input>
                <div className="bg-[#946631] rounded-lg font-bold flex justify-center">
                    <button type="submit">Login</button>
                </div>
                
            </form>
        </div>
        </>
    )
}
export default EmailSenha;