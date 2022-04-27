export class User {
    constructor (
        private id: string,
        private name: string,
        private lastName: string,
        private participation: number,
    ){
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.participation = participation;
    }

        public getId() {
            return this.id
        }
    
        public getName() {
            return this.name
        }
    
        public getLastName() {
            return this.lastName
        }
    
        public getParticipation() {
            return this.participation
        }
    
        static toUserModel(data: any): User {
            return new User(data.id, data.name, data.lastName, data.participation)
        }
}

export type InputDTO = {
    name: string
    lastName: string
    participation: number
}

