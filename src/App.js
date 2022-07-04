import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout'
<<<<<<< HEAD
import Experience from './components/Experience'
=======
import Portfolio from './components/Portfolio'
import Dashboard from './components/Dashboard'
>>>>>>> 24bfb64c0f51aa9d0b62f1790802e9d2a9d1dc7c
import './App.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
<<<<<<< HEAD
          <Route path="/experience" element={<Experience />} />
=======
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/dashboard" element={<Dashboard />} />
>>>>>>> 24bfb64c0f51aa9d0b62f1790802e9d2a9d1dc7c
        </Route>
      </Routes>
    </>
  )
}

export default App
