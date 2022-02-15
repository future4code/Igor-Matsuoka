class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;
  
    constructor(
        id: string,
        email: string,
        name: string,
        password: string
    ){
        console.log("Chamando o construtor da classe User")
        this.id = id
        this.email = email
        this.name = name 
        this.password = password
    }
  
    public getId(): string {
        return this.id
    }
  
    public getEmail(): string {
        return this.email
    }
  
    public getName(): string {
        return this.name
    }

    public introduceYourself():string{
        return `Olá, sou ${this.name}.Bom dia!`
    }
}

const user = new User("1", "igor@gmail.com", "Igor", "123456")
const user2 = new User("2", "marcos@gmail.com", "Marcos", "7891011")
// console.log(user)
// console.log(user2)

class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      creditCard: string
    ) {
      super(id, email, name, password);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard;
    }
  
    public getCreditCard(): string {
      return this.creditCard;
    }
}

const costumer = new Customer("1", "igor@gmail.com", "Igor", "123456", "visa")
costumer.introduceYourself()
const costumer2 = new Customer("2", "marcos@gmail.com", "Marcos", "7891011", "mastercard")
costumer2.introduceYourself()


export interface Client {
    name: string;
    registrationNumber: number;
    consumedEnergy: number;
    calculateBill(): number;
}

const client: Client = {
    name: "Goli",
    registrationNumber: 1,
    consumedEnergy: 100,

    calculateBill: () => {
      return 2;
    }
}

// console.log(client)


export abstract class Place {
    constructor(protected cep: string) {}
  
      public getCep(): string {
          return this.cep;
    }
}

// const place = new Place("929392.001")

export class Residence extends Place {
    constructor(
      protected residentsQuantity: number,
      // Refere-se ao número de moradores da casa
  
      cep: string
    ) {
      super(cep);
    }
    
    public getResidentsQuantity(){
        return this.residentsQuantity
    }
}

export class Commerce extends Place {
    constructor(
        protected floorsQuantity: number,
      // Refere-se à quantidade de andares do lugar
  
        cep: string
    ) {
        super(cep);
    }

    public getFloorsQuantity(){
        return this.floorsQuantity
    }
}

export class Industry extends Place {
    constructor(
      protected machinesQuantity: number, 
      // Refere-se à quantidade de máquinas do local 
      
        cep: string
        ) {
        super(cep);
    }

    public getMachinesQuantity(){
        return this.machinesQuantity
    }
}

const residence = new Residence(2,"423411415")
const commerce = new Commerce(3, "2323413213")
const industry = new Industry(10, "213413233")
console.log(residence.getCep())
console.log(commerce.getCep())
console.log(industry.getCep())

class ResidentialClient extends Residence implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cpf: string,
        residentsQuantity: number,
        cep: string
        ){
            super(residentsQuantity, cep)
    }

    public getCpf():string{
        return this.cpf
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.75;
    }
}

class CommercialClient extends Commerce implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cnpj: string,
        floorsQuantity: number,
        cep: string
        ){
            super(floorsQuantity, cep)
    }

    public getCnpj():string{
        return this.cnpj
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.53;
    }
}

class IndustrialClient extends Industry implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private insdustryNumber: string,
        machinesQuantity: number,
        cep: string
        ){
            super(machinesQuantity, cep)
    }

    public getInsdustryNumber():string{
        return this.insdustryNumber
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.45 + this.machinesQuantity * 100;
    }
}