import { ToDoState, toDoReducer } from './todo.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface State {
  toDo: ToDoState;
}

export const reducers: ActionReducerMap<State> = {
  toDo: toDoReducer
};

