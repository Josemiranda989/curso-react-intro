import { TodoCounter } from './components/TodoCounter/TodoCounter';
import { TodoSearch } from './components/TodoSearch/TodoSearch';
import { TodoList } from './components/TodoList/TodoList';
import { TodoItem } from './components/TodoItem/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton/CreateTodoButton'

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Cargar batería', completed: false },
  { text: 'Armar cpu', completed: true },
  { text: 'Cambiar fuente ', completed: false }
]

function App() {
  return (
    <>
      <TodoCounter completed={16} total={25} />
      <TodoSearch />
      <TodoList>
        {defaultTodos.map(todo => (<TodoItem
          key={todo.text}
          text={todo.text}
          completed={todo.completed} />))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}
export default App;

// Contando Todos Video