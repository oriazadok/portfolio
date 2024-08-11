import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';  // Ensure this line is correct
import '../styles/contact.css';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_aatxqnk', 'template_gn2rgna', form.current, {
              publicKey: 'Q0N48bNaqZbgS-rQk',
            })
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Message sent successfully!');
        },
        (err) => {
          console.error('FAILED...', err);
          alert('Failed to send message, please try again.');
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-content">
        <h2>Contact Me</h2>
        <p>Feel free to get in touch with me if you have any questions or inquiries.</p>
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
