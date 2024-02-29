import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import { db } from './config/db/dbConnection';
// integration with .env
dotenv.config();

const app = express()
db();
// body parser
app.use(express.json());
// set cors accept all
app.use(cors())
// server port
const server_port = process.env.SERVER_PORT || 3001;
// API root route
app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome to DutchPay API"
    })
})
//server listening
app.listen(server_port, ()=> {
  console.log(`server listening at http://localhost:${server_port}`)
});
// export app for vercel
export default app