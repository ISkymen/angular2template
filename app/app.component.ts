import { Component } from '@angular/core';
import {Todo} from "./components/shared/todo-model";
import {todos} from "./components/shared/todo.data";

@Component({
    selector: 'todo-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']
})
export class AppComponent {
    title: string;
    todos: Todo[];

    constructor() {
        this.title = 'Angular 2Do';
        this.todos = todos;
    }

}