import { logoFinder } from './helper/logoFinder';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

function Project({ data }) {
  const { title, description, github, website } = data;

  const buttonClass = "block uppercase text-sm text-slate-600 p-4";

  return (
    <div className="bg-white rounded">
      <div className="p-6 flex flex-col items-center">
        <img src={logoFinder(title)} alt={title} className="w-12 h-12" />
        <h3 className="font-bold text-slate-700 text-1xl mt-6">{title}</h3>
        <p className="text-slate-700 mt-2 text-center">{description}</p>
      </div>
      <div className="mt-2 flex justify-center">
        {website ? (
          <a href={website} target="_blank" rel="noreferrer" className={buttonClass}>Website <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
        ) : ""}
        {github ? (
          <a href={github} target="_blank" rel="noreferrer" className={buttonClass}>Github <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
        ) : ""}
      </div>
    </div>
  )
}

export default Project;
