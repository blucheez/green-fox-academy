import './App.css'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddPost from './pages/AddPost'
import EditPost from './pages/EditPost'

function App() {
  document.body.style = 'background: #e9ecef'
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/new-post' element={<AddPost />} />
          <Route path='/edit/:id' element={<EditPost />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
