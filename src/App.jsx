import { Routes, Route, Link } from 'react-router-dom'
import Translations from './pages/Translations'
import Writing from './pages/Writing'
import About from './pages/About'
import './App.css'

const App = () => {
  return (
    <div className="app-container">

      <div className='menu'>
          <ul>
              <Link to="/" className="nav-link"><li>LISZTES ÉVA</li></Link>
              <Link to="/" className="nav-link"><li>Fordítások</li></Link>
              {/* <Link to="/irasok" className="nav-link"><li>Írások</li></Link> */}
          </ul>
      </div>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Translations />} />
          {/* <Route path="/irasok" element={<Writing />} /> */}
        </Routes>
      </main>
      
    </div>  
  )
}

export default App
