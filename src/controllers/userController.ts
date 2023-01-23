import { Request, Response } from 'express';
import User from '../models/User';
// export const createLocation = async (req: Request, res: Response) => {
//     console.log('createLocation work!');
//     const body = req.body;
//     await Location.create(body);
//     res.status(201).json({
//         message: 'created'
//     });
// };

// export const User = mongoose.model('users')
export const updateUser =  async (req: Request, res: Response) => {
    User.findByIdAndUpdate(req.body.id, {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        hash: req.body.hash,
        salt: req.body.salt,
        profilepicture:req.body.profilepicture
    }).then((data) => {
        console.log(data);
        res.send(data);
    }).catch((err) => {
        console.log("error", err);
    });
};

export const deleteUser = async (req: Request, res:Response) => {
    User.findByIdAndRemove(req.body.id)
    .then(data => {
        console.log(data)
        res.send(data)
    }).catch(err =>{
        console.log("error",err)
    })
}
