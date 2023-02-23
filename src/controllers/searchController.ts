import { Request, Response } from 'express';
import Toilet from '../models/Toilet';

export const searchToilet= async (req: Request, res: Response) => {
  console.log('searchToilet work!');

  const query = req.query;
  console.log('query: ', query);
  
  try {
    
    const regexQuery = { name: { $regex: new RegExp(query.name, 'i') } };
    
    const data = await Toilet.find(regexQuery);
    res.status(200).json({
        message: 'success',
        data: data
    });
    console.log(data);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
};