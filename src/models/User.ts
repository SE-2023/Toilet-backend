import { Document, model, Schema, SchemaOptions } from 'mongoose';

interface IUserDocument extends Document {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    salt: string;
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
        salt: {
            type: String,
            require: true
        }
    },
    options
);

const User = model<IUserDocument>('users', userSchema);

export default User;
