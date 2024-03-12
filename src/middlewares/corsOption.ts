import cors from "cors";
import { Application, Request, Response } from "express";
import { api_url } from "../utils/url";

const client = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "https://dutchpay-bill.web.app",
    "http://localhost:3000",
    `${api_url}`
];

const corsOptions = {
    origin: function (origin: any, callback: any) {
        if (origin && client.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: 'GET, POST, DELETE, PUT, PATCH, OPTIONS, HEAD',
    credentials: true,
    allowedHeaders: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
};


const corsMiddleware = (app: Application) => {
    app.use(cors(corsOptions));
    app.options('*', cors(corsOptions));
};

export default corsMiddleware;
