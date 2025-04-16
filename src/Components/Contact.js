import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import "./Contact.css";
import contact from './contact.png';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ text: '', isError: false });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      'service_9ntq697',      // ✅ Your service ID
      'template_tt6cq89',     // ✅ Your template ID
      form.current,           // ✅ The form reference
      'lZN54h3QP0n-yhRSa'   // ✅ Your public key (user ID)
    )
    .then((result) => {
      setMessage({ text: 'Message sent successfully!', isError: false });
      form.current.reset();
    })
    .catch((error) => {
      setMessage({ text: 'Failed to send message. Please try again.', isError: true });
    })
    .finally(() => {
      setIsSubmitting(false);
      setTimeout(() => setMessage({ text: '', isError: false }), 5000);
    });
  };

  return (
    <div className="contact-content" id="contact">
      <div className="contact-form">
        <h2>Contact Me</h2>
        {message.text && (
          <div className={`message ${message.isError ? 'error' : 'success'}`}>
            {message.text}
          </div>
        )}
        <form ref={form} onSubmit={sendEmail}>
          <input 
            type="text" 
            name="from_name" 
            placeholder="Name" 
            required 
          />
          <input 
            type="email" 
            name="from_email" 
            placeholder="Email" 
            required 
          />
          <textarea 
            name="message" 
            placeholder="Message" 
            rows="4" 
            required
          ></textarea>
          <button 
            type="submit" 
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Submit'}
          </button>
        </form>
      </div>
      <div className="illustration">
        <img src={contact} alt="illustration" />
      </div>
    </div>
  );
};

export default Contact;
