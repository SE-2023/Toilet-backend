import { Request, Response } from 'express';
import Comment from '../models/Comment';
export const createComment = async (req: Request, res: Response) => {
    console.log('createComment work!');
    const body = req.body;
    await Comment.create(body);
    res.status(201).json({
        message: 'created',
    });
};

// export const getAllLocation = async (req: Request, res: Response) => {
//     console.log('getAllLocation work!');

//     // const query = req.query;
//     // console.log('query: ', query);

//     const data = await Location.find();
//     res.status(200).json({
//         message: 'success',
//         data: data,
//     });
// };
