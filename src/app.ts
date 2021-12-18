import express, { Request, Response } from 'express';
const app = express();
declare let process : {
    env: {
      PORT: number
    }
  }
const PORT= process.env.PORT | 3000;
app.use(express.json());



app.use((req:Request, res:Response)=>{
    res.status(404).send("Invalid URL")
})

app.listen(PORT, ()=> console.log("Server Running..."))