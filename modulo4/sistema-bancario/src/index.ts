import express, {Request, Response} from "express";
import { AddressInfo } from "net";
import { users } from "./data";
import { User } from "./data";

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;

//Acessa a conta do cliente pelo Nome e CPF
app.get('/users/:name/:cpf', (req:Request, res:Response)=>{
    let errorCode = 400
    try {
        const name= req.params.name
        const cpf = Number(req.params.cpf)
        const findAccount = users.filter(user => user.name === name && user.cpf === cpf)
        if(!name || !cpf){
            errorCode = 422
            throw new Error('Name or cpf are missing!')
        }
        res.status(200).send(findAccount)

    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
})

  
function calculaIdade(dataNasc:any){ 
    var dataAtual = new Date();
    var anoAtual = dataAtual.getFullYear();
    var anoNascParts = dataNasc.split('/');
    var diaNasc =anoNascParts[0];
    var mesNasc =anoNascParts[1];
    var anoNasc =anoNascParts[2];
    var idade = anoAtual - anoNasc;
    var mesAtual = dataAtual.getMonth() + 1; 
    //Se mes atual for menor que o nascimento, nao fez aniversario ainda;  
    if(mesAtual < mesNasc){
    idade--; 
    } else {
    //Se estiver no mes do nascimento, verificar o dia
    if(mesAtual == mesNasc){ 
    if(new Date().getDate() < diaNasc ){ 
    //Se a data atual for menor que o dia de nascimento ele ainda nao fez aniversario
    idade--; 
    }
    }
    } 
    return idade; 
}

app.post('/createuser', (req:Request, res:Response)=>{
    let errorCode = 400
    try {
        const {name, cpf, data} = req.body
        const idade = calculaIdade(data)
        if(idade < 18){
            throw new Error("You are not 18 years old ")
        }
        users.push({
            name,
            cpf,
            data,
            balance: 0,
            statement: []
        })
        res.send(users)
    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
})