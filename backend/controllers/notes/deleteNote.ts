import {Request, Response} from "express";
import {INote, readData, writeData} from "../../utils";

export const deleteNote = (req: Request, res: Response) => {
    const id = Number(req.params.id);
    let data: INote[] = readData();

    const index = data.findIndex((note: { id: number; }) => note.id === id);
    if (index === -1) return res.status(404).send('Заметка не найдена');

    data.splice(index, 1);
    writeData(data);

    res.status(200).send('Заметка удалена');
}