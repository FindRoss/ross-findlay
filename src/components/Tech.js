

function Tech() {

  const techData = [
    {
      name: "HTML",
      awesome: "fas fa-code",
      desc: "Where my journey begun, I feel like I am still learning little tips and tricks about HTML still"
    },
    {
      name: "CSS",
      awesome: "fab fa-css3-alt",
      desc: "I enjoy continally working on my CSS abilities, trying to create ever cleaner and more stable solutions, and learning new frameworks: check out <a target='_blank' href='https://evergreen.segment.com/'>Evergreen</a>, one of my favorites."
    },
    {
      name: "JavaScript",
      awesome: "fab fa-js",
      desc: "I love working with JavaScript"
    },
    {
      name: "React",
      awesome: "fab fa-react",
      desc: "I have the same feeling about React as when I first tentatively started to learn it: It just make sense. Its practical, opens tons of opptunities, encorporates so many tools, and is easy to manage"
    },
    {
      name: "WordPress",
      awesome: "fab fa-wordpress-simple",
      desc: "I have have worked with WordPress for four years, using it on every level, from content creator, to publisher, to SEO, to developer. The new Guttenberg editor is fantastic."
    },
    {
      name: "NPM",
      awesome: "fab fa-npm",
      desc: "I DONT NEED THIS ONE ITS NOT REALLY A SKILL _ BETTER TO SAY GIT OR SOMETHING__ FIMGA"
    },
    {
      name: "Bootstrap",
      awesome: "fab fa-bootstrap",
      desc: "I have spent a lot of time working with Bootstrap. "
    },
    {
      name: "PHP",
      awesome: "fab fa-php"
    }
  ];

  return (
    <section className="py-20 hidden">
      <div className="container max-auto">
        <h2 className="text-3xl">Technology</h2>
        <p className="text-2xl text-slate-500 mt-6">A few of the technongies I enjoy working with and learning about.</p>
        <ul className="techs">
          {techData.map((t, i) => {
            return (
              <li key={i} className="tech">
                <div className="tech-card">
                  <span className="tech-card__icon">
                    <i className={t.awesome}></i>
                  </span>
                  <h4>{t.name}</h4>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  )
}

export default Tech;
