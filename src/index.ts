import { connectMongoDB } from './lib/mongoDB';

connectMongoDB();

const geeting = (name: string) => {
    console.log(`Hello ${name} from TypeScript.`);
};

geeting('Ball');
