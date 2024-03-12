import cors, { CorsOptions } from "cors";
import { Application, Request } from "express";
import { api_url } from "../utils/url";

const client = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "https://dutchpay-bill.web.app",
    "http://localhost:3000",
    `${api_url}`
];

const corsOptions = {
    origin: client,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    credentials: true,
    optionsSuccessStatus: 204,
};

const corsMiddleware = (app: Application) => {
    app.use(cors(corsOptions));
};

export default corsMiddleware;