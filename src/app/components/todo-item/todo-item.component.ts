import {
  Component,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';
import { ToDo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent {
  @Input()
  toDo: ToDo;

  constructor() {}
}
