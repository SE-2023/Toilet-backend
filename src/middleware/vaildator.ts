import { body, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

export const signUpValidation = () => [
    body('firstname')
        .not()
        .isEmpty()
        .withMessage('First name is required')
        .bail()
        .isLength({ min: 3, max: 20 })
        .withMessage('First name must be between 3 and 20 characters'),
    body('lastname')
        .not()
        .isEmpty()
        .withMessage('Last name is required')
        .bail()
        .isLength({ min: 3, max: 20 })
        .withMessage('Last name must be between 3 and 20 characters'),
    body('phone')
        .not()
        .isEmpty()
        .withMessage('Phone number is required')
        .bail()
        .matches(/^0\d{2}-\d{3}-\d{4}$/)
        .withMessage('Invalid phone number(000-000-0000)'),
    body('email')
        .not()
        .isEmpty()
        .withMessage('Email is required')
        .bail()
        .isEmail()
        .withMessage('Email is not valid'),
    body('password')
        .not()
        .isEmpty()
        .withMessage('Password is required')
        .bail()
        .isLength({ min: 5, max: 10 })
        .withMessage('Password must be between 5 and 10 characters'),
    body('conPassword')
        .not()
        .isEmpty()
        .withMessage('Confirmed password is required')
        .bail()
        .custom((value, { req }) => value === req.body.password)
        .withMessage('Passwords do not match'),
];

export const updateProfileValidation = () => [
    body('firstname')
        .not()
        .isEmpty()
        .withMessage('First name is required')
        .bail()
        .isLength({ min: 3, max: 20 })
        .withMessage('First name must be between 3 and 20 characters'),
    body('lastname')
        .not()
        .isEmpty()
        .withMessage('Last name is required')
        .bail()
        .isLength({ min: 3, max: 20 })
        .withMessage('Last name must be between 3 and 20 characters'),
    body('phone')
        .not()
        .isEmpty()
        .withMessage('Phone number is required')
        .bail()
        .matches(/^0\d{2}-\d{3}-\d{4}$/)
        .withMessage('Invalid phone number(000-000-0000)'),
    body('email')
        .not()
        .isEmpty()
        .withMessage('Email is required')
        .bail()
        .isEmail()
        .withMessage('Email is not valid'),
];

export const toiletValidation = () => [
    // body('toiletPicture')
    //     .not()
    //     .isEmpty()
    //     .withMessage('toiletpicture is required'),
    body('title')
        .not()
        .isEmpty()
        .withMessage('Placename is required')
        .bail()
        .isLength({ min: 3, max: 20 })
        .withMessage('Placename must be between 3 and 20 characters'),
    body('cost')
        .not()
        .isEmpty()
        .withMessage('Cost is required')
        .bail()
        .isNumeric()
        .withMessage('Cost must be number'),
    body('contact')
        .not()
        .isEmpty()
        .withMessage('Phone number is required')
        .bail()
        .matches(/^0\d{2}-\d{3}-\d{4}$/)
        .withMessage('Invalid phone number(000-000-0000)'),
    body('timeClose')
        .custom((value, { req }) => value > req.body.timeOpen)
        .withMessage('TimeClose must be most than timeOpen'),
];

export const validate = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error_validated = errors.array().map((item: any) => {
            return {
                param: item.param,
                msg: item.msg,
            };
        });
        return res.status(422).json({ errors: error_validated });
    }
    next();
};
