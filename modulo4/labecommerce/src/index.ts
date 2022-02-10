import express, {Express} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import { createUser } from './endpoints/users/createUser';
import { getUsers } from './endpoints/users/getUsers';
import { createProduct } from './endpoints/products/createProduct';
import { getProducts } from './endpoints/products/getProducts';
import { purchaseRegister } from './endpoints/purchases/purchaseRegister';

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

app.post("/users", createUser)
app.get("/users", getUsers)
app.post("/products", createProduct)
app.get("/products", getProducts)
app.post("/purchases", purchaseRegister)