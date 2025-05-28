import {data} from "../../data";
import {Request, Response} from "express";

export const deleteNote = (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const index = data.findIndex(note => note.id === id);
    if (index === -1) {
        res.status(404).send('Заметка не найдена');
        return;
    }
    data.splice(index, 1);
    res.status(200).send('Заметка удалена');
}