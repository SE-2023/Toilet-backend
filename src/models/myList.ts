import { Document, model, ObjectId, Schema, SchemaOptions } from 'mongoose';

interface ImyListDocument extends Document {
    toiletId: ObjectId;
    userId: ObjectId;
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

const myListSchema = new Schema(
    {
        userId : {
            type: Schema.Types.ObjectId,
            ref: 'User',
            require: true,
        },
        toiletId: {
            type: Schema.Types.ObjectId,
            ref: 'Toilet',
            require: true,
        },
    },
    options
);

const myList = model<ImyListDocument>('myList', myListSchema);

export default myList;
