import express, { response } from 'express';
import authRouters from './routes/authRoute';
import dotenv from 'dotenv';
import cors from 'cors';
import expressSession from 'express-session';
import locationRouters from './routes/location';
import { connectMongoDB } from './config/mongoDB';

dotenv.config();

connectMongoDB();

declare module 'express-session' {
    interface SessionData {
        [key: string]: any;
    }
}
const app = express();
app.use(express.json());
app.use(
    expressSession({
        secret: 'secret'
    })
);


const PORT = process.env.PORT || 4000;

const appStart = () => {
    console.log('server is running', PORT);
};
app.get('/', (req, res) => {
    res.json({ messsage: 'hello' });
});

app.use('/auth', authRouters);
app.use('/location', locationRouters);

app.listen(PORT, appStart);

console.log('Hello worlddadada');
