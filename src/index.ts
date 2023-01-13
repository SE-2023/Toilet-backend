import { connectMongoDB } from './lib/mongoDB';

connectMongoDB();

const geeting = (name: string) => {
    console.log(`Hello 123456aomsss ${name} from TypeScript.`);
};

geeting('Ball');
