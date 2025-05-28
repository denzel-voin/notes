import {data} from "../../data";
import {Request, Response} from "express";

export const updateNote = (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const {title, body} = req.body;
    if (!id || !title || !body) {
        res.status(400).send('Неверный запрос: отсутствуют обязательные поля');
        return;
    }
    const note = data.find(note => note.id === id);
    if (!note) {
        res.status(404).send('Заметка не найдена');
        return;
    }

    note.title = title;
    note.body = body;

    res.status(200).send('Заметка обновлена');
}