export default class CustomAPIErrors extends Error{
    statusCode: number
    constructor(message:string, statusCode:number){
        super(message);
        this.statusCode = statusCode
    }
}