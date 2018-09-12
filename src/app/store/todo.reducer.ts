import { ToDo } from '../models/todo.model';
import { ToDoActions, ToDoActionTypes } from './todo.actions';
import { INITIAL_TODOS } from '../const/initial-todos.const';

export interface ToDoState {
  toDoList: ToDo[];
}

const toDoInitialState: ToDoState = {
  toDoList: INITIAL_TODOS
};

export function toDoReducer(
  state = toDoInitialState,
  action: ToDoActions
): ToDoState {
  switch (action.type) {
    case ToDoActionTypes.AddToDo:
      return {
        ...state,
        toDoList: [...state.toDoList, action.payload]
      };

    case ToDoActionTypes.UpdateToDo: {
      const toDoIndex = state.toDoList.findIndex(
        td => td.id === action.payload.id
      );

      const toDoList = [...state.toDoList];
      toDoList.splice(toDoIndex, 1, action.payload);

      return {
        ...state,
        toDoList
      };
    }

    case ToDoActionTypes.RemoveToDo: {
      const toDoList = state.toDoList.filter(td => td.id !== action.payload);

      return {
        ...state,
        toDoList
      };
    }

    default:
      return state;
  }
}
