import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';
import { Todo } from './../../model/Todo'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = []
  faTrashAlt = faTrashAlt
  constructor( private todoService : TodoService ) { }

  ngOnInit(): void {
    // callinng methods from TodoService
    this.todoService.getTodos().subscribe(todos => {
      console.log("todo list..", todos)
      this.todos = todos
    })
  }

  changeTodoStatus(todo:Todo){
    this.todoService.changeStatus(todo)
  }

  deleteTodo(todo:Todo){
    this.todoService.deleteTodo(todo)
  }

  addTodo(todo:Todo){
    this.todoService.addTodo(todo)
  }
}
