import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ToDo } from '../../models/todo.model';
import { map } from 'rxjs/operators';
import { EntityCollectionService, EntityServices } from 'ngrx-data';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {
  public toDoList$: Observable<ToDo[]>;
  public loading$: Observable<boolean>;

  private toDoService: EntityCollectionService<ToDo>;

  constructor(entityServices: EntityServices) {
    this.toDoService = entityServices.getEntityCollectionService('ToDo');
  }

  ngOnInit() {
    this.toDoList$ = this.toDoService.entities$;

    this.loading$ = this.toDoService.loading$;

    this.toDoService.getAll();
  }
}
