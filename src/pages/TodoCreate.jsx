import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 } from 'uuid'

const TodoCreate = ({ todos, setTodos }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const navigate = useNavigate()

  const handleCreateTodo = () => {
    setTodos((prev) => [
      ...prev,
      {
        id: v4(),
        title,
        description,
      },
    ])

    navigate('/todos')
  }

  const handleCancel = () => navigate('/todos')

  return (
    <>
      <h2 className='font-black mb-5'>Create Todo</h2>
      <input
        className='block p-2 mb-3 border w-full'
        type='text'
        name='title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Title'
      />
      <input
        className='block p-2 mb-3 border w-full'
        type='text'
        name='description'
        value={description}
        placeholder='Description'
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        onClick={handleCreateTodo}
        className='border p-2 bg-black text-white px-5'
      >
        Create
      </button>
      <button
        onClick={handleCancel}
        className='border ml-3 p-2 bg-red-600 text-white px-5'
      >
        Cancel
      </button>
    </>
  )
}

export default TodoCreate
