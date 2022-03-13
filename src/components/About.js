

function About() {
  return (
    <div className="bg-gradient-to-l from-sky-100 to-indigo-300">
      <div className="container relative mx-auto py-20 px-2">
        <div className="absolute top-0 left-0 text-6xl p-8"><i className="fas fa-quote-left hidden"></i></div>
        <div className="mx-auto" style={{ maxWidth: "50ch" }}>
          <div className="font-thin text-center text-grey-100 text-4xl z-10">
            <p>My name is Ross Findlay. I'm a frontend developer working with <span className="text-indigo-800 font-normal">PHP</span> and <span className="text-indigo-800 font-normal">Javascript</span>. I love <span className="text-indigo-800 font-normal">CSS</span> and the accessibility it offers. I have fun <span className="text-indigo-800 font-normal">coding</span> and I am motivated to <span className="text-indigo-800 font-normal">learn</span></p>.
          </div>
        </div>
      </div>
    </div>
  )
}

export default About; 