import { EntityState } from '@ngrx/entity';
import { ToDo } from 'src/app/models/todo.model';

export const INITIAL_TODOS: ToDo[] = [
  {
    id: 1,
    name: 'Выпить кофе'
  },
  {
    id: 2,
    name: 'Запилить фичу'
  },
  {
    id: 3,
    name: 'Написать тесты'
  },
  {
    id: 4,
    name: 'Отрефакторить старый код'
  }
];
