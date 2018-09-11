import { ToDoState, toDoReducer } from './todo.reducer';
import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

export interface State {
  toDo: ToDoState;
}

export const reducers: ActionReducerMap<State> = {
  toDo: toDoReducer
};

export const getToDoStore = createFeatureSelector('toDo');

export const getToDoList = createSelector(
  getToDoStore,
  (state: ToDoState) => state.toDoList
);
