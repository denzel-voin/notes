import express from 'express';
import userNotes from "./routes/notes";
import dotenv from 'dotenv';

dotenv.config();


const PORT = Number(process.env.PORT) || 3000;

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next()
});

app.use('/api/', userNotes);

app.listen(PORT, () => {
    console.log(`Сервер запущен на порту: ${PORT}`);
});