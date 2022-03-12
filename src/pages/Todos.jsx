import { Outlet } from 'react-router-dom'
import TodoCard from '../components/TodoCard'

const Todos = () => {
  const todos = [
    {
      id: 1,
      title: 'spala vasele',
      description: 'foloseste fairy',
    },
    {
      id: 2,
      title: 'citeste cartea',
      description: 'citeste atent',
    },
    {
      id: 3,
      title: 'plimba pisica',
      description: 'nu uita lesa',
    },
  ]

  return (
    <>
      <div>Todos</div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoCard
              id={todo.id}
              title={todo.title}
              description={todo.description}
            />
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  )
}

export default Todos
