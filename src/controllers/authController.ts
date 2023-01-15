import { Request, Response } from 'express';
import User from '../models/User';

export const signup = (req: Request, res: Response) => {
    const body = req.body;
    console.log('body', body);
    User.create(body);
};

export const signin = () => {
    console.log('signin con');
};
