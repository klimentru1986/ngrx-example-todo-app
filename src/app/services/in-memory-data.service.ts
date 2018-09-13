import { InMemoryDbService } from 'angular-in-memory-web-api';
import { INITIAL_TODOS } from '../const/initial-todos.const';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const todos = INITIAL_TODOS;
    return { todos };
  }
}
