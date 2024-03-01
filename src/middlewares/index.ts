import { Express } from "express";
import helmetApp from "./helmet";

const middleWares = (app: Express)=> {
    helmetApp(app);
}

export default middleWares