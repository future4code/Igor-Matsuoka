import express from "express";

import { AddressInfo } from "net";

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;

//1
app.get("/", (req, res) => {          
    res.send("Hello from Express")
})

//2
type User = {
  id: number,
  name: string,
  phone: string,
  email: string,
  website: string
}

//3
const user1: User = {
  id: 1,
  name: "Igor",
  phone: "(43)3322-2322",
  email: "igor@gmail.com",
  website: "www.igor.com.br"
}

const user2: User = {
  id: 2,
  name: "Marcos",
  phone: "(43)3322-2324",
  email: "marcos@gmail.com",
  website: "www.marcos.com.br"
}

const user3: User = {
  id: 3,
  name: "Nayara",
  phone: "(43)3322-2323",
  email: "nayara@gmail.com",
  website: "www.nayara.com.br"
}

const arrayUsers = [user1, user2, user3]

//4
app.get("/users", (req, res) => {          
  const currentUsers = arrayUsers
  res.status(200).send(currentUsers)
})

//5
type Post = {
  id: number,
  title: string,
  body: string,
  userId: number
}

//6
const post1:Post = {
  userId: 1,
  id: 1,
  title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}

const post2:Post = {
  userId: 2,
  id: 2,
  title: "qui est esse",
  body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
}

const post3:Post= {
  userId: 3,
  id: 3,
  title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
  body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
}

const arrayDePosts = [post1, post2, post3]

//7
app.get("/posts", (req, res) => {          
  const currentPosts = arrayDePosts
  res.status(200).send(currentPosts)
})

//8
app.get("/posts/:id", (req, res) => {          
  const currentPosts = arrayDePosts
  res.status(200).send(currentPosts)
})
