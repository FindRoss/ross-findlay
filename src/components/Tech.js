

function Tech() {

  const techData = [
    // {
    //   name: "HTML",
    //   awesome: "fas fa-code",
    //   description: "Where my journey begun, I feel like I am still learning little tips and tricks about HTML still"
    // },
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
    }
  ];

  return (
    <section>
      <div className="container mx-auto py-36">
        <h2 className="text-6xl font-bold text-slate-700">Technology</h2>
        <div className="text-3xl text-slate-500 mt-8">
          <p>A few of the technongies I enjoy working with and learning about.</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-12 mt-12">
          {techData.map((t, i) => {
            return (
              <div key={i} className="tech bg-slate-100 border p-6 sm:rounded text-center -ml-6 sm:ml-0 -mr-6 sm:mr-0">
                <span className="text-indigo-700 text-3xl"><i className={t.awesome}></i></span>
                <h4 className="font-bold text-slate-700 text-2xl mt-4">{t.name}</h4>
                <p className="text-slate-700 mt-4">{t.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default Tech;
