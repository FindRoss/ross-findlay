

function About() {

  const highlighted = "text-indigo-800 font-bold";

  return (
    <section>
      <div className="container mx-auto py-36 px-8">
        <h2 className="text-6xl text-slate-700">About me</h2>
        <div className="mx-auto mt-12">
          <div className="text-3xl text-slate-500 mt-8">
            <p className="mb-8">My name is Ross andd I'm a frontend developer with 5 years experience working with <span className={highlighted}>WordPress</span>, <span className={highlighted}>PHP</span>, <span className={highlighted}>CSS</span>, and <span className={highlighted}>Javascript</span>.</p>
            <p>I have <span className={highlighted}>fun</span> coding tools that are <span className={highlighted}>accessible</span> to everyone.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About; 