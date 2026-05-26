import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import heroImg from './assets/hero.png'


import './App.css'
import Menu from './components/Menu.jsx'
import Level1 from './levels/level-1/level-1.jsx'
import Minigame1 from './levels/level-1/minigame.jsx'
import FundoEletrico from './components/FundoEletrico.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/levels/level-1" element={<Level1 />} />
        <Route path="/levels/level-1/minigame" element={<Minigame1/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
