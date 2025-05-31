import {Request, Response} from "express";
import {PrismaClient} from '@prisma/client';
const prisma = new PrismaClient();

export const updateNote = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const { title, body } = req.body;
    const note = await prisma.note.update({
        where: { id },
        data: { title, body }
    });
    res.json(note);
}