import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ToDoState } from '../../store/todo.reducer';
import { Store } from '@ngrx/store';
import { AddToDo } from '../../store/todo.actions';
import { ToDo } from '../../models/todo.model';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddTodoComponent implements OnInit {
  public addControl: FormControl;

  constructor(private store: Store<ToDoState>) {}

  ngOnInit() {
    this.addControl = new FormControl(null, Validators.required);
  }

  onSubmit(): void {
    if (this.addControl.invalid) {
      this.addControl.markAsTouched();
      return;
    }

    this.store.dispatch(
      new AddToDo({
        name: this.addControl.value
      } as ToDo)
    );

    this.addControl.reset();
  }
}
