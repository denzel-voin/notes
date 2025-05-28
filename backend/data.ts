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
    },
    {
        id: 2,
        body: 'Блаблабла',
        title: 'Титул'
    }
]