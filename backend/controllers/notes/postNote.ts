import {data} from "../../data";
import {Request, Response} from "express";

export const postNote = (req: Request, res: Response) => {
    const {title, body} = req.body;
    if(!title || !body) {
        res.status(400).send('Добавьте заголовок и текст.');
        return;
    } else {
        data.push({id: data.length + 1, body, title})
        res.status(200).send('Заметка добавлена!');
    }
}