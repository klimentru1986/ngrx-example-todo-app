import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ToDoState } from '../../store/todo.reducer';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ToDo } from '../../models/todo.model';
import { getToDoList } from '../../store';
import { map } from 'rxjs/operators';
import { TodoApiService } from '../../services/todo-api.service';
import { GetAllToDo } from '../../store/todo.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {
  public toDoList$: Observable<ToDo[]>;

  constructor(private store: Store<ToDoState>, private api: TodoApiService) {}

  ngOnInit() {
    this.toDoList$ = this.store
      .select(getToDoList)
      .pipe(map(v => Object.values(v)));

    this.store.dispatch(new GetAllToDo());
  }
}
