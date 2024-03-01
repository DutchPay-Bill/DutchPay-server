import { CorsOptions } from 'cors';
import * as dotenv from 'dotenv';

dotenv.config()

const clientAccess: CorsOptions = {
        origin: ['http://locahost:5173', 'https://dutchpay.com'],
        methods: ['GET', 'POST', 'PUT', 'DELETE']
    }


export default clientAccess