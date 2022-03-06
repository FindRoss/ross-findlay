import forest from '../assets/forest.jpg'

export default function Hero() {

  // host on https://vercel.com 
  return (
    <section className="">
      {/* source https://unsplash.com/photos/_gu7E90QChU?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink */}
      <div className="container mx-auto">
        <div className="flex flex-col justify-center">
          <div className="py-40">
            <h1 className="text-7xl text-slate-800"><span>Frontend</span> <span className="text-indigo-800">Developing</span></h1>
            <p className="text-2xl text-slate-500 mt-6">A frontend developer working with JavaScript, PHP and CSS.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
