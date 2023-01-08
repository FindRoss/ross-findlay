import { useState, useEffect } from 'react';
import sanityClient from "../../client.js";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

function Projects() {
  const [projectsData, setProjectsData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
          title,
          description, 
          github,
          mainImage,
          url
        }`
      )
      .then((data) => setProjectsData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="bg-slate-100" id="projects">
      <div className="container mx-auto py-36">
        <h2 className="text-6xl font-bold text-slate-700">Projects</h2>
        <p className="mt-4 text-2xl text-slate-500 max-w-prose">A number of the projects I am enjoy creating or am still working on.</p>

        <div className="grid sm:grid-cols-1 gap-4 sm:gap-12 mt-12">
          {/* tech bg-slate-100 border p-6 sm:rounded text-center -ml-6 sm:ml-0 -mr-6 sm:mr-0 */}
          {
            projectsData ? (
              projectsData.map((project, i) => {
                const { title, description, url, github, mainImage } = project;
                if (url) {
                  return (
                    <div key={title} className="md:flex md:flex-row-reverse mt-4 pt-4 border-t-2">
                      <div className="md:flex-1 md:ml-4">
                        <img src={urlFor(mainImage)} alt={title} className="shadow rounded" />
                      </div>
                      <div class="mt-4 md:mt-0 md:mr-4 md:flex-1">
                        <h3 className="font-bold text-slate-700 text-2xl">{title}</h3>
                        <div className="text-content text-lg text-slate-800">
                          <p>{description}</p>
                        </div>
                        <a href={url.current} target="_blank" rel="noreferrer" className="py-2 px-8 bg-blue-600 mt-4 rounded-full inline-block text-white font-bold">Visit <i class="ml-1 fa-solid fa-globe"></i></a>
                        <a href={github.current} target="_blank" rel="noreferrer" className="ml-1 py-2 px-8 bg-black mt-4 rounded-full inline-block text-white font-bold">GitHub <i class="ml-2 fa-brands fa-github"></i></a>
                      </div>
                    </div>
                  )
                }
                return;
              })
            ) : "Loading... "
          }
        </div>
      </div>
    </section>
  )
}
export default Projects