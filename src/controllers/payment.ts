import { Request, Response, NextFunction } from 'express';
import { createPaymentService } from '../services/paymentService';
import jwt from 'jsonwebtoken'

const secretKey = 'your_secret_key';

async function addNewPayment(req: Request, res: Response) {
  try {
      const tokenJWT = req.cookies.token;

      if (!tokenJWT) {
          res.status(401).json({ message: 'Unauthorized - Token not provided' });
          return;
      }

      const decodedToken: jwt.JwtPayload = jwt.verify(tokenJWT, secretKey) as jwt.JwtPayload;

      const user_id = decodedToken.id;
      const { card_number, card_name, payment_method_id } = req.body

      const addPayment = await createPaymentService(user_id, card_number, card_name, payment_method_id);
      res.status(201).json({
          message: 'Create Payment successfully',
          data: addPayment,
      });
  } catch (error) {
      res.status(500).json({ message: 'Error creating Payment' });
  }
}

export { addNewPayment }