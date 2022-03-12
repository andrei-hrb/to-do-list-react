import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Todos from './pages/Todos'
import TodoCreate from './pages/TodoCreate'
import TodoDetails from './pages/TodoDetails'
import { useState } from 'react'

const App = () => {
  const [todos, setTodos] = useState([
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
  ])

  return (
    <BrowserRouter>
      <main className='w-[600px] mx-auto p-5'>
        <Routes>
          <Route path='todos' element={<Todos todos={todos} />} />
          <Route path='todos/:todoId' element={<TodoDetails todos={todos} />} />
          <Route
            path='todos/create'
            element={<TodoCreate todos={todos} setTodos={setTodos} />}
          />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
