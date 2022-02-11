import axios from "axios"
import { Address } from "../types/types"

const baseURL = "https://viacep.com.br/ws"

export const getAdress = async (cep:string): Promise<Address | null> => {
    try {
        const response = await axios.get(`${baseURL}/${cep}/json/`)

        const address: Address = {
            logradouro: response.data.logradouro,
            bairro: response.data.bairro,
            localidade: response.data.localidade,
            uf: response.data.uf
        }

        return address
        
    } catch (error:any) {
        console.log(error.message)
        return null
    }
}