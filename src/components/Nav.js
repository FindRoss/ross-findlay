import { Link } from "react-router-dom";
import logo from '../assets/rf-logo-indigo.svg';


function Nav() {
  return (
    <>
      <header className="border-b-2">
        <div className="container mx-auto">
          <div className="flex justify-between items-center py-5">
            <Link to="/"><img src={logo} alt="logo" className="h-14 w-14 mr-2" /></Link>
            <div className="flex items-center justify-end text-lg lg:text-2xl">
              <nav>
                <ul className="flex">
                  <li className="px-4 text-slate-700"><Link to="/projects">Projects</Link></li>
                  <li className="pl-4 text-slate-700 hidden"><Link to="/articles">Articles</Link></li>
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


 // const headingLinks = [
  //   // {
  //   //   title: "About me",
  //   //   href: "#about-section"
  //   // },
  //   // {
  //   //   title: "Tech",
  //   //   href: "#tech-section"
  //   // },
  //   {
  //     title: "Projects",
  //     href: "#projects"
  //   },
  //   {
  //     title: "Get in touch",
  //     href: "#contact"
  //   }
  // ];
