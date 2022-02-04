import express, { Express, Request, Response } from "express";
import cors from "cors";
import { connection } from "./connections";
import { AddressInfo } from "net";

const app: Express = express();
app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});

const dateToStringDate = (date: Date): string => {

    const dd = String(date.getDate()).padStart(2, '0')
    const mm = String(date.getMonth() + 1).padStart(2, '0')
    const yyyy = date.getFullYear()
  
    return dd + '/' + mm + '/' + yyyy;
}

//////////////////////////////////////// CRIAR USUÁRIO ////////////////////////////////////////

app.post("/user", async (req: Request, res: Response): Promise<void> => {
    const {name, nickname, email} = req.body
    let errorCode = 400

    try {
      if(typeof name !== 'string' || typeof nickname !== 'string'|| typeof email !== 'string'){
        errorCode=422
        throw new Error ("As informações passadas não são válidas")
      } else if(!name || !nickname || !email){
        errorCode=422
        throw new Error ("Preencha os três campos")
      } else {
        await connection("TodoListUser")
        .insert({
          id: Date.now().toString(),
          name,
          nickname,
          email
        })
      }
      res.send({message: "Cadastro realizado com sucesso!"})
    } catch (err:any) {
      res.status(500).send({message: err.message});
    }
});

//////////////////////////////////////// PESQUISAR USUÁRIO ////////////////////////////////////////

const searchUser = async (name:string): Promise<any> => {
    const searchUsers = await connection.raw(`
    SELECT id, nickname FROM TodoListUser WHERE name like '%${name}%' OR nickname like '%${name}%' OR email like '%${name}%'
    `)
    return searchUsers[0]
}

app.get("/user", async (req: Request, res: Response): Promise<void> => {
    try {
        const name = req.query.name as string
        const resultSearchUser = await searchUser(name)
        
        res.send({users: resultSearchUser})
    } catch (err:any) {
        res.status(500).send({message: err.message});
    }
});

//////////////////////////////////////// PEGAR TODOS OS USUÁRIOS ////////////////////////////////////////

const getAllUsers = async (): Promise<any> => {
    const resultAllUsers = await connection.raw(`
    SELECT id, nickname FROM TodoListUser
    `)
    return resultAllUsers[0]
}

app.get("/user/all", async (req: Request, res: Response): Promise<void> => {
    try {
        const resultAll = await getAllUsers()
        
        res.send({users: resultAll})
    } catch (err:any) {
        res.status(500).send({message: err.message});
    }
});

//////////////////////////////////////// PEGAR USER PELO ID ////////////////////////////////////////

  const getUserById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT id, nickname FROM TodoListUser WHERE id = '${id}'
    `)
      return result[0][0]
  }

  app.get("/user/:id", async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id
    let errorCode = 400

    try {
      const result = await getUserById(id)
      if(!result) {
        errorCode=422
        throw new Error ("Id não encontrado")
      }
      res.send({result: result})
    } catch (err:any) {
      res.status(500).send({message: err.message});
    }
});

//////////////////////////////////////// EDITAR USUÁRIO ////////////////////////////////////////

app.put("/user/edit/:id", async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id
    const {name, nickname} = req.body
    let errorCode = 400

    try {
        await connection("TodoListUser")
        .update({
          name,
          nickname
        })
        .where("id",id)
        if(!name || !nickname) {
            errorCode=422
            throw new Error ("Preencha todos os campos")
        }
      res.send({message: "Usuário editado com sucesso"})
    } catch (err:any) {
      res.status(500).send({message: err.message});
    }
});

//////////////////////////////////////// EDITAR USUÁRIO ////////////////////////////////////////
type Task = {
    id: string,
    title: string,
    description: string,
    limit_date: string,
    creator_user_id: string
}

  app.post("/task", async (req: Request, res: Response): Promise<void> => {
    let errorCode = 400

    try {
        let {title, description, dueDate, creator_user_id} = req.body
        dueDate = dueDate.split('/').reverse().join('/')
        
        const task: Task = {
            id: Date.now().toString(),
            title, 
            description, 
            limit_date: dueDate, 
            creator_user_id
        }
        await connection("TodoListTask")
        .insert(task)
        
        if(typeof title !== 'string' || typeof description !== 'string'|| typeof dueDate !== 'string' || typeof creator_user_id !== 'string'){
            errorCode=422
            throw new Error ("As informações passadas não são válidas")
        } else if(!title || !description || !dueDate || !creator_user_id){
            errorCode=422
            throw new Error ("Preencha os quatro campos")
        }

      res.send({message: "Tarefa criada com sucesso!"})
    } catch (err:any) {
      res.status(500).send({message: err.message});
    }
});

//////////////////////////////////////// PROCURAR TAREFA POR ID USUÁRIO ////////////////////////////////////////

const searchTaskByUser = async (creator_user_id:string): Promise<any> => {
    const resultAllTasks = await connection.raw(`
        SELECT TodoListTask.id, title, description, limit_date, status, creator_user_id, nickname FROM TodoListTask
        LEFT JOIN TodoListUser ON TodoListTask.creator_user_id = TodoListUser.id WHERE TodoListTask.creator_user_id = '${creator_user_id}'
    `)
    return resultAllTasks[0]
}

app.get("/task", async (req: Request, res: Response): Promise<void> => {
    try {
        let errorCode = 400
        const creator_user_id= req.query.creator_user_id as string

        const resultSearchTasksUser = await searchTaskByUser(creator_user_id)

        if (resultSearchTasksUser.length > 0) {
            for (let i of resultSearchTasksUser) {
              i.limit_date = dateToStringDate(i.limit_date)
            }
        }

        if (!creator_user_id) {
            errorCode = 422
            throw new Error('Favor verificar se o id do usuário criador da tarefa foi preenchido corretamente e tentar novamente.')
        }

        res.send({tasks: resultSearchTasksUser})
    } catch (err:any) {
        res.status(500).send({message: err.message});
    }
});

//////////////////////////////////////// PEGAR TAREFA PELO ID ////////////////////////////////////////

const getResponsibleUsers = async (id: string):Promise<any>=>{
    const selectResponsibleId = await connection.raw(`
        SELECT responsible_user_id, nickname FROM TodoListResponsibleUserTaskRelation
        LEFT JOIN TodoListUser ON TodoListResponsibleUserTaskRelation.responsible_user_id = TodoListUser.id
        WHERE TodoListResponsibleUserTaskRelation.task_id = '${id}'
    `)

    return selectResponsibleId[0]
}

const getTaskById = async (id: string): Promise<any> => {

    const resultTaskId = await connection.raw(`
        SELECT TodoListTask.id, title, description, limit_date, status, creator_user_id, nickname FROM TodoListTask 
        LEFT JOIN TodoListUser ON TodoListTask.creator_user_id = TodoListUser.id 
        LEFT JOIN TodoListResponsibleUserTaskRelation ON TodoListTask.id = TodoListResponsibleUserTaskRelation.task_id
        WHERE TodoListTask.id = '${id}'
    `)

    return resultTaskId[0][0]
}

  app.get("/task/:id", async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id
    let errorCode = 400
    
    try {
      const resultTaskId = await getTaskById(id)
      const resultResponsible = await getResponsibleUsers(id)
      if(!resultTaskId) {
        errorCode=422
        throw new Error ("Id não encontrado")
      }
      resultTaskId.limit_date = dateToStringDate(resultTaskId.limit_date)

      res.send({result: resultTaskId, resultResponsible})
    } catch (err:any) {
      res.status(500).send({message: err.message});
    }
});

//////////////////////////////////////// ATRIBUIR USUARIO A UMA TAREFA ////////////////////////////////////////

app.post("/task/responsible", async (req: Request, res: Response): Promise<void> => {
    let errorCode = 400

    try {
        const {task_id, responsible_user_id} = req.body
        
        await connection("TodoListResponsibleUserTaskRelation")
        .insert({
            task_id,
	        responsible_user_id
        })

        if(!task_id || !responsible_user_id){
            errorCode=422
            throw new Error ("Preencha os dois campos")
        }
        
      res.send({message: "Usuário Atribuído a tarefa!"})
    } catch (err:any) {
      res.status(500).send({message: err.message});
    }
});

////////////////////////////////////////// PEGAR USUÁRIOS RESPONSÁVEIS POR UMA TAREFA ////////////////////////////////////////

const getUserResponsibleTask = async (task_id: string): Promise<any> => {

    const resultTaskId = await connection.raw(`
        SELECT TodoListResponsibleUserTaskRelation.responsible_user_id, TodoListUser.nickname FROM TodoListResponsibleUserTaskRelation
        INNER JOIN TodoListUser ON TodoListResponsibleUserTaskRelation.responsible_user_id = TodoListUser.id
        WHERE TodoListResponsibleUserTaskRelation.task_id = "${task_id}"
    `)
    return resultTaskId[0]
}

  app.get("/task/:task_id/responsible", async (req: Request, res: Response): Promise<void> => {
    const task_id = req.params.task_id 
    let errorCode = 400
    
    try {
      const resultUserResponsibleTaskId = await getUserResponsibleTask(task_id)

      if(!resultUserResponsibleTaskId) {
        errorCode=422
        throw new Error ("Insira o id da tarefa")
      }
      
      if(resultUserResponsibleTaskId.length === 0) {
        errorCode=422
        throw new Error ("Id não encontrado")
      }
      res.send({users: resultUserResponsibleTaskId})
    } catch (err:any) {
      res.status(500).send({message: err.message});
    }
});

////////////////////////////////////////// ATUALIZAR O STATUS DA TAREFA PELO ID ////////////////////////////////////////
app.put("/task/status/:id", async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id
    const { status } = req.body
    let errorCode = 400

    try {
        await connection("TodoListTask")
        .update({
          status
        })
        .where("id",id)

        if(!status) {
            errorCode=422
            throw new Error ("Preencha todos os campos")
        }

      res.send({message: "Status editado com sucesso"})
    } catch (err:any) {
      res.status(500).send({message: err.message});
    }
});