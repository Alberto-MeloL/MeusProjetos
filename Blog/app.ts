import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors()); //configurar melhor isso aqui, para que serve

app.get("/", ()=>{
  console.log("Hello World!");
})


app.listen(process.env['PORT'], ()=>{
  console.log(`Server running on: http://localhost:${process.env['PORT']}`);
})
