import { Request, Response } from "express"
import { connection } from "../data/connection"
import { getAdress } from "../services/getAdress"
import mailTransporter from "../services/mailTransporter"


export const createUser = async (req: Request, res: Response) => {
    try {
        const {cep, numero, complemento} = req.body
        
        const address = await getAdress(cep)

        await connection("UsersAddress")
        .insert({
            cep,
            logradouro: address?.logradouro,
            numero,
            complemento,
            bairro: address?.bairro,
            cidade: address?.localidade,
            uf: address?.uf
        })

        const info = await mailTransporter.sendMail({
            from: `<${process.env.NODEMAILER_USER}>`,
            to: "g6e8k2i3m1o7e5d9@labenualunos.slack.com",
            subject: "Cadastro endereço usuário",
            text: "Este é um texto de exemplo",
            html: "<p>Exemplo em HTML</p>"
        })

        if(!address){
            throw new Error("ERRO!")
        }

        res.status(201).send({info, message: "Endereço criado!"})
    } catch (error:any) {
        res.send({error, message:error.message})
    }
}