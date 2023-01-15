import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

function Hero() {
  return (
    <section className="hero-section border-b-2">
      <div className="container relative mx-auto py-36">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-700 uppercase text-center">Hey, I'm Ross Findlay</h1>
          <p className="text-3xl text-slate-500 mt-8 max-w-xl text-center">I am a frontend developer working with Javascript, PHP, and CSS.</p>
          <a href="#projects" className="py-2 px-8 bg-blue-600 hover:bg-blue-800 mt-4 rounded-full inline-block text-white font-bold">Projects <FontAwesomeIcon icon={faArrowDown} className="ml-2" /> </a>
        </div>
      </div>
    </section>
  )
}

export default Hero;
