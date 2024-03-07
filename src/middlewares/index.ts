import { Express } from "express";
import helmetApp from "./helmet";
import cookieMiddleware from "./cookies";
import { googleMiddleware } from "./googleMidleware";

const middleWares = (app: Express)=> {
    helmetApp(app);
    cookieMiddleware(app);
    googleMiddleware(app)
}

export default middleWares