import { Component} from '@angular/core';
import { Todo } from '../../Todo';
import { NgFor, NgIf } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [NgFor, TodoItemComponent, AddTodoComponent, NgIf, FormsModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  todos: Todo[] = []; // Initialize as an empty array
  localItem;

  constructor() {
    const tod = localStorage.getItem("todos");
    if (tod) {
      this.localItem = tod;
      this.todos = JSON.parse(this.localItem);
    }
  }
  deleteTodo(todo:Todo){
    const index=this.todos?.indexOf(todo);
    this.todos?.splice(index?index:0,1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  addTodo(todo:Todo){
    this.todos?.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  toggleTodo(todo:Todo){
    const index=this.todos?.indexOf(todo);
    this.todos[index].active=!this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }


}
