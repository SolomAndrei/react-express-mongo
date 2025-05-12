import express from 'express';
import mongoose from 'mongoose';
import router from './router.js';
import cors from 'cors';

const PORT = 5001;
const DB_URL =
    'mongodb+srv://solomonikandrey:123@cluster0.verutqr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const app = express();
app.use(
    cors({
        origin: 'http://localhost:3000',
    })
);
app.use(express.json());
app.use('/api', router);

async function startServer() {
    try {
        await mongoose.connect(DB_URL);
        app.listen(PORT, () => {
            console.log(`🚀 Express server running on http://localhost:${PORT}`);
        });
    } catch (e) {
        console.log(e);
    }
}
startServer();
