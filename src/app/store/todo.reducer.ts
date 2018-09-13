import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { ToDo } from '../models/todo.model';
import { ToDoActions, ToDoActionTypes } from './todo.actions';

export interface ToDoState extends EntityState<ToDo> {
  loading: boolean;
  loaded: boolean;
  error: any;
}

export const toDoAdapter: EntityAdapter<ToDo> = createEntityAdapter<ToDo>();

const toDoInitialState: ToDoState = toDoAdapter.getInitialState({
  loading: false,
  loaded: false,
  error: null
});

export function toDoReducer(
  state = toDoInitialState,
  action: ToDoActions
): ToDoState {
  switch (action.type) {
    case ToDoActionTypes.GetAllToDo:
    case ToDoActionTypes.AddToDo:
    case ToDoActionTypes.UpdateToDo:
    case ToDoActionTypes.RemoveToDo:
      return { ...state, loading: true, error: null };

    case ToDoActionTypes.GetAllToDoSuccess:
      return toDoAdapter.addAll(action.payload, {
        ...state,
        loading: false,
        loaded: true
      });

    case ToDoActionTypes.AddToDoSuccess:
      return toDoAdapter.addOne(action.payload, {
        ...state,
        loading: false,
        loaded: true
      });

    case ToDoActionTypes.UpdateToDoSuccess:
      return toDoAdapter.upsertOne(action.payload, {
        ...state,
        loading: false,
        loaded: true
      });

    case ToDoActionTypes.RemoveToDoSuccess:
      return toDoAdapter.removeOne(action.payload, {
        ...state,
        loaded: true,
        loading: false
      });

    case ToDoActionTypes.ErrorToDo:
      return { ...state, loading: false, loaded: false, error: action.payload };

    default:
      return state;
  }
}
