import { Link } from "react-router-dom";
import logo from '../assets/rf-logo-indigo.svg';


function Nav() {
  return (
    <header className="bg-slate-100">
      <div className="container mx-auto py-5">
        <div className="flex items-center">

          <div className="flex items-center align-center">
            <span><img src={logo} alt="logo" className="h-10 w-10 mr-2" /></span>
          </div>
          <span className="text-1xl lg:text-4xl mx-8 text-slate-400 h-100">|</span>
          <div className="flex items-center justify-end text-lg lg:text-2xl hidden">
            <nav>
              <Link to="/a/about-router">Articles</Link>
            </nav>
          </div>

          {/* Hidden */}
          <div className="col-span-2 flex items-center justify-center hidden">
            <span>🔧</span>
          </div>

        </div>
      </div>
    </header >
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
