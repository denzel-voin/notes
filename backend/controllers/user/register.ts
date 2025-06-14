import {Request, Response} from "express";
import bcrypt from "bcryptjs";
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const register = async (req: Request, res: Response): Promise<void> => {
    console.log('Вызов register, тело:', req.body);
    try {
        const { name, password } = req.body;

        if (!name || !password) {
            res.status(400).json({ error: "Заполните имя и пароль" });
            return;
        }

        const existingUser = await prisma.user.findUnique({ where: { name } });

        if (existingUser) {
            res.status(400).json({ error: "Такой пользователь уже существует" });
            return;
        }

        const hashedPassword = bcrypt.hashSync(password, 10);

        await prisma.user.create({
            data: {
                name,
                password: hashedPassword,
            },
        });

        res.status(200).send("Пользователь зарегистрирован!");
    } catch (error) {
        res.status(500).json({ error: "Внутренняя ошибка сервера" });
    }
};