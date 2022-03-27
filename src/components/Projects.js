import Project from './Project';
import { projectsData } from './ProjectsData';

function Projects() {


  return (
    <section className="bg-slate-100" id="projects">
      <div className="container mx-auto py-36">
        <h2 className="text-6xl font-bold text-slate-700">Projects</h2>
        <p className="text-3xl text-slate-500 mt-8">Some of my personal and professional projects that I have had fun working on.</p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {projectsData.map((data, i) => <Project data={data} key={i} />)}
        </div>

      </div>
    </section >
  )
}

export default Projects; 
