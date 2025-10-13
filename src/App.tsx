import NavBar from "./components/navBar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./components/Home"
import About from "./components/About"
import FadeInComponent from "./components/FadeInComponent"
import Projects from "./components/projects"
import Contact from "./components/contatct"
import Footer from "./components/footer"

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Router>
        <NavBar />
        <main className="flex-1">
        <Routes>
          <Route path="/" element={<FadeInComponent ><Home></Home></FadeInComponent>} />
          <Route path="/about" element={<FadeInComponent ><About></About></FadeInComponent>} />
          <Route path="/projects" element={<FadeInComponent ><Projects /></FadeInComponent>} />
          <Route path="/contact" element={<FadeInComponent><Contact /></FadeInComponent>} />
        </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  )
}

export default App
