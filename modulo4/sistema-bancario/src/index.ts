import express, {Request, Response} from "express";
import { AddressInfo } from "net";
import { users } from "./data";

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
        const cpf = req.params.cpf
        const findAccount = users.filter(user => user.name === name && user.cpf === cpf)
        if(!name || !cpf){
            errorCode = 422
            throw new Error('Name or cpf are missing!')
        }
        for(let i=0; i<users.length; i++){
            if(name !== users[i].name || cpf !== users[i].cpf){
                errorCode = 422
                throw new Error('Name or cpf not found')
            }
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
        const {name, cpf, date} = req.body
        const idade = calculaIdade(date)
        
        if(idade < 18){
            throw new Error("You are not 18 years old")
        }
        for(let i=0; i<users.length; i++){
            if(users[i].cpf === cpf){
                errorCode = 404
                throw new Error("CPF already exists")
            }
        }
        users.push({
            name,
            cpf,
            date,
            balance: 0,
            statement: [],
            bill:[]
        })
        res.send(users)
    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
})

app.put('/users/:name/:cpf', (req:Request, res:Response)=>{
    let errorCode = 400
    try {
        const name = req.params.name
        const cpf = req.params.cpf
        const newBalance:number = Number(req.body.balance)
        const value:any = Number(req.body.value)
        const description:any = req.body.description
        const finalDate = req.body.finalDate
        const destinyValue:any = Number(req.body.destinyValue)
        const {destinyName, destinyCPF} = req.body
        const data = new Date()
        const paymentDate:any = data.toLocaleDateString('pt-BR', {timeZone: 'UTC'})
    
            users.forEach(user => {
                if (user.name === name && user.cpf === cpf && !value && !description && !finalDate && newBalance) {
                    users.filter(user => user.name === name && user.cpf === cpf)
                    user.balance = user.balance + newBalance
                    user.statement.push({
                        deposit: `+${newBalance}`,
                        depositData: data.toLocaleDateString('pt-BR', {timeZone: 'UTC'})
                    })
                } else if (user.name === name && user.cpf === cpf && value && description && finalDate) {
                    user.bill.push({
                        value,
                        description,
                        finalDate,
                        paymentDate: paymentDate
                    })
                    user.balance = user.balance - value
                    user.statement.push({
                        draft: `-${value}`,
                        paymentDate: paymentDate
                    })
                    if(new Date().getDate() > finalDate  && finalDate && paymentDate){
                        errorCode = 422
                        throw new Error("You don't have enough balance")
                    }
                    if(value > user.balance){
                        errorCode = 400
                        throw new Error("You don't have enough balance")
                    }
                } else {
                        if (user.name === name && user.cpf === cpf && !newBalance && !value) {
                            if(destinyValue > user.balance){
                                errorCode = 400
                                throw new Error("You don't have enough balance")
                            }
                            user.balance = user.balance - destinyValue
                            user.statement.push({
                                Transfer: `Destinatário: ${destinyName}, Valor:-${destinyValue}`,
                                transictionData: data.toLocaleDateString('pt-BR', {timeZone: 'UTC'})
                            })
                            user.bill.push({
                                destinyValue,
                                destinyCPF,
                                destinyName,
                                transictionData: data.toLocaleDateString('pt-BR', {timeZone: 'UTC'})
                            })
                            // if(user.name !== destinyName || user.cpf !== destinyCPF){
                            //     errorCode = 400
                            //     throw new Error("Name or CPF doesn't exist")
                            // }
                        } else if (user.name === destinyName && user.cpf === destinyCPF) {
                            user.balance = user.balance + destinyValue
                            user.statement.push({
                                Transfer: `Remetente: ${name}, Valor: +${destinyValue}`,
                                transictionData: data.toLocaleDateString('pt-BR', {timeZone: 'UTC'})
                            })
                            // if(user.name !== destinyName || user.cpf !== destinyCPF && user.name === name && user.cpf === cpf){
                            //     errorCode = 400
                            //     throw new Error("Name or CPF doesn't exist")
                            // }
                        }
                }
            })
        res.send(users)
    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
})
