import { Document, model, ObjectId, Schema, SchemaOptions } from 'mongoose';

interface IUserDocument extends Document {
    name: string;
    latitude: number;
    longitude: number;
    desc: string;
    contact: string;
    free: boolean;
    cost: string;
    handicap: boolean;
    createBy: ObjectId;
    type: string;
    timeOpen: string;
    timeClose: string;
    toiletpicture: string[];
}

const options: SchemaOptions = {
    toJSON: {
        transform(doc, ret) {
            // delete ret._id;
            // delete ret.password;
            // delete ret.salt;
            // delete ret.createAt;
            // delete ret.updateAt;
        },
    },
    timestamps: true,
};

const toiletSchema = new Schema(
    {
        name: {
            type: String,
            require: true,
        },
        latitude: {
            type: Number,
            require: true,
        },
        longitude: {
            type: Number,
            require: true,
        },
        contact: {
            type: String,
            require: true,
        },
        cost: {
            type: String,
            require: true,
        },
        handicap: {
            type: Boolean,
            require: true,
        },
        type: {
            type: String,
            require: true,
        },
        timeOpen: {
            type: String,
            require: true,
        },
        timeClose: {
            type: String,
            require: true,
        },
        toiletpicture: {
            type: Array,
            require: false,
        },
        desc: {
            type: String,
            require: false,
        },
        createBy: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            require: true,
        },
        free: {
            type: Boolean,
            require: true,
        },
    },
    options
);

const Toilet = model<IUserDocument>('toilets', toiletSchema);

export default Toilet;
