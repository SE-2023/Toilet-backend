import { Request, Response } from 'express';
import Toilet from '../models/Toilet';
import { uploadImage } from '../utils/cloudinary';
export const createToilet = async (req: Request, res: Response) => {
    const { secure_url } = await uploadImage(req.body.profile_picture);
    console.log(secure_url);
    console.log('createToilet work!');
    const body = req.body;
    await Toilet.create({
        name: req.body.name,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        desc: req.body.desc,
        contact: req.body.contact,
        free: req.body.free,
        cost: req.body.cost,
        handicap: req.body.handicap,
        createBy: req.body.createBy,
        type: req.body.type,
        timeOpen: req.body.timeOpen,
        timeClose: req.body.timeClose,
        toiletpicture: secure_url,
    });
    res.status(201).json({
        message: 'createdToiletByUser',
    });
};
