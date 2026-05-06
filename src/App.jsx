import { useState } from 'react'
import heroImg from './assets/hero.png'


import './App.css'
import Navbar from './components/Navbar'
import Level1 from './levels/level-1'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/levels/level-1" element={<Level1 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
