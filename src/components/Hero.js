function Hero() {
  return (
    <section>
      <div className="container relative mx-auto py-36">
        <div className="flex flex-col justify-center">
          {/* indigo-700*/}
          <div>
            <h1 className="text-5xl sm:text-7xl md:text-7xl lg:text-9xl font-bold">
              {/* <div className="text-indigo-700">Frontend</div>
              <div className="text-indigo-600">SEO</div>
              <div className="text-indigo-500">Accessibility</div> */}
              <div className="text-slate-700">Frontend</div>
              <div className="text-slate-700">SEO</div>
              <div className="text-slate-700">Accessibility</div>
            </h1>
          </div>
          <div>
            <p className="text-3xl text-slate-500 mt-8">I am a frontend developer working with Javascript, PHP, and CSS.</p>
          </div>
        </div>
      </div>
      <div className="absolute top-0 bottom-0 left-0 right-0">
        {/* Background img. */}
      </div>
    </section >
  )
}

export default Hero;
