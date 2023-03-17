import { Request, Response } from 'express';
import Toilet from '../models/Toilet';
import Location from '../models/Location';

export const searchToilet= async (req: Request, res: Response) => {
  console.log('searchToilet work!');

  const query = req.query;
  console.log('query: ', query.title);
  
  try {
    if(query.title !== ""){
      const regexQuery = { title: { $regex: new RegExp(`${query.title}`, 'i') } };
      console.log(regexQuery);
      const dataPublicToilet = await Location.find(regexQuery).lean().exec();
      const dataPrivateToilet = await Toilet.find(regexQuery).lean().exec();
      const toiletsData = [...dataPrivateToilet, ...dataPublicToilet];
      // const toiletsData = dataPrivateToilet.concat(dataPublicToilet);
      // console.log(toiletData);
      // console.log(dataPublicToilet);
      // console.log("////////////////////////////////////////////////////////////////");
      // console.log(dataPrivateToilet);
      // console.log("////////////////////////////////////////////////////////////////");
      // console.log(toiletData);
      if(toiletsData.length > 0){
        res.status(200).json({
          message: 'success',
          Toilet: toiletsData,
        });
        console.log(toiletsData);
      } else {
        console.log('No data')
        res.status(400).json({ msg: 'No results found' });
      }
    } else {
      console.log('No search')
      res.status(400).json({ msg: 'Please enter place name' });
    }
  } catch (err) {
    console.log(err);
    res.status(500);
  }
};