import "express-async-errors";
import "reflect-metadata";
import express from "express";
import handleError from "./errors/handleError";
import userRouter from "./routers/users/users.touters";
import habitRouter from "./routers/habits/habit.routers";
import loginRouter from "./routers/users/login.router";

const app = express();
app.use(express.json());

app.use("/users", userRouter);
app.use("/login", loginRouter);
app.use("/habits", habitRouter);

app.use(handleError);
export default app;
