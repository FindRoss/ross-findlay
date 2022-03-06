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
          <div className="col-span-2 flex items-center">
            <span><img src={logo} alt="logo" className="h-8 w-auto px-4" /></span>
            <h1 className="text-2xl">Ross Findlay</h1>
          </div>
          <div className="col-span-4 flex items-center hidden">
            <nav>
              <ul className="flex">
                {headingLinks.map((link, index) => (
                  <li className="px-4" key={index}><a href={link.href}>{link.title}</a></li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="col-span-2 hidden">
            <span>🔧</span>
          </div>
        </div>
      </div>
    </header>
  );

}
export default Header;
