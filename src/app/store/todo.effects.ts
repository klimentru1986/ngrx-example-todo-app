import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ToDoActionTypes, GetAllToDoSuccess } from './todo.actions';
import { TodoApiService } from '../services/todo-api.service';
import { switchMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class ToDoEffects {
  @Effect()
  getToDos$: Observable<Action> = this.actions$.pipe(
    ofType(ToDoActionTypes.GetAllToDo),
    switchMap(() =>
      this.api.getTodos().pipe(
        map(todos => new GetAllToDoSuccess(todos)),
        catchError(err => of(err))
      )
    )
  );

  constructor(private api: TodoApiService, private actions$: Actions) {}
}
