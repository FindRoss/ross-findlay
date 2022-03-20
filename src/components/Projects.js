import Project from './Project';
import { projectsData } from './ProjectsData';

function Projects() {


  return (
    <section className="bg-slate-100" id="projects">
      <div className="container mx-auto py-36 px-8">
        <h2 className="text-6xl">Projects</h2>

        <div className="grid lg:grid-cols-2 gap-8 mt-12">
          <div className="text-3xl text-slate-500 mt-8">
            <p>Some of my personal and professional projects that I have had fun working on.</p>
          </div>
          {projectsData.map((data, i) => <Project data={data} key={i} />)}
        </div>

      </div>
    </section >
  )
}

export default Projects; 
