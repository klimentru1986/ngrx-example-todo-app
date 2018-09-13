import { EntityState } from '@ngrx/entity';
import { ToDo } from 'src/app/models/todo.model';

export const INITIAL_TODOS: EntityState<ToDo> = {
  ids: [1, 2, 3, 4],
  entities: {
    1: {
      id: 1,
      name: 'Выпить кофе'
    },
    2: {
      id: 2,
      name: 'Запилить фичу'
    },
    3: {
      id: 3,
      name: 'Написать тесты'
    },
    4: {
      id: 4,
      name: 'Отрефакторить старый код'
    }
  }
};
