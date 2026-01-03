import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import contactRouter from './routes/contactRoutes.js';

dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(express.json());
app.use(cors());

connectDB();

// Define routes
app.get('/', (req, res)=>{
    res.send('API is running...');
})

app.use('/api', contactRouter);



app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
    console.log(`Visit http://localhost:${PORT}`);
})