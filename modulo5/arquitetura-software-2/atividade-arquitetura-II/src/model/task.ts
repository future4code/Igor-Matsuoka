export type Task = {
   title: string,
   description: string,
   deadline: string,
   authorId: string
}


export type task = Task & { id: string }