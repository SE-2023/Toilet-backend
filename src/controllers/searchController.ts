import { Request, Response } from 'express';
import Toilet from '../models/Toilet';
import Location from '../models/Location';

export const searchToilet= async (req: Request, res: Response) => {
  console.log('searchToilet work!');

  const query = req.query;
  console.log('query: ', query.title);
  
  try {
    const regexQuery = { title: { $regex: new RegExp(String(query.title), 'i') } };
    const dataPublicToilet = await Location.find(regexQuery).lean().exec();
    const dataPrivateToilet = await Toilet.find(regexQuery).lean().exec();
    res.status(200).json({
        message: 'success',
        publicToilet: dataPublicToilet,
        privateToilet: dataPrivateToilet
    });
    console.log(dataPublicToilet);
    console.log(dataPrivateToilet);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
};