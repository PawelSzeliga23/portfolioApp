import NavBar from "./components/navBar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./components/Home"
import About from "./components/About"
import FadeInComponent from "./components/FadeInComponent"
import Projects from "./components/projects"
import Contact from "./components/contatct"

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<FadeInComponent ><Home></Home></FadeInComponent>} />
          <Route path="/about" element={<FadeInComponent ><About></About></FadeInComponent>} />
          <Route path="/projects" element={<FadeInComponent ><Projects /></FadeInComponent>} />
          <Route path="/contact" element={<FadeInComponent><Contact /></FadeInComponent>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
