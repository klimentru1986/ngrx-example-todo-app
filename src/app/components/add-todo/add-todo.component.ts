import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ToDo } from '../../models/todo.model';
import { EntityCollectionService, EntityServices } from 'ngrx-data';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddTodoComponent implements OnInit {
  public addControl: FormControl;
  public toDoService: EntityCollectionService<ToDo>;

  constructor(entityServices: EntityServices) {
    this.toDoService = entityServices.getEntityCollectionService('ToDo');
  }

  ngOnInit() {
    this.addControl = new FormControl(null, Validators.required);
  }

  onSubmit(): void {
    if (this.addControl.invalid) {
      this.addControl.markAsTouched();
      return;
    }

    this.toDoService.add({
      name: this.addControl.value
    } as ToDo);

    this.addControl.reset();
  }
}
