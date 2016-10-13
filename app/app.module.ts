import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import {TodoListComponent} from "./components/todo-list/todo-list.component";
import {TodoItem} from "./components/todo-item/todo-item.component";
import {TodoFormComponent} from "./components/todo-form/todo-form.component";
import {TodoService} from "./components/shared/todo.service";

@NgModule({
    imports:      [ BrowserModule, HttpModule ],
    declarations: [ AppComponent, TodoListComponent, TodoItem, TodoFormComponent ],
    bootstrap:    [ AppComponent ],
    providers: [TodoService]
})
export class AppModule { }