import { Request, Response } from 'express';
import mongoose from 'mongoose';
import myList from '../models/myList';

export const addMyList = async (req: Request, res: Response) => {
    console.log('addMyList work!');
    const body = req.body;
    await myList.create(body);
    res.status(201).json({
        message: 'Finish',
    });
}

export const getMyList = async (req: Request, res: Response) => {
    console.log('getMyList work!');
    const query = req.query;
    console.log('getMyList: ', query.userId);
    const regexQuery = query.userId;
    console.log(regexQuery);
    try {
        if (query.userId !== '') {
            const regexQuery = query.userId;
            if (regexQuery) {
                console.log(regexQuery);
                const dataMyList: any = await myList.aggregate([
                    { $match: { userId: new mongoose.Types.ObjectId(regexQuery.toString()) } },                    
                        {
                        $lookup: {
                          from: "locations",
                          localField: "toiletId",
                          foreignField: "_id",
                          as: "myListPublic"
                        }
                        },
                        {
                        $lookup: {
                          from: "toilets",
                          localField: "toiletId",
                          foreignField: "_id",
                          as: "myListPrivate"
                        }
                        },
                      
                    { $sort: { createdAt: -1 } },
                ])
                if (dataMyList.length > 0) {
                    res.status(200).json({
                        message: 'success',
                        myList: dataMyList,
                    });
                    console.log(dataMyList);
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
}

export const deleteMyList = async (req: Request, res: Response) => {
    console.log(req.query._id)
    await myList.findByIdAndRemove(req.query._id)
        .then((data) => {
            console.log(data);
            res.send(data);
        })
        .catch((err) => {
            console.log('error', err);
        });
};