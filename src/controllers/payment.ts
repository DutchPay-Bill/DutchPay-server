import { Request, Response, NextFunction } from 'express';
import { createPaymentService } from '../services/paymentService';
import jwt from 'jsonwebtoken'
import JWT_TOKEN from '../config/jwt/jwt';


async function addNewPayment(req: Request, res: Response) {
  try {
      const tokenJWT = req.cookies.access_token;

      if (!tokenJWT) {
          res.status(401).json({ message: 'Unauthorized - Token not provided' });
          return;
      }

      const decodedToken: jwt.JwtPayload = jwt.verify(tokenJWT, JWT_TOKEN!) as jwt.JwtPayload;

      const user_id = decodedToken.id;
      const { card_number, card_name, payment_method_id } = req.body

      const addPayment = await createPaymentService(user_id, card_number, card_name, payment_method_id);
     
      const cardNumberString = addPayment.card_number.toString();

      res.status(201).json({
        message: 'Create Payment successfully',
        data: {
            ...addPayment,
            card_number: cardNumberString
        }
      });
  } catch (error) {
      res.status(500).json({ message: 'Error creating Payment' });
  }
}

export { addNewPayment }