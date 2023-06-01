import { Routes, Route, Link, useParams } from "react-router-dom";

import './App.css'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Header from './components/Header'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  )
   
}

export default App