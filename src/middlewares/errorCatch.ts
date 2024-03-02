// error handler midleware
import { Request, Response, NextFunction } from 'express';
import ErrorHandler from '../utils/errorHandler';

const errorCatch = ( error: ErrorHandler, req: Request, res: Response, next: NextFunction ) => {
  const status = error.status || 500;
  const message = error.message || 'An error occurred';
  const success = error.success || false;
  
  res.status(status).json({ success, message });
}

export default errorCatch;