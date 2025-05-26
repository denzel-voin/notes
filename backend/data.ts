export interface INote {
    id: number;
    title: string;
    body: string;
}

export const data: INote[] = [
    {
        id: 1,
        body: 'Тело заметки...',
        title: 'Заголовок заметки'
    }
]