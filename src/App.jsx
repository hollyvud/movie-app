import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import './styles/main.scss'

import MainLayout from './layouts/MainLayout'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
