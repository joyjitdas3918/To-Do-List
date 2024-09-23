import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../Todo';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [FormsModule, NgClass, TodoItemComponent],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input()
  todo: Todo = new Todo;
  @Input()
  i: number | undefined;
  
  @Output()
  todoDelete: EventEmitter<Todo>= new EventEmitter()
  
  @Output()
  todoCheckBox: EventEmitter<Todo>= new EventEmitter();
  constructor(){
    
  }
  onClick(todo:Todo){
    this.todoDelete.emit(todo);
  }
  oncheckclick(todo: Todo){
    this.todoCheckBox.emit(todo);
  }
}
