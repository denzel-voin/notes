import express from 'express';
import dotenv from 'dotenv';
import userNotes from './routes/notes';
import usersRouter from "./routes/users";

dotenv.config();

const PORT =  3000;

const app = express();
app.use(express.json());

app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

app.use('/api', userNotes);
app.use('/api', usersRouter);

app.listen(PORT, () => {
    console.log(`✅ Сервер запущен на порту: ${PORT}`);
}).on('error', (err) => {
    console.error('❌ Ошибка запуска сервера:', err);
});
