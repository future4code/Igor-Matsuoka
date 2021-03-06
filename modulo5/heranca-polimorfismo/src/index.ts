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

// const costumer = new Customer("1", "igor@gmail.com", "Igor", "123456", "visa")
// costumer.introduceYourself()
// const costumer2 = new Customer("2", "marcos@gmail.com", "Marcos", "7891011", "mastercard")
// costumer2.introduceYourself()

class Employee extends User {
    protected admissionDate: string;
    protected baseSalary: number;
    static BENEFITS_VALUE: number = 400;
    
    constructor(
        id: string,
        email: string,
        name: string,
        password: string,
        admissionDate: string,
        baseSalary: number,
    ) {
        super(id, email, name, password);
        this.admissionDate = admissionDate;
        this.baseSalary = baseSalary;
    }

    public getAdmissionDate(): string {
		return this.admissionDate
	}

	public getBaseSalary(): number {
		return this.baseSalary
	}

    public calculateTotalSalary(): number{
        return this.baseSalary + Employee.BENEFITS_VALUE
    }
}

const employee = new Employee("01", "igor@gmail.com", "Igor", "123456", "21/08/2022", 60000)
// console.log(employee, employee.calculateTotalSalary())

class Seller extends Employee{
    protected salesQuantity: number;
    static SELLING_COMMISSION: number = 5;

    constructor(id: string,
        email: string,
        name: string,
        password: string,
        admissionDate: string,
        baseSalary: number,
        salesQuantity: number
        ){
        super(id, email, name, password, admissionDate, baseSalary);
        this.salesQuantity = salesQuantity;
    }

    public getSalesQuantity(): number {
		return this.salesQuantity
	}

    public setSalesQuantity(quantity: number): void{
        this.salesQuantity = quantity;
    }

    public calculateTotalSalary(): number{
        return this.baseSalary + Employee.BENEFITS_VALUE + Seller.SELLING_COMMISSION * this.salesQuantity
    }
}

const seller = new Seller("01", "igor@gmail.com", "Igor", "123456", "21/08/2022", 60000, 2)
seller.setSalesQuantity(15)
// console.log(seller, seller.calculateTotalSalary())

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

// const residence = new Residence(2,"423411415")
// const commerce = new Commerce(3, "2323413213")
// const industry = new Industry(10, "213413233")
// console.log(residence.getCep())
// console.log(commerce.getCep())
// console.log(industry.getCep())

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

class ClientManager{
    private clients: Client[] = []

    public getClientsQuantity(): number {
        return this.clients.length;
    }

    public registerClient(client: Client): void {
        this.clients.push(client)
    }

    public totalIncome(): number {
        let total: number = 0;
        this.clients.forEach((client)=>{
            total += client.calculateBill()
        })
        return total
    }

    public deleteUser(registrationNumber: number): void {
        let registrationIndex = undefined;
        
        for (let i = 0; i < this.clients.length; i++) {
            if (this.clients[i].registrationNumber === registrationNumber) {
                registrationIndex = i;
            }
        }
        
        if (registrationIndex !== undefined) {
            this.clients.splice(registrationIndex, 1);
        }
    }
}


const clientManager = new ClientManager()

const residentialClient = new ResidentialClient("Igor", 1, 24, "1231313", 2, "1331313131")
clientManager.registerClient(residentialClient)

const commercialClient = new CommercialClient("Igor", 2, 24, "1231313", 2, "1331313131")
clientManager.registerClient(commercialClient)

const industrialClient = new IndustrialClient("Igor", 3, 24, "1231313", 2, "1331313131")
clientManager.registerClient(industrialClient)

// console.log(clientManager)

clientManager.totalIncome()
console.log(clientManager.totalIncome())

clientManager.deleteUser(2)
console.log(clientManager)
