import { useParams } from 'react-router-dom'

const TodoDetails = ({ todos }) => {
  const params = useParams()

  const todo = todos[params.todoId]

  return (
    <div>
      <h4 className='font-black'>TodoDetails - {todo.title}</h4>
      <p>{todo.description}</p>
    </div>
  )
}

export default TodoDetails
