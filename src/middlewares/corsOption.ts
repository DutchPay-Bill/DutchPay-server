import cors, { CorsOptions } from "cors";
import { Application, Request } from "express";
import { api_url } from "../utils/url";

const allowedOrigins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "https://dutchpay-bill.web.app",
    "http://localhost:3000",
    api_url
];

const corsOptions = {
    origin: function (origin: any, callback: any) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true,
};

const corsMiddleware = (app: Application) => {
    app.use(cors(corsOptions));
    app.options('*', cors());
};

export default corsMiddleware;