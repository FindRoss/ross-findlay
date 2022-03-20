
import apexLogo from '../assets/apex-legends-logo.png';
import dateLogo from '../assets/save-the-date-logo.svg';
import flashcardLogo from '../assets/flashcards-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

function Project({ data }) {
  const { title, description, github, website } = data;

  const logoFinder = (title) => {
    switch (title) {
      case "Apex Legends Map":
        return apexLogo;
      case "Save The Date":
        return dateLogo;
      case "Flashcards":
        return flashcardLogo;
      default:
        return apexLogo;
    }
  }

  const buttonClass = "block uppercase text-sm text-slate-600 lg:mb-2 ml-3 lg:ml-0";

  return (
    <div className="p-8 bg-white rounded shadow grid lg:grid-cols-3">
      <div className="lg:col-span-2">
        <img src={logoFinder(title)} alt={title} className="w-20 h-20 md:w-34 md:h-34" />
        <h3 className="font-bold mt-6">{title}</h3>
        <p className="text-slate-600 mt-8 mt-4">{description}</p>
      </div>
      <div className="mt-8 lg:mt-0 flex justify-end lg:flex-col lg:items-end">
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
