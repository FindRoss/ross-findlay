import Hero from './Home/Hero';
import About from './Home/About';
import Tech from './Home/Tech';
import Contact from './Home/Contact';
import Content from './Content';

const Home = () => {
  return (
    <Content>
      <Hero />
      <About />
      <Tech />
      <Contact />
    </Content>
  )
}

export default Home