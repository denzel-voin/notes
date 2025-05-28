import fs from 'fs';
import path from 'path';

export interface INote {
    id: number;
    title: string;
    body: string;
}

const DATA_FILE = path.join(__dirname, 'notes.json');

// Чтение данных из файла
export function readData() {
    try {
        const jsonData = fs.readFileSync(DATA_FILE, 'utf-8');
        return JSON.parse(jsonData);
    } catch (err) {
        return []; // Если файл пустой или не существует
    }
}

// Запись данных в файл
export function writeData(data: INote[]) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8');
}