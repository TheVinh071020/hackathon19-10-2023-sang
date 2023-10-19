import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";

import todoRouter from "./routes/todolist.routes";

const app = express();
const port: number = 3000;

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/api/v1/users", todoRouter);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
