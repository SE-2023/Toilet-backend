import { Request, Response } from 'express';
import Toilet from '../models/Toilet';
import { uploadImage } from '../utils/cloudinary';
export const createToilet = async (req: Request, res: Response) => {
    const { secure_url } = await uploadImage(req.body.profile_picture);
    console.log(secure_url);
    console.log('createToilet work!');
    const body = req.body;
    await Toilet.create(body);
    res.status(201).json({
        message: 'createdToiletByUser',
    });
};
