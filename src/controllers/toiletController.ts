import { Request, Response } from 'express';
import Toilet from '../models/Toilet';
export const createToilet = async (req: Request, res: Response) => {
    console.log('createToilet work!');
    const body = req.body;
    await Toilet.create(body);
    res.status(201).json({
        message: 'createdToiletByUser',
    });
};
