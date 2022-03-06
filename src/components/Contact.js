function Contact() {

  return (
    <section>
      <div className="container relative mx-auto py-20 px-2">
        <div className="mx-auto" style={{ maxWidth: "50ch" }}>
          <h2 className="text-6xl">Get in touch</h2>
          <p className="text-xl text-slate-500 mt-6">
            Email me at <a className="text-indigo-700 underline" href="mailto:rosspfindlay@gmail.com" target="_blank">rosspfindlay@gmail.com</a>
          </p>
        </div>
      </div>
    </section>
  )
};

export default Contact;