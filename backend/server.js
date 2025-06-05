const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const { v4: uuid } = require("uuid")

const app = express();
const Port = 3000;

let contas = []

app.use(cors());
app.use(bodyParser.json());

  

app.listen(Port, () => {
    console.log(`Servidor rodando na porta ${Port}`)
})

app.post('/contas', (req,res)=>{
    const {email, senha} = req.body;
    if(!email || !senha){
        return res.status(400).json({error:"Campos Obrigatórios"});
    }
    const novoItem = {id:uuid(), email, senha};
    contas.push(novoItem);
    res.status(201).json(novoItem);
})

//READ
app.get('/contas',(req,res)=>{
    res.json(contas)
})