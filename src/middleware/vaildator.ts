import { body, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

export const signUpValidation = () => [
    body('firstname')
        .not().isEmpty()
        .withMessage('First name is required')
        .bail()
        .isLength({ min: 3, max: 20 })
        .withMessage('First name must be between 3 and 20 characters'),
    body('lastname')
        .not().isEmpty()
        .withMessage('Last name is required')
        .bail()
        .isLength({ min: 3, max: 20 })
        .withMessage('Last name must be between 3 and 20 characters'),
    body('phone')
        .not().isEmpty()
        .withMessage('Phone number is required')
        .bail()
        .isMobilePhone('any')
        .withMessage('Invalid phone number'),
    body('email')
        .not().isEmpty()
        .withMessage('Email is required')
        .bail()
        .isEmail()
        .withMessage('Email is not valid'),
    body('password')
        .not().isEmpty()
        .withMessage('Password is required')
        .bail()
        .isLength({ min: 5, max: 10 })
        .withMessage('Password must be between 5 and 10 characters'),
    body('conPassword')
        .not().isEmpty()
        .withMessage('Confirmed password is required')
        .bail()
        .custom((value, { req }) => value === req.body.password)
        .withMessage('Passwords do not match'),
];

export const validate = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
};