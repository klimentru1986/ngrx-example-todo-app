import {
  Component,
  ChangeDetectionStrategy,
  Input,
  OnInit
} from '@angular/core';
import { ToDo } from '../../models/todo.model';
import { ToDoState } from '../../store/todo.reducer';
import { Store } from '@ngrx/store';
import { RemoveToDo, UpdateToDo } from '../../store/todo.actions';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent implements OnInit {
  @Input()
  toDo: ToDo;

  public isEdit: boolean;
  public editControl: FormControl;

  constructor(private store: Store<ToDoState>) {}

  ngOnInit() {
    this.editControl = new FormControl(this.toDo.name, Validators.required);
  }

  onRemoveClick(): void {
    this.store.dispatch(new RemoveToDo(this.toDo.id));
  }

  onSaveEdit(): void {
    this.store.dispatch(
      new UpdateToDo({
        name: this.editControl.value,
        id: this.toDo.id
      })
    );

    this.isEdit = false;
  }

  onCancelEdit(): void {
    this.editControl.setValue(this.toDo.name);
    this.isEdit = false;
  }
}
