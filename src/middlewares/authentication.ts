import { Request, Response, NextFunction } from 'express';
import jwt, {JwtPayload, Secret} from 'jsonwebtoken';
import JWT_TOKEN from '../config/jwt/jwt';
import ErrorHandler from '../utils/errorHandler';



const authenticationMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.access_token;

    if (!token) {
        const error = new ErrorHandler({
            success: false,
            message: 'Unauthorized Access..',
            status: 400
        });
        return next(error);
    } else {
        try {
            const decodedToken = jwt.verify(token, JWT_TOKEN as Secret) as JwtPayload;
            console.log("Decoded Token: ", decodedToken);
            // if ('role' in decodedToken) {
                req.user = decodedToken
                next();
            // } else {
            //     const error = new ErrorHandler({
            //         success: false,
            //         message: 'Unidentified Role...',
            //         status: 401
            //     });
            //     return next(error); 
            // }
        } catch (error) {
            const err = new ErrorHandler({
                success: false,
                message: 'Invalid Request..!',
                status: 500
            });
            return next(err);
        }
    }
}

export default authenticationMiddleware