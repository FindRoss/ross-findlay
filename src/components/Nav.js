import { NavLink } from "react-router-dom";
import pdf from '../ross-findlay-cv.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLink } from '@fortawesome/free-solid-svg-icons'


function Nav() {
  return (
    <>
      <header className="border-b-2">
        <div className="container mx-auto">
          <div className="flex justify-between items-center py-5">
            <NavLink to="/">
              <span className="text-2xl md:text-3xl font-bold text-slate-700">Ross Findlay</span>
            </NavLink>
            <div className="flex items-center justify-end text-lg">
              <nav>
                <ul className="flex">
                  <li className="px-4 text-slate-700" hidden><NavLink to="/projects">Projects</NavLink></li>
                  <li className="pl-4 text-slate-700" hidden><NavLink to="/articles">Articles</NavLink></li>
                  <a href={pdf} target="_blank" rel="noreferrer" className="py-2 px-8 bg-blue-600 hover:bg-blue-800 rounded-full inline-block text-white font-bold">Resume <FontAwesomeIcon icon={faExternalLink} className="ml-2" /></a>
                </ul>
              </nav>
            </div>
            {/* Hidden */}
            <div className="col-span-2 flex items-center justify-center hidden">
              <span>🔧</span>
            </div>
          </div>
        </div>
      </header>
    </>
  );

}
export default Nav;