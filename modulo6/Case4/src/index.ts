import { app } from "./Data/app";
import { runRouter } from "./Routes/RunRouter";

app.use("/run", runRouter)