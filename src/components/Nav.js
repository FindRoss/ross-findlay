import { NavLink } from "react-router-dom";
// import logo from '../assets/rf-logo-indigo.svg';


function Nav() {
  return (
    <>
      <header className="border-b-2">
        <div className="container mx-auto">
          <div className="flex justify-between items-center py-5">
            <NavLink to="/">
              {/* <div className="flex items-center"> */}
              {/* <img src={logo} alt="logo" className="h-14 w-14 mr-2" /> */}
              <span className="text-2xl md:text-3xl font-bold text-slate-700">Ross Findlay</span>
              {/* </div> */}
            </NavLink>
            <div className="flex items-center justify-end text-lg lg:text-2xl">
              <nav>
                <ul className="flex">
                  <li className="px-4 text-slate-700" hidden><NavLink to="/projects">Projects</NavLink></li>
                  <li className="pl-4 text-slate-700" hidden><NavLink to="/articles">Articles</NavLink></li>
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