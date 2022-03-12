import { Outlet } from 'react-router-dom'
import TodoCard from '../components/TodoCard'
import { useNavigate } from 'react-router-dom'

const Todos = ({ todos }) => {
  const navigate = useNavigate()

  return (
    <>
      <h1 className='font-black mb-3'>Todos</h1>
      <button
        className='border p-2 bg-black text-white px-5 mb-5'
        onClick={() => {
          navigate('/todos/create')
        }}
      >
        + Create Todo
      </button>
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
