import { Request, Response } from 'express';
import Toilet from '../models/Toilet';
import User from '../models/User';
import Comment from '../models/Comment';

export const getChartPostEachDay = async (req: Request, res: Response) => {

    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const dayOfMonth = new Date(currentYear, currentMonth, 0).getDate();

    // const days = Array.from({ length: dayOfMonth }, (_, i) => i + 1);

    try {
        const toilets = await Toilet.find();

        console.log("toilets ", toilets)

        const day_post = toilets.map((post:any) => new Date(post.createdAt).getDate())

        const post_per_day = day_post.reduce((acc:any, value:any) => ({
            ...acc,
            [value]: (acc[value] || 0) + 1
         }), {});
         
         console.log("toilets post_per_day", post_per_day)

         res.status(200).json({data: post_per_day})

    } catch (error) {
        console.log(error)
    }
};

export const getSummary = async (req: Request, res: Response) => {
    try {
        const toilets = await Toilet.find();
        const total_toilet = toilets.length;

        const users = await User.find()
        const total_user = users.length;

        const comments = await Comment.find();
        const total_comment = comments.length;


        const data = {
            toilet: total_toilet,
            user: total_user,
            comment: total_comment
        }

        res.status(200).json(data)

    } catch (error) {
        
    }
}

export const getTopReview = async (req: Request, res: Response) => {
    try {
        const reviews = await Comment.aggregate([
            {
                $lookup: {
                    from: 'toilets',
                    localField: 'toiletId',
                    foreignField: '_id',
                    as: 'result',
                },
            },
            { 
                $sort: { createdAt: -1 } 
            }
        ]) 
        .limit(5);

        console.log("top review: ",  reviews)

        res.status(200).json({data: reviews})

    } catch (error) {
        console.log(error)
    }
}