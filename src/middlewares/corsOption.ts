import cors, { CorsOptions } from "cors";
import { Application, Request } from "express";
import { api_url } from "../utils/url";

const origin = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "https://dutchpay-bill.web.app",
    "http://localhost:3000"
];

const corsOptions = (req: Request | any, callback: (err: Error | null, options?: CorsOptions) => void) => {
    const clientOrigin = origin.includes(req.header("Origin"));
    const isPostman = req.header("User-Agent")?.includes("Postman","google");
    const isAuthGoogleRoute = req.path === `${api_url}/v1/auth/google/*`;
    if (clientOrigin || isAuthGoogleRoute) { 
        callback(null, {
            origin: true,
            methods: 'GET, POST, DELETE, PUT, OPTIONS, HEAD',
            credentials: true
        });
    } else if (isPostman) {
        callback(null, {
            origin: 'https://www.getpostman.com',
            methods: 'GET, POST, PUT, DELETE, OPTIONS, HEAD',
            credentials: true
        });
    } else {
        callback(new Error('Not allowed by CORS'));
    }
};

const corsMiddleware = (app: Application) => {
    app.use(cors(corsOptions));
};

export default corsMiddleware;