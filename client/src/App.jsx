import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './Pages/HomePage'
import { TaskProvider } from './context/TaskProvider'

function App() {

  return (
    <TaskProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
    </TaskProvider>
  )
}

export default App
