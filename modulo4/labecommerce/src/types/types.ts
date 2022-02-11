export type User = {
    id: string,
    name:string,
    email:string,
    password:string
}

export type Product = {
    id: string,
    name: string,
    price: number,
    image_url: string
}

export type Register = {
    name: string,
    quantity: number,
    total_price: number,
    user_id:string
}

export type User2 = {
    id: string,
    name:string,
    email:string
}