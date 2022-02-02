import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import { connection } from './connections';

const app: Express = express();

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});

app.use(express.json());
app.use(cors());

//1
const getActorByName = async (name:string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM atores WHERE name = "${name}"
  `)
  console.log(result)
  return result[0]
}

const countActorsByGender = async (gender:string): Promise<any> =>{
  const result = await connection.raw(`
    SELECT COUNT(*) as count FROM atores WHERE gender="${gender}"
  `)
  const count = result[0][0].count;
  return count;
}

//2
const updateActor = async (id: string, salary: number): Promise<void> => {
  await connection ("atores")
    .update({
      salary: salary
    })
    .where("id", id);
};

const deleteActor = async (id: string): Promise<void> => {
  await connection ("atores")
    .delete()
    .where("id", id);
};

const averageSalary = async (gender: string): Promise<void> => {
  const result = await connection ("atores")
    .avg("salary as average")
    .where({gender});

    return result[0].average;
};

//3

const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM atores WHERE id = '${id}'
  `)
	return result[0][0]
}

app.get("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const actor = await getActorById(id);

    res.status(200).send(actor)

  } catch (err:any) {
    res.status(400).send({message: err.message});
  }
});

app.get("/actor", async (req: Request, res: Response) => {
  try {
    const gender = req.query.gender
    const count = await countActorsByGender(gender as string);

    res.status(200).send({quantity: count})

  } catch (err:any) {
    res.status(400).send({message: err.message});
  }
});

//4
app.put("/actor", async (req: Request, res: Response) => {
  try {
    await updateActor(
      req.body.id,
      req.body.salary
    )
    res.status(200).send({message: "Updated!"})

  } catch (err:any) {
    res.status(400).send({message: err.message});
  }
});

app.delete("/actor/:id", async (req: Request, res: Response) => {
  try {
    await deleteActor(
      req.params.id
    )
    res.status(200).send({message: "Deleted!"})

  } catch (err:any) {
    res.status(400).send({message: err.message});
  }
});