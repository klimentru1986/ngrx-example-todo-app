import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  ToDoActionTypes,
  GetAllToDoSuccess,
  RemoveToDo,
  RemoveToDoSuccess,
  ErrorToDo,
  AddToDo,
  AddToDoSuccess,
  UpdateToDo,
  UpdateToDoSuccess
} from './todo.actions';
import { TodoApiService } from '../services/todo-api.service';
import { switchMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class ToDoEffects {
  constructor(private api: TodoApiService, private actions$: Actions) {}

  @Effect()
  getToDos$: Observable<Action> = this.actions$.pipe(
    ofType(ToDoActionTypes.GetAllToDo),
    switchMap(() =>
      this.api.getTodos().pipe(
        map(todos => new GetAllToDoSuccess(todos)),
        catchError(err => of(new ErrorToDo(err)))
      )
    )
  );

  @Effect()
  deleteToDo$: Observable<Action> = this.actions$.pipe(
    ofType(ToDoActionTypes.RemoveToDo),
    switchMap((action: RemoveToDo) =>
      this.api.deleteToDo(action.payload).pipe(
        map(() => new RemoveToDoSuccess(action.payload)),
        catchError(err => of(new ErrorToDo(err)))
      )
    )
  );

  @Effect()
  addToDo$: Observable<Action> = this.actions$.pipe(
    ofType(ToDoActionTypes.AddToDo),
    switchMap((action: AddToDo) =>
      this.api.addToDo(action.payload).pipe(
        map(response => new AddToDoSuccess(response)),
        catchError(err => of(new ErrorToDo(err)))
      )
    )
  );

  @Effect()
  updateToDo$: Observable<Action> = this.actions$.pipe(
    ofType(ToDoActionTypes.UpdateToDo),
    switchMap((action: UpdateToDo) =>
      this.api.updateToDo(action.payload).pipe(
        map(() => new UpdateToDoSuccess(action.payload)),
        catchError(err => of(new ErrorToDo(err)))
      )
    )
  );
}