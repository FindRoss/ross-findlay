import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import Content from './Content';
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

function Project({ data }) {
  const { title, description, icon, url, github } = data

  const buttonClass = "block uppercase text-sm text-slate-600 p-4";

  return (
    <Content>
      <div className="bg-white border rounded">
        <div className="p-6 flex flex-col items-center">
          <img src={urlFor(icon)} alt={title} className="w-12 h-12" />
          <h3 className="font-bold text-slate-700 text-1xl mt-6">{title}Foobar!?</h3>
          <p className="text-slate-700 mt-2 text-center">{description}</p>
        </div>
        <div className="mt-2 flex justify-center">
          {url ? (
            <a href={url.current} target="_blank" rel="noreferrer" className={buttonClass}>
              Website
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          ) : ""}
          {github ? (
            <a href={github.current} target="_blank" rel="noreferrer" className={buttonClass}>
              Github
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          ) : ""}
        </div>
      </div>
    </Content>
  );
}

export default Project;
