
import './App.css'
import {Signin} from './pages/Signin'
import {Signup} from './pages/Signup'
import {Blog} from './pages/Blog'
import {Blogs} from './pages/Blogs'
import { Publish } from './pages/Publish'


import { BrowserRouter, Routes , Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/signin' element={<Signin />} />
      <Route path='/' element={<Signup />} />

      <Route path='/blog/:id' element={<Blog />} />
      <Route path='/blogs' element={<Blogs />} />
      <Route path='/publish' element={<Publish />} />



    </Routes>
    </BrowserRouter>
  )
}

export default App
