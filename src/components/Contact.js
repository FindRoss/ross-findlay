import { useState } from 'react';

function Contact() {

  const [email, setEmail] = useState('rosspfindlay@gmail.com');

  const handleClick = () => {

  }

  return (
    <section className="">
      <div className="container relative mx-auto py-20 px-2">
        <div className="mx-auto" style={{ maxWidth: "50ch" }}>
          <h2 className="text-6xl">Get in touch</h2>
          <p className="text-xl text-slate-500 mt-6">
            Email me at <a href={`mailto:${email}`} target="_blank" onClick={handleClick()}><span className="text-indigo-700 underline">{email}</span></a>
          </p>
        </div>
      </div>
    </section >
  )
};

export default Contact;