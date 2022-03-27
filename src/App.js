import './App.css';

import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Tech from './components/Tech';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <About />
      <Tech />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
