type Usuarios = {name:string, email:string, role:string}
enum ADMIN {
    USER="user",
    ADMIN="admin"
}

const usuarios:Usuarios[] = [
	{name: "Rogério", email: "roger@email.com", role: ADMIN.USER},
	{name: "Ademir", email: "ademir@email.com", role: ADMIN.ADMIN},
	{name: "Aline", email: "aline@email.com", role: ADMIN.USER},
	{name: "Jéssica", email: "jessica@email.com", role: ADMIN.USER},  
	{name: "Adilson", email: "adilson@email.com", role: ADMIN.USER},  
	{name: "Carina", email: "carina@email.com", role: ADMIN.ADMIN}      
] 

function admin(usuarios:Usuarios[]):string[]{
    return usuarios.filter((usuario)=>{
        return usuario.role === ADMIN.ADMIN
    })
    .map((usuario)=>{
        return usuario.email
    })
}

console.log(admin(usuarios))