import React from "react"
import Home from "./components/Home"
import Game from "./components/Game";
import { Routes, Route} from "react-router-dom";
function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="game" element={<Game />} />
    </Routes>
  )
}

export default App
