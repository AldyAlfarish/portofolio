import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Skill from './pages/Skill';
import ListProject from './pages/ListProject';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/Skill' element={<Skill/>} />
        <Route path='/Project' element={<ListProject/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
