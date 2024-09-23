import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../Todo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
  @Input() 
  title:string | undefined
  desc:string | undefined
  @Output()
  todoAdd: EventEmitter<Todo>= new EventEmitter();
  constructor(){ 
  }
  onSubmit(){
    const todo={
      sno:8,
      title: this.title,
      desc: this.desc,
      active: true
    }
    this.todoAdd.emit(todo)
  }

}
