import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

interface DecodedToken {
    uid: string;
}

export const authentication = (req: Request, res: Response, next: NextFunction) => {
    const authorization = req.headers.authorization;

    const token = String(authorization).split('Bearer ')[1];

    try {
        const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);
        req.session.uid = decoded.uid;
        next();
    } catch (error) {
        console.log('error', error);
        res.status(401).json({ message: 'Unauthorized' });
    }
};