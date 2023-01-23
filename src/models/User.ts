import { Document, model, Schema, SchemaOptions } from 'mongoose';

interface IUserDocument extends Document {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    hash: string;
    salt: string;
    profilepicture:string;
}

const options: SchemaOptions = {
    toJSON: {
        transform(doc, ret) {
            delete ret._id;
            delete ret.password;
            delete ret.salt;
            delete ret.createAt;
            delete ret.updateAt;
        }
    },
    timestamps: true
};

const userSchema = new Schema(
    {
        firstname: {
            type: String,
            require: true
        },
        lastname: {
            type: String,
            require: true
        },
        phone: {
            type: String,
            unique: true
        },
        email: {
            type: String,
            require: true,
            unique: true
        },
        password: {
            type: String,
            require: true
        },
        hash: {
            type: String,
            require: false
        },
        salt: {
            type: String,
            require: true
        },
        profilepicture: {
            type: String,
            default: "http://res.cloudinary.com/di71vwint/image/upload/v1674291349/images/nsopymczagslnr78yyv5.png",
        }
    },
    options
);

const User = model<IUserDocument>('users', userSchema);

export default User;

