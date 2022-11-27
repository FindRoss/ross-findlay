import Content from './Content';
import Project from './Project';
import { useState, useEffect } from 'react';
import sanityClient from "../client.js";

function Projects() {
  const [allProjects, setAllProjects] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
          title,
          description,
          url,
          github,
          icon{
            asset->{
              _id,
              url
             }
           },
        }`
      )
      .then((data) => setAllProjects(data))
      .catch(console.error);
  }, []);

  return (
    <Content>
      <section className="bg-slate-100" id="projects">
        <div className="container mx-auto py-14">
          <h2 className="text-6xl font-bold text-slate-700">Personal Projects</h2>
          <p className="text-3xl text-slate-500 mt-8">Some of my personal and professional projects that I have had fun working on.</p>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {!allProjects ?
              'loading...' :
              allProjects.map((project, index) => <Project data={project} key={index} />)
            }
          </div>
        </div>
      </section>
    </Content>
  )
}

export default Projects; 
