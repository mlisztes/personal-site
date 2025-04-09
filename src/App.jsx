import { Routes, Route, Link } from 'react-router-dom'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import './App.css'

const App = () => {
  return (
    <div className="app-container">
      <nav className="sidebar">
        <Link to="/" className="nav-link">Fordítások</Link>
        <Link to="/info" className="nav-link">Lisztes Éva</Link>
      </nav>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/info" element={<About />} />
        </Routes>
      </main>
    </div>  
  )
}

export default App
