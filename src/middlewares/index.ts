import { Express } from "express";
import helmetApp from "./helmet";
import cookieMiddleware from "./cookies";

const middleWares = (app: Express)=> {
    helmetApp(app);
    cookieMiddleware(app);
}

export default middleWares