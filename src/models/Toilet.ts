import { Document, model, Schema, SchemaOptions } from 'mongoose';

interface IUserDocument extends Document {
    name: string;
    latitude: number;
    longitude: number;
    contact: string;
    cost: string;
    handicap: boolean;
    type: string;
    timeOpen: string;
    timeClose: string;
    toiletpicture:string[];
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

const toiletSchema = new Schema(
    {
      name: {
        type: String,
        require: true
      },
      latitude: {
        type: Number,
        require: true
      },
      longitude: {
        type: Number,
        require: true
      },
      contact: {
        type: String,
        require: true
      },
      cost: {
        type: String,
        require: true
      },
      handicap: {
        type: Boolean,
        require: true
      },
      type: {
        type: String,
        require: true
      },
      timeOpen: {
        type: String,
        require: true
      },
      timeClose: {
        type: String,
        require: true
      },
      toiletpicture: {
        type: Array,
        require: true
      },
    },
    options
);

const Toilet = model<IUserDocument>('toilets', toiletSchema);

export default Toilet;