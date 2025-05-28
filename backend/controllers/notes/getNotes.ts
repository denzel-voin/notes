import {Request, Response} from "express";
import {readData} from "../../utils";

export const getNotes = (req: Request, res: Response) => {
    const data = readData();
    res.status(200).json(data);
}