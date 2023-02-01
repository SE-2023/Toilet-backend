import express from 'express';

import dotenv from 'dotenv';
import cors from 'cors';
import expressSession from 'express-session';

import bodyParser from 'body-parser';

dotenv.config({ path: '.env' });

import { connectMongoDB } from './config/mongoDB';
connectMongoDB();

import locationRouters from './routes/location';
import userRouters from './routes/userRoute';
import authRouters from './routes/authRoute';

declare module 'express-session' {
    interface SessionData {
        [key: string]: any;
    }
}
const app = express();
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(
    expressSession({
        secret: 'secret',
        resave: true,
        saveUninitialized: true,
    })
);
app.use(cors());
const PORT = process.env.PORT || 4000;

const appStart = () => {
    console.log('server is running', PORT);
};
app.get('/', (req, res) => {
    res.json({ messsage: 'hello' });
});

app.use('/auth', authRouters);
app.use('/location', locationRouters);
app.use('/user', userRouters);

app.listen(PORT, appStart);

console.log('Hello worlddddd');
