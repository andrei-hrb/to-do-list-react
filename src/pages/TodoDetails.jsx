import { useParams } from 'react-router-dom'

const TodoDetails = () => {
  const params = useParams()

  return <div>TodoDetails - {params.todoId}</div>
}

export default TodoDetails
