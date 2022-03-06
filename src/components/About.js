import './About.css';

function About() {
  return (
    <div className="bg-gradient-to-l from-sky-100 to-indigo-300">
      <div className="container relative mx-auto py-20 px-2">
        <div className="absolute top-0 left-0 text-6xl p-8"><i className="fas fa-quote-left hidden"></i></div>
        <div className="mx-auto" style={{ maxWidth: "50ch" }}>
          <div className="font-thin text-center text-grey-100 text-4xl z-10">
            <p>My name is Ross Findlay and I live in Berlin. I am a frontend developer working with <span className="text-indigo-800 font-normal">WordPress</span>, <span className="text-indigo-800 font-normal">Javascript</span> and <span className="text-indigo-800 font-normal">React</span>. There are other tools and languages <span className="text-indigo-800 font-normal">I enjoy learning</span>, as well as many more I would love to learn. </p>
            <p className="mt-8">Here you will discover some of the projects I had <span className="text-indigo-800 font-normal">fun coding</span>.</p>
            <p className="mt-8">Enjoy your stay, and <span className="text-indigo-800 font-normal">get in touch.</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About; 