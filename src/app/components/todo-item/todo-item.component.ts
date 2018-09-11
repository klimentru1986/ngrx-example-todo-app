import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ToDo } from '../../models/todo.model';
import { ToDoState } from '../../store/todo.reducer';
import { Store } from '@ngrx/store';
import { RemoveToDo } from '../../store/todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent {
  @Input()
  toDo: ToDo;

  constructor(private store: Store<ToDoState>) {}

  onRemoveClick(): void {
    this.store.dispatch(new RemoveToDo(this.toDo.id));
  }
}
