import { Action } from '@ngrx/store';
import { ToDo } from '../models/todo.model';

export enum ToDoActionTypes {
  AddToDo = '[ToDo] AddToDo',
  UpdateToDo = '[ToDo] UpdateToDo',
  RemoveToDo = '[ToDo] RemoveToDo'
}

export class AddToDo implements Action {
  readonly type = ToDoActionTypes.AddToDo;

  constructor(public payload: ToDo) {}
}

export class UpdateToDo implements Action {
  readonly type = ToDoActionTypes.UpdateToDo;

  constructor(public payload: ToDo) {}
}

export class RemoveToDo implements Action {
  readonly type = ToDoActionTypes.RemoveToDo;

  constructor(public payload: number) {}
}

export type ToDoActions = AddToDo | UpdateToDo | RemoveToDo;
