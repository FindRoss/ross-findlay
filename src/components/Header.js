import logo from '../assets/logo-plain.png';

function Header() {

  const headingLinks = [
    // {
    //   title: "About me",
    //   href: "#about-section"
    // },
    {
      title: "Tech",
      href: "#tech-section"
    },
    {
      title: "Code",
      href: "#projects-section"
    },
    {
      title: "Get in touch",
      href: "#contact-section"
    }
  ];

  return (
    <header className="py-5">
      <div className="container mx-auto">
        <div className="grid grid-cols-8 grid-rows-1 gap-4">
          <div className="col-span-6 md:col-span-2 flex items-center">
            <span><img src={logo} alt="logo" className="h-10 w-10 mr-4" /></span>
            <h1 className="text-2xl font-light">Ross Findlay</h1>
          </div>
          <div className="col-span-8 row-start-2 md:row-start-1 md:col-span-4 flex items-center hidden">
            <nav>
              <ul className="flex">
                {headingLinks.map((link, index) => (
                  <li className="px-4" key={index}><a href={link.href}>{link.title}</a></li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="col-span-2 flex items-center justify-center">
            <span>🔧</span>
          </div>
        </div>
      </div>
    </header>
  );

}
export default Header;
