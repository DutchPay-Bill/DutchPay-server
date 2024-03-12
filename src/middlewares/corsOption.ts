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

const corsOptions = (req: Request | any, callback: (err: Error | null, options?: CorsOptions) => void) => {
    const clientOrigin = client.includes(req.header("Origin"));
    const isPostman = req.header("User-Agent")?.includes("Postman");
    if (clientOrigin) {
        callback(null, {
            origin: true,
            methods: 'GET, POST, DELETE, PUT, PATCH, OPTIONS, HEAD',
            credentials: true
        });
    } else if (isPostman) {
        callback(null, {
            origin: 'https://www.getpostman.com',
            methods: 'GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD',
            credentials: true,
        });
    } else {
        callback(new Error('Not allowed by CORS'));
    }
};

const corsMiddleware = (app: Application) => {
    app.use(cors(corsOptions));
    app.options('*', cors());
};

export default corsMiddleware;