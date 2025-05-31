import {Request, Response} from "express";
import {PrismaClient} from '@prisma/client';
const prisma = new PrismaClient();

export const postNote = async (req: Request, res: Response) => {
    const { title, body } = req.body;
    const note = await prisma.note.create({ data: { title, body } });
    res.status(201).json(note);
}