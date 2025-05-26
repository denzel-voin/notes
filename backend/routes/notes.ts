import { Router } from 'express';
import { data } from '../data';

const userNotes = Router();

userNotes.get('/notes', (req, res) => {
    res.status(200).json(data);
});

userNotes.get('/notes/:id', (req, res) => {
    const id = Number(req.params.id);
    const note = data.find(note => note.id === id);

    if (!note) {
        res.status(404).send('Not Found');
    } else {
        res.status(200).json(note);
    }
});

userNotes.post('/notes', (req, res) => {
    const {title, body} = req.body;
    if(!title || !body) {
        res.status(400).send('Please enter a title');
        return;
    } else {
        data.push({id: data.length + 1, body, title})
        res.status(200).send('Заметка добавлена');
    }
})

export default userNotes;
