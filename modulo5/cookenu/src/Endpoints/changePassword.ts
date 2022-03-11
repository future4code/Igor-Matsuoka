import { Request, Response } from "express";
import { UserDatabase } from "../Data/userDatabase";
import { HashManager } from "../Services/hashManager";
import mailTransporter from "../Services/mailTransporter";

export async function changePassword(req: Request, res: Response) {
    let errorCode = 400
    try {
        const {email, password} = req.body

        if (!password || !email) {
            errorCode = 422
            throw new Error("Insira todas as informações")
        }

        const userDatabase = new UserDatabase()
        const user = await userDatabase.findUserByEmail(email)

        if (!user) {
            res.status(409).send("Não existe usuário com este e-mail")
        }

        const hashManager = new HashManager()
        const hashPassword = await hashManager.hash(password)

        const newPassword = new UserDatabase()
        newPassword.changePassword(hashPassword, email)

        const info = await mailTransporter.sendMail({
            from: `<${process.env.NODEMAILER_USER}>`,
            to: email,
            subject: "Sua senha foi alterada com sucesso!",
            text: "Olá, sua Senha no Cookenu foi alterada com sucesso!",
            html: "<p> Olá, sua Senha no Cookenu foi alterada com sucesso! </p>"
        })

        res.status(200).send({info, message: "Senha alterada com sucesso!"})

    } catch (error:any) {
        res.status(500).send(error.message)
    }
}