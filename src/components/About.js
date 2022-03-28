
function About() {

  const highlighted = "text-indigo-800 font-bold";

  // body.onscroll = function()
  // element.getBoundingClientRect().bottom <= window.innerHeight

  const handleOnScroll = () => console.log('fooo');

  return (
    <>
      <div className="flex items-end hidden" onScroll={handleOnScroll}>
        <div className="flex-1"></div>
        <div className="flex-1 bg-slate-100 h-3.5"></div>
        <div className="flex-1 bg-slate-100 h-8"></div>
        <div className="flex-1 bg-slate-100 h-14"></div>
      </div>
      {/* bg-gradient-to-t from-slate-100 via-indigo-100 to-indigo-200 relative */}
      <section className="bg-slate-100">
        <div className="container mx-auto py-36 text-center">
          <h2 className="text-6xl font-bold text-slate-700">About me</h2>
          <div className="mt-12">
            <div className="text-3xl text-slate-500 max-w-prose">
              <p className="mb-8">My name is Ross and I code things with <span className={highlighted}>WordPress</span>, <span className={highlighted}>PHP</span>, <span className={highlighted}>CSS</span>, and <span className={highlighted}>Javascript</span>.</p>
              <p>I create websites that are <span className={highlighted}>accessible</span> to everyone.</p>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="flex items-end" style={{ transform: "rotate(180deg)" }}>
        <div className="flex-1 bg-slate-100 h-14"></div>
        <div className="flex-1 bg-slate-100 h-8"></div>
        <div className="flex-1 bg-slate-100 h-3.5"></div>
        <div className="flex-1"></div>
      </div> */}
    </>
  )
}

export default About; 