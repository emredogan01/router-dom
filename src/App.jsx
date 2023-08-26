import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import About from "./pages/about"
import Contact from "./pages/Contact"
import Products from "./pages/Products"
import Home from "./pages/home"

function App() {


  return (
    <>
      <div className="app">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/products" element={<Products />}/>
          </Routes>
          <Footer /> 
        </Router>
      </div>
    </>
  )
}

export default App
