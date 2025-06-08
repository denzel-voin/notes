import {Request, Response} from "express";
import {PrismaClient} from '@prisma/client';
const prisma = new PrismaClient();

export const getNoteById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const note = await prisma.note.findUnique({
        where: { id },
    })
    res.json(note);
}