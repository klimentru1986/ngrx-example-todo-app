import { ToDo } from '../models/todo.model';
import { ToDoActions, ToDoActionTypes } from './todo.actions';
import { INITIAL_TODOS } from '../const/initial-todos.const';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface ToDoState extends EntityState<ToDo> {}

export const toDoAdapter: EntityAdapter<ToDo> = createEntityAdapter<ToDo>();

const toDoInitialState: ToDoState = toDoAdapter.getInitialState();

export function toDoReducer(
  state = toDoInitialState,
  action: ToDoActions
): ToDoState {
  switch (action.type) {
    case ToDoActionTypes.AddToDo:
      return toDoAdapter.addOne(action.payload, state);

    case ToDoActionTypes.UpdateToDo:
      return toDoAdapter.upsertOne(action.payload, state);

    case ToDoActionTypes.RemoveToDo:
      return toDoAdapter.removeOne(action.payload, state);

    default:
      return state;
  }
}

