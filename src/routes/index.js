import express from "express";
import myController from "../controllers/myController";

const app = express();

const PORT = 3000;
app.get("/", myController.printName);
app.listen(PORT, console.log(`server running on Port ${PORT}`));

export default app;
