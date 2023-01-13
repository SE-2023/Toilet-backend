import { connectMongoDB } from './lib/mongoDB';

connectMongoDB();

const geeting = (name: string) => {
    console.log(`Hello 123456 ${name} from TypeScript.`);
};

geeting('Ball');
