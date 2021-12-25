import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Todo } from '../model/Todo'
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo []
  constructor() { 
    this.todos = [
      {
        id: "111",
        title: "Learn React",
        isCompleted: false,
        date: new Date()
      },
      {
        id: "222",
        title: "Learn Angular",
        isCompleted: false,
        date: new Date()
      },
      {
        id: "333",
        title: "Learn HTML5",
        isCompleted: true,
        date: new Date()
      }
    ]
  }

  getTodos(){
    return of(this.todos)
  }

  changeStatus(todo: Todo){
    // loop using map
    this.todos.map(singleTodo => {
      if(singleTodo.id === todo.id){
        todo.isCompleted = !todo.isCompleted
      }
    })
  }

  addTodo(todo:Todo){
    this.todos.push(todo)
  }

  deleteTodo(todo: Todo){
    // using indexOf to get index of todo
    const indexOfTodo = this.todos.findIndex((currentObj) => {
      currentObj.id === todo.id
    });
    console.log(indexOfTodo)
    this.todos.splice(indexOfTodo, 1)
  }
}
