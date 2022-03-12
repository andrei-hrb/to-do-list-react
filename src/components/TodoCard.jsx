import { Link } from 'react-router-dom'

const TodoCard = ({ id, title, description }) => (
  <div className='mb-5'>
    <h4 className='text-lg font-black'>{title}</h4>
    <p>
      {description}{' '}
      <Link to={'/todos/' + id} className='text-blue-400'>
        see details...
      </Link>
    </p>
  </div>
)

export default TodoCard
