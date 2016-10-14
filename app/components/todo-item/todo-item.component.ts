import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Todo} from "../shared/todo-model";

@Component ({
    selector: 'todo-item',
    templateUrl: './app/components/todo-item/todo-item.component.html',
    styleUrls: ['./app/components/todo-item/todo-item.components.css'],
})

export class TodoItem {
    @Input() todo: Todo;
    @Output() deleted =new EventEmitter();

    toggleDone() {
        this.todo.done = !this.todo.done;
    }

    delete() {
        this.deleted.emit(this.todo);
    }

    updateEditingTodo(todo: Todo, editedTitle: string) {
        console.log(2);
        editedTitle = editedTitle.trim();
        todo.edit = false;

        if (editedTitle.length === 0) {
            return this.deleted.emit(this.todo);
        }
        todo.title = editedTitle;
    }

    editTodo(todo: Todo) {
        todo.edit = true;

    }

    cancelEditingTodo(todo: Todo) {
        todo.edit = false;
    }

}