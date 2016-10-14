export interface ITodo {
    title: string;
    done: boolean;
    edit: boolean;
}

export class Todo implements ITodo {
    title: string;
    done: boolean;
    edit: boolean;


    constructor(title: string) {
        this.title = title;
        this.done = false;
        this.edit = false;
    }
}