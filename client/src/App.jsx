import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './Pages/HomePage'
import TaskFormPage from './Pages/TaskFormPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/createTask" element={<TaskFormPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
