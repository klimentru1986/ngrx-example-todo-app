import {
  Component,
  ChangeDetectionStrategy,
  Input,
  OnInit
} from '@angular/core';
import { ToDo } from '../../models/todo.model';
import { Store } from '@ngrx/store';
import { FormControl, Validators } from '@angular/forms';
import { EntityCollectionService, EntityServices } from 'ngrx-data';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent implements OnInit {
  @Input()
  toDo: ToDo;

  public toDoService: EntityCollectionService<ToDo>;
  public isEdit: boolean;
  public editControl: FormControl;

  constructor(entityServices: EntityServices) {
    this.toDoService = entityServices.getEntityCollectionService('ToDo');
  }

  ngOnInit() {
    this.editControl = new FormControl(this.toDo.name, Validators.required);
  }

  onRemoveClick(): void {
    this.toDoService.delete(this.toDo.id);
  }

  onSaveEdit(): void {
    this.toDoService.update({
      name: this.editControl.value,
      id: this.toDo.id
    });

    this.isEdit = false;
  }

  onCancelEdit(): void {
    this.editControl.setValue(this.toDo.name);
    this.isEdit = false;
  }
}
