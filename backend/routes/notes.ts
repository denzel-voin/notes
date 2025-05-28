import { Router } from 'express';
import {getNotes} from "../controllers/notes/getNotes";
import {getNoteById} from "../controllers/notes/getNoteById";
import {postNote} from "../controllers/notes/postNote";
import {deleteNote} from "../controllers/notes/deleteNote";
import {updateNote} from "../controllers/notes/updateNote";

const userNotes = Router();

userNotes.get('/notes', getNotes);

userNotes.get('/notes/:id', getNoteById);

userNotes.post('/notes', postNote);

userNotes.delete('/notes/:id', deleteNote);

userNotes.put('/notes/:id', updateNote);

export default userNotes;
