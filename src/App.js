import './App.css'
import Navbar from './components/Navbar/Navbar'
import Products from './components/Products/Products'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
function App() {
  return (
    <div className="App">
      <di>
        <Navbar />
        <Home />
      </di>
    </div>
  )
}

export default App
