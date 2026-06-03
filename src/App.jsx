import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Menu from './levels/Menu'
import Introduction_1 from './levels/level-1/introduction'
import Minigame_1 from './levels/level-1/minigame'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/levels/level-1/introduction" element={<Introduction_1 />} />
        <Route path="/levels/level-1/minigame" element={<Minigame_1/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
