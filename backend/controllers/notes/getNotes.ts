import {data} from "../../data";
import {Request, Response} from "express";

export const getNotes = (req: Request, res: Response) => {
    res.status(200).json(data);
}