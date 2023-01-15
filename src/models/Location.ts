import { Document, model, Schema, SchemaOptions } from 'mongoose';

interface ILocationDocument extends Document {
    latitude: number;
    longitude: number;
    title: string;
}

const options: SchemaOptions = {
    toJSON: {
        transform(doc, ret) {
            // delete ret._id;
            // delete ret.password;
            // delete ret.salt;
            // delete ret.createAt;
            // delete ret.updateAt;
        }
    },
    timestamps: true
};

const locationSchema = new Schema(
    {
        latitude: {
            type: Number,
            require: true
        },
        longitude: {
            type: Number,
            require: true
        },
        title: {
            type: String,
            require: true
        }
    },
    options
);

const Location = model<ILocationDocument>('location', locationSchema);

export default Location;
