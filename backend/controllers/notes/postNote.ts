import {Request, Response} from "express";
import {readData, writeData} from "../../utils";

export const postNote = (req: Request, res: Response) => {
    const {title, body} = req.body;
    const data = readData();
    if(!title || !body) {
        res.status(400).send('Добавьте заголовок и текст.');
        return;
    } else {
        data.push({id: Date.now(), body, title});
        writeData(data);
        res.status(201).send('Заметка добавлена!');
    }
}