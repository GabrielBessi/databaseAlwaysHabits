import "express-async-errors";
import express from "express";
import "reflect-metadata";
import handleError from "./errors/handleError";
import userRouter from "./routers/users/users.touters";

const app = express();
app.use(express.json());
app.use(handleError);

app.use("/users", userRouter);

export default app;
