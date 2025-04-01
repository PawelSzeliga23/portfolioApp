import NavBar from "./components/navBar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./components/Home"
import About from "./components/About"
import FadeInComponent from "./components/FadeInComponent"
import Project from "./components/Project"
import Projects from "./components/projects"

const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<FadeInComponent ><Home></Home></FadeInComponent>} />
          <Route path="/about" element={<FadeInComponent ><About></About></FadeInComponent>} />
          <Route path="/projects" element={<FadeInComponent ><Projects /></FadeInComponent>} />
          <Route path="/project/:id" element={<FadeInComponent><Project /></FadeInComponent>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
