import {data} from "../../data";
import {Request, Response} from "express";

export const getNoteById = (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const note = data.find(note => note.id === id);

    if (!note) {
        res.status(404).send('Not Found');
    } else {
        res.status(200).json(note);
    }
}