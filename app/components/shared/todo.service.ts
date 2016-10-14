import {Injectable} from '@angular/core'
import {todos} from "./todo.data";
import {ITodo} from "./todo-model";
import {resolve} from "url";
//import {Http} from "@angular/http";

@Injectable()
export class TodoService {
    // constructor(private http: Http) {}
    //
    // getTodos(): Promise<ITodo[]> {
    //     return this.http.get('app/components/shared/todos.json')
    //         .toPromise()
    //         .then(res => res.json())
    //         .catch(this.handleError)
    // }
    //
    // private handleError(error: any): Promise<any> {
    //     console.log("Ошибка получения данных", error);
    //     return Promise.reject(error.message || error);
    // }


    getTodos(): Promise<ITodo[]> {
        return new Promise(resolve => setTimeout(() => resolve(todos), 500));
    }

    addTodo(todo: ITodo): void {
        todos.push(todo);
    }

    deleteTodo(todo: ITodo): void {
        let index = todos.indexOf(todo);
        if (index > -1) {
            todos.splice(index, 1);
        }
    }

}