import dotenv from 'dotenv';
import { connectMongoDB } from './lib/mongoDB';
dotenv.config();
connectMongoDB();

const geeting = (name: string) => {
    console.log(`Hello 55555555 ${name} from TypeScript.`);
};

geeting('Ball');
