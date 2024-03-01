import { Request, Response, NextFunction } from 'express';
import ErrorHandler from '../utils/errorHandler';

const authorizationMiddleware = (roles: string[]) => (req: Request, res: Response, next: NextFunction) => {
    if (req.role && !roles.includes(req.role)) {
        const error = new ErrorHandler({
            success: false,
            message: 'Unauthorized Access',
            status: 401,
        });
        return next(error);
    } 
    
    next();
};

export default authorizationMiddleware;
