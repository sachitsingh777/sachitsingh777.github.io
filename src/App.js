import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Project from './Pages/Project';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Home/>
     <About/>
     <Skills/>
     <Project/>
     <Contact/>
    </div>
  );
}

export default App;
