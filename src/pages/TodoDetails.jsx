import { useParams, useNavigate } from 'react-router-dom'

const TodoDetails = ({ todos }) => {
  const navigate = useNavigate()
  const params = useParams()

  const todo = todos[params.todoId]

  return (
    <>
      <h4 className='font-black mb-5'>{todo.title}</h4>
      <p className='mb-3'>{todo.description}</p>
      <button
        onClick={() => {
          navigate('/todos')
        }}
        className='border p-2 bg-black text-white px-5'
      >
        Go back
      </button>
    </>
  )
}

export default TodoDetails
