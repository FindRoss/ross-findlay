import React, { useState } from 'react';
import axios from 'axios';

function ContactForm() {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    email: '',
    message: '',
  });
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        email: '',
        message: '',
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: 'POST',
      url: 'https://formspree.io/f/mdovopgo',
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          'Thank you, your message has been submitted.',
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <div className="bg-slate-100 p-3 rounded">
      <form className="w-full" onSubmit={handleOnSubmit}>
        <div>
          <label className="block font-bold text-slate-700 text-sm" htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="_replyto"
            onChange={handleOnChange}
            required
            value={inputs.email}
            className="w-full mt-2 p-2"
          />
        </div>
        <div className="mt-4">
          <label className="block font-bold text-slate-700 text-sm" htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            onChange={handleOnChange}
            required
            value={inputs.message}
            rows="4"
            className="w-full mt-2 p-2"
          />
        </div>
        <div className="mt-4">
          <button type="submit" disabled={status.submitting} className="py-2 px-8 bg-blue-600 rounded-full inline-block text-white font-bold">
            {!status.submitting
              ? !status.submitted
                ? 'Submit'
                : 'Submitted'
              : 'Submitting...'}
            <i class="ml-1 fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </form>
      {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && <div className="text-content text-lg text-slate-800"><p>{status.info.msg}</p></div>}
    </div>
  );
};

export default ContactForm;