
function About() {
  const techData = [
    {
      name: "CSS",
      awesome: "fab fa-css3-alt",
      description: "I enjoy continally working on my CSS abilities, trying to create ever cleaner and more stable solutions, and learning new frameworks."
    },
    {
      name: "JavaScript",
      awesome: "fab fa-js",
      description: "I love working with JavaScript. The clean semantic code you can write with it."
    },
    {
      name: "React",
      awesome: "fab fa-react",
      description: "I have the same feeling about React as when I first started to learn it: It just make sense. Its practical and opens tons of opptunities."
    },
    {
      name: "WordPress",
      awesome: "fab fa-wordpress-simple",
      description: "Building websites with WordPress has allowed me to work closely with content creators, making the most out of the Gutenburg Editor."
    },
    {
      name: "PHP",
      awesome: "fab fa-php",
      description: "I have used PHP to get the most out of WordPress, creating resuable blocks, custom post types, and plugins ."
    },
    {
      name: "Tailwind",
      awesome: "",
      description: ""
    },
    {
      name: "Sanity",
      awesome: "",
      description: ""
    },
    {
      name: "Git",
      awesome: "",
      description: ""
    },
    {
      name: "SEO",
      awesome: "",
      description: ""
    },
    {
      name: "Responsive Design",
      awesome: "",
      description: ""
    }
  ];

  const highlighted = "text-blue-600 font-bold";

  return (
    <>
      {/* bg-gradient-to-t from-slate-100 via-indigo-100 to-indigo-200 relative */}
      <section className="">
        <div className="container mx-auto py-36">
          <h2 className="text-6xl font-bold text-slate-700">About me</h2>
          <p className="mt-4 text-2xl text-slate-500 max-w-prose">Discover more information about my, what I do, and my skills.</p>

          <div className="grid md:grid-cols-3 gap-4 mt-8">
            {/* Grid Col */}
            <div className="col-span-2">
              <h3 className="text-3xl font-bold text-slate-700">Get to know me</h3>
              <div className="text-content text-lg text-slate-800">
                <p>My name is Ross and I code things with WordPress, PHP, CSS, and Javascript.</p>
                <p>I create websites that are accessible to everyone.</p>
              </div>
            </div>
            {/* Grid Col */}
            <div>
              <h3 className="text-3xl font-bold text-slate-700">My skills</h3>
              <div className="flex flex-wrap mt-4">
                {techData.map((t) => {
                  return (
                    <div key={t.name} className="tech bg-slate-100 border p-2 rounded flex items-center mb-2 mr-2">
                      {/* -ml-6 sm:ml-0 -mr-6 sm:mr-0 */}
                      {/* <span className="text-indigo-700 text-xl mr-1"><i className={t.awesome}></i></span> */}
                      <span className="font-bold text-slate-700 text-md">{t.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About; 