import { ToDoState, toDoReducer, toDoAdapter } from './todo.reducer';
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

export const toDoAdapterSelectors = toDoAdapter.getSelectors();

export const getToDoStore = createFeatureSelector('toDo');

export const getToDoList = createSelector(
  getToDoStore,
  toDoAdapterSelectors.selectEntities
);
