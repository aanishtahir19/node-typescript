import express from 'express';
import ErrorHandler from './Middleware/CustomErrorHandler';
import NotFound from './Middleware/NotFound'; 
import MainRoute from './Routes/MainRoute'
require('express-async-errors');
const app = express();
import { config } from 'dotenv';
config();
const PORT= process.env.PORT;
app.use(express.json());
app.use("/api", MainRoute);
// app.use(NotFound); // Path Not Found Middleware
app.use(ErrorHandler); // Customr Error Handler Middleware

app.listen(PORT, ()=> console.log(`Server Running on Port ${PORT}`))