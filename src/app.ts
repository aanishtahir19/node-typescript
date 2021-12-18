import express, { Request, Response } from 'express';
const app = express();
import { config } from 'dotenv';
config();
const PORT= process.env.PORT;
app.use(express.json());



app.use((req:Request, res:Response)=>{
    res.status(404).send("Invalid URL")
})

app.listen(PORT, ()=> console.log(`Server Running on Port ${PORT}`))