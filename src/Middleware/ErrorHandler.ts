import { NextFunction, Request, Response } from "express";
import CustomAPIErrors from '../Errors/CustomAPIErrors'
export default function (err:unknown, req:Request, res:Response, next:NextFunction){
    if(err instanceof CustomAPIErrors){
        return res.status(err.statusCode).json({msg: err.message})
    }
    return res.status(500).send('Something went wrong try again later')
}