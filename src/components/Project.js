function Project() {

  const projectData = [
    {
      image: '',
      title: 'Apex Legends Map Rotation',
      description: 'Gaming tool',
      used: ['React', 'Tailwind'],
      url: 'https://google.com'
    }
  ]

  return (
    <section className="py-20 hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-3">
          <div className="text-left">
            <h2 className="text-3xl">Projects</h2>
            <p className="text-2xl text-slate-500 mt-6">Some of my personal and professional projects that I have had fun working on.</p>
          </div>
          <div className="text-left">
            {projectData.map((data, i) => <div className="flex justify-between items-center  p-6 bg-indigo-100"><h3 className="text-grey-800" key={i}>{data.title}</h3><div className="w-10 h-10 bg-gradient-to-b from-sky-200 to-indigo-300"></div></div>)}
          </div>
        </div>
      </div>
    </section >
  )
}

export default Project; 
