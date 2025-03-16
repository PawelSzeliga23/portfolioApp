import NavBar from "./components/navBar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./components/Home"
import FadeInComponent from "./components/FadeInComponent"

const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<FadeInComponent ><Home></Home></FadeInComponent>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
