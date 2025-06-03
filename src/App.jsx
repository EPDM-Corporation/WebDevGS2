import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from "./Routes/Home";
import Login from "./Routes/Login";
import Cadastrar from "./Routes/Cadastrar";
import Error from "./Routes/Error";
import Sobre from "./Routes/Sobre";
import Solucao from "./Routes/Solucao";

function App() {
  return (
    <>

      
      <BrowserRouter>
        <Routes> 
          <Route path='*' element={<Error/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/sobre' element={<Sobre/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/cadastrar' element={<Cadastrar/>}/>
          <Route path='/solucao' element={<Solucao/>}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App;
