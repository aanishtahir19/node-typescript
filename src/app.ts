import express, { Request, Response } from 'express';
import ErrorHandler from './Middleware/ErrorHandler';
import NotFound from './Middleware/NotFound'; 
const app = express();
import { config } from 'dotenv';
config();
const PORT= process.env.PORT;
app.use(express.json());

app.use(NotFound); // Path Not Found Middleware
app.use(ErrorHandler); // Customr Error Handler Middleware
app.use((req:Request, res:Response)=>{
    res.status(404).send("Invalid URL")
})

app.listen(PORT, ()=> console.log(`Server Running on Port ${PORT}`))