import {Request, Response} from "express";
import {INote, readData, writeData} from "../../utils";

export const updateNote = (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const { title, body } = req.body;
    const data: INote[] = readData();

    const note = data.find(note => note.id === id);
    if (!note) return res.status(404).send('Заметка не найдена');

    note.title = title;
    note.body = body;

    writeData(data);
    res.status(200).send('Заметка обновлена');
}