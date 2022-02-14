//1a)  Construtores são funções de inicialização de uma classe, as quais são invocadas no momento em que objetos desta classe são criadas. 
//b) A mensagem foi impressa no console para cada uma instância de classe que criei.
//c) Variáveis privadas só podem ser acessadas de dentro da própria classe (usando a keyword this)
 
//2
class Transaction {
    private description: string;
    private value: number;
    private date: string

    constructor(description:string, value: number, date: string){
        this.description = description;
        this.value = value;
        this.date = date;
    }

    public getDescription() {
        return this.description
    }
    
    public getValue() {
        return this.value
    }

    public getDate() {
        return this.date
    }
}

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    constructor(
        cpf: string,
        name: string,
        age: number,
    ) {
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }

    public setTransaction(description: string, value: number, date: string) {
        const newTransaction = new Transaction(description, value, date)
        this.transactions.push(newTransaction)
    }
}

//3
class Bank {
    private accounts: UserAccount[];
  
    constructor(accounts: UserAccount[]) {
      this.accounts = accounts;
    }
  
}


const account1 = new UserAccount('123.456.090-00', 'Igor', 25)
const account2 = new UserAccount('123.456.090-22', 'Marcos', 20)

const transaction1 = new Transaction('Salário', 6000, '14/02/2022')
const transaction2 = new Transaction('Conta de luz', 250, '18/02/2022')

account1.setTransaction(transaction1.getDescription(), transaction1.getValue(), transaction1.getDate())
account1.setTransaction(transaction2.getDescription(), transaction2.getValue(), transaction2.getDate())
account2.setTransaction(transaction2.getDescription(), transaction2.getValue(), transaction2.getDate())

console.log(account1)
console.log(account2)

const usersAccount = [account1,account2]
const bradesco = new Bank(usersAccount)
console.log(bradesco)