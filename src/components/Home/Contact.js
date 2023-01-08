import ContactForm from '../ContactForm';

function Contact() {

  return (
    <section id="contact">
      <div className="container mx-auto pt-36 pb-24">
        <div className="max-w-xl mx-auto">
          <h2 className="text-6xl font-bold text-slate-700">Contact me</h2>
          <div className="mt-4 text-2xl text-slate-500 max-w-prose">
            <p>Get in touch with me with any questions or enquiries you would like to make.</p>
            <p className="mt-4">I look forward to hearing from you.</p>
          </div>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
};

export default Contact;