import { connectMongoDB } from './lib/mongoDB';

connectMongoDB();

const geeting = (name: string) => {
    console.log(`Hello 55555555 ${name} from TypeScript.`);
};

geeting('Ball');
