import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Todos from './pages/Todos'
import TodoCreate from './pages/TodoCreate'
import TodoDetails from './pages/TodoDetails'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <main className='w-[600px] mx-auto p-5'>
        <Routes>
          <Route path='todos' element={<Todos />} />
          <Route path='todos/:todoId' element={<TodoDetails />} />
          <Route path='todos/create' element={<TodoCreate />} />
        </Routes>
      </main>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)
