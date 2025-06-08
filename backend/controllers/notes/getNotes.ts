import {Request, Response} from "express";
import {PrismaClient} from '@prisma/client';
const prisma = new PrismaClient();

export const getNotes = async (req: Request, res: Response) => {
    const notes = await prisma.note.findMany();
    res.json(notes);
}