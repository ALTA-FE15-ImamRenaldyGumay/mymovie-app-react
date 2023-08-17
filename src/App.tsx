import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Favorites from './Pages/Favorites'
import Detail from './Pages/Detail'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/Favorites' Component={Favorites} />
        <Route path='/Detail' Component={Detail} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
