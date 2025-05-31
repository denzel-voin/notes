import {Request, Response} from "express";
import {PrismaClient} from '@prisma/client';
const prisma = new PrismaClient();

export const deleteNote = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    await prisma.note.delete({ where: { id } });
    res.sendStatus(204);
}