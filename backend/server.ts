import express from 'express';
import dotenv from 'dotenv';
import userNotes from './routes/notes';
import usersRouter from "./routes/users";
import cors from 'cors';

dotenv.config();

const PORT =  3000;

const app = express();
app.use(express.json());

app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use('/api', userNotes);
app.use('/api', usersRouter);

app.listen(PORT, () => {
    console.log(`✅ Сервер запущен на порту: ${PORT}`);
}).on('error', (err) => {
    console.error('❌ Ошибка запуска сервера:', err);
});
