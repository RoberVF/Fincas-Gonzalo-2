import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import { TaskProvider } from './context/Task/TaskProvider'
import { FincaProvider } from './context/Finca/FincaProvider'
import Navbar from './Pages/utils/Navbar'

function App() {

  return (
    <FincaProvider>
      <TaskProvider>
        <div className='text-slate-100'>
          <BrowserRouter>
          <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </BrowserRouter>
        </div>
      </TaskProvider>
    </FincaProvider>
  )
}

export default App
