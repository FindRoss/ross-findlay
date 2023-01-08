import Hero from './Home/Hero';
import About from './Home/About';
import Projects from './Home/Projects';
import Contact from './Home/Contact';
import Content from './Content';

const Home = () => {
  return (
    <Content>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </Content>
  )
}

export default Home