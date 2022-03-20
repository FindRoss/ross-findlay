import logo from '../assets/rf-logo-indigo.svg';


function Header() {

  const headingLinks = [
    // {
    //   title: "About me",
    //   href: "#about-section"
    // },
    // {
    //   title: "Tech",
    //   href: "#tech-section"
    // },
    {
      title: "Projects",
      href: "#projects"
    },
    {
      title: "Get in touch",
      href: "#contact"
    }
  ];

  return (
    <header>
      <div className="container mx-auto py-5 px-8">
        <div className="flex items-center justify-center">

          <div className="flex items-center align-center">
            <span><img src={logo} alt="logo" className="h-10 w-10 mr-2" /></span>
            {/* <h1 className="text-3xl text-slate-600 font-bold">Ross Findlay</h1> */}
          </div>
          <span className="text-4xl mx-8 text-slate-460">|</span>
          <div className="flex items-center justify-end">
            <nav>
              <ul className="flex">
                {headingLinks.map((link, index) => (
                  <li className="px-4 text-2xl text-slate-800" key={index}><a href={link.href}>{link.title}</a></li>
                ))}
              </ul>
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
export default Header;
