# EXERCÍCIOS KNEX <h1>

### EX 1
a) Quando usamos raw a respota é o resultado da query mais outras informações, onde devemos pegar apenas as informações que precisamos na primeira posição do array.

b) 
const getActorByName = async (name:string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM atores WHERE name = ${name}
  `)
  return result[0]
}

c) 
const countActorsByGender = async (gender:string): Promise<any> =>{
  const result = await connection.raw(`
    SELECT COUNT (*) as COUNT FROM atores WHERE gender = '${gender}'
  `)
  const count = result[0][0].count;
  return count;
}

### EX 2
a)
const createActor = async (id: string, salary: number): Promise<void> => {
  await connection ("atores")
    .update({
      salary: salary
    })
    .where("id", id);
};

b)
const createActor = async (id: string): Promise<void> => {
  await connection ("atores")
    .delete()
    .where("id", id);
};

c)
const createActor = async (gender: string): Promise<void> => {
  await connection ("atores")
    .avg("salary as average")
    .where({gender});
    
    return result[0].average;
};

### EX 3
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
    res.status(400).send({message: err.message,});
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

### EX 4
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

### EX 5
app.post("/movie", async (req: Request, res: Response) => {
  try {
    await connection("Movies")
    .insert({
      id: req.body.id,
      name: req.body.name,
      sinopse: req.body.sinopse,
      date: req.body.date,
      rating: req.body.rating,
      playing_limit_date: req.body.playingLimitDate
    })
    res.send({message: "Success!"})
  } catch (err:any) {
    res.status(400).send({message: err.message});
  }
});

### EX 6
const getAllMovies = async (): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Movie LIMIT 15
  `);

  return result[0];
};

### EX 7

const searchMovies = async (search:string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Movies WHERE name LIKE "%${search}%" OR sinopse LIKE "%${search}%" LIMIT 15
  `);

  return result[0];
};

app.get("/movie/search", async (req: Request, res: Response) => {
  try {
    const movies = await searchMovies(req.query.search as string);
    res.send({movies: movies})
  } catch (err:any) {
    res.status(400).send({message: err.message});
  }
});