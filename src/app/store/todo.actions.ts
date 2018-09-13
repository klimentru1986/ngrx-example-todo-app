import { Action } from '@ngrx/store';
import { ToDo } from '../models/todo.model';

export enum ToDoActionTypes {
  GetAllToDo = '[ToDo] GetAllToDo',
  GetAllToDoSuccess = '[ToDo] GetAllToDoSuccess',
  AddToDo = '[ToDo] AddToDo',
  AddToDoSuccess = '[ToDo] AddToDoSuccess',
  UpdateToDo = '[ToDo] UpdateToDo',
  UpdateToDoSuccess = '[ToDo] UpdateToDoSuccess',
  RemoveToDo = '[ToDo] RemoveToDo',
  RemoveToDoSuccess = '[ToDo] RemoveToDoSuccess',
  ErrorToDo = '[ToDo] Error'
}

export class GetAllToDo implements Action {
  readonly type = ToDoActionTypes.GetAllToDo;
}

export class GetAllToDoSuccess implements Action {
  readonly type = ToDoActionTypes.GetAllToDoSuccess;

  constructor(public payload: ToDo[]) {}
}

export class AddToDo implements Action {
  readonly type = ToDoActionTypes.AddToDo;

  constructor(public payload: ToDo) {}
}

export class AddToDoSuccess implements Action {
  readonly type = ToDoActionTypes.AddToDoSuccess;

  constructor(public payload: ToDo) {}
}

export class UpdateToDo implements Action {
  readonly type = ToDoActionTypes.UpdateToDo;

  constructor(public payload: ToDo) {}
}

export class UpdateToDoSuccess implements Action {
  readonly type = ToDoActionTypes.UpdateToDoSuccess;

  constructor(public payload: ToDo) {}
}

export class RemoveToDo implements Action {
  readonly type = ToDoActionTypes.RemoveToDo;

  constructor(public payload: number) {}
}

export class RemoveToDoSuccess implements Action {
  readonly type = ToDoActionTypes.RemoveToDoSuccess;

  constructor(public payload: number) {}
}

export class ErrorToDo implements Action {
  readonly type = ToDoActionTypes.ErrorToDo;

  constructor(public payload: any) {}
}

export type ToDoActions =
  | AddToDo
  | AddToDoSuccess
  | UpdateToDo
  | UpdateToDoSuccess
  | RemoveToDo
  | RemoveToDoSuccess
  | GetAllToDo
  | GetAllToDoSuccess
  | ErrorToDo;
