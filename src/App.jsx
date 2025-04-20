import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import HomePage from './pages/HomePage'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={< HomePage />} />
        <Route path="/Login" element={< Login />} />
        <Route path="/Register" element={< Register />} />
      </Routes>
    </Router>
  )
}

export default App
