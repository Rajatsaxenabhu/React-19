import express from 'express';
import {connectToDatabase} from './db/postgre';
import cookieParser from 'cookie-parser';
import authroutes from './routes/auth.routes'
import cors from 'cors';

const app = express();
const corsOptions = {
    origin: 'http://localhost:5173', 
    methods: 'GET,POST', 
    allowedHeaders: ['Content-Type', 'Authorization'] 
};
app.use(cors(corsOptions));
app.use(cookieParser());
const port=3000
app.use(express.json())
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use('/auth',authroutes)

app.listen(port, () => {
    connectToDatabase();
    console.log(`Example app listening on port ${port}`)

})