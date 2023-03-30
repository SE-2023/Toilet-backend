import { Request, Response } from 'express';
import mongoose from 'mongoose';
import Toilet from '../models/Toilet';
import { uploadImage } from '../utils/cloudinary';
export const createToilet = async (req: Request, res: Response) => {
    const { secure_url } = await uploadImage(req.body.toiletpicture);
    console.log(secure_url);
    console.log('createToilet work!');
    const body = req.body;
    await Toilet.create({
        title: req.body.title,
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

export const getAlltoiletPrivate = async (req: Request, res: Response) => {
    console.log('getAlltoiletPrivate work!');

    const data = await Toilet.find();
    res.status(200).json({
        message: 'success',
        data: data,
    });
};

export const getMytoilet = async (req: Request, res: Response) => {
    console.log('getMytoilet work!');
    const query = req.query;
    console.log('getMytoilet: ', query.createBy);
    const regexQuery = query.createBy;
    console.log(regexQuery);
    try {
        if (query.createBy !== '') {
            const regexQuery = query.createBy;
            if (regexQuery) {
                console.log(regexQuery);
                const dataMytoilet: any = await Toilet.aggregate([
                    { $match: { createBy: new mongoose.Types.ObjectId(regexQuery.toString()) } },
                    { $sort: { createdAt: -1 } },
                ]);
                if (dataMytoilet.length > 0) {
                    res.status(200).json({
                        message: 'success',
                        Mytoilet: dataMytoilet,
                    });
                    console.log(dataMytoilet);
                } else {
                    console.log('No data');
                    res.status(400).json({ message: 'No results found' });
                }
            } else {
                console.log('regexQuery is undefined');
                res.status(400).json({ message: 'Invalid query' });
            }
        } else {
            console.log('No search');
            res.status(400).json({ message: 'Please enter place name' });
        }
    } catch (err) {
        console.log(err);
        res.status(500);
    }
};

export const updateToilet = async (req: Request, res: Response) => {
    console.log('updateToilet work!');

    try {
        const { secure_url } = await uploadImage(req.body.toiletpicture);
        console.log(secure_url);

        await Toilet.findByIdAndUpdate(req.body._id, {
            title: req.body.title,
            contact: req.body.contact,
            cost: req.body.cost,
            handicap: req.body.handicap,
            type: req.body.type,
            timeOpen: req.body.timeOpen,
            timeClose: req.body.timeClose,
            toiletpicture: secure_url,
        })

            .then((data) => {
                console.log(data);
                res.status(200).json({ data: data });
            })
            .catch((err) => {
                console.log('error', err);
                res.status(500).json({ message: 'server error' });
            });
    } catch (error) {
        console.log('error', error);
    }
};
