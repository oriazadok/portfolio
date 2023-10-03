import '../styles/contact.css'

const Contact = () => {
  const sendEmail = () => {
    const subject = 'Regarding Your Message';
    const body = 'Hello Oria,\n\nI have a message for you:\n\n';

    // Compose the email address (replace with your actual email address)
    const email = 'oriazadok@gmail.com';

    // Create a "mailto" link with the subject and body
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open the user's default email client with the pre-filled email
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-content">
        <h2>Contact Me</h2>
        <p>Feel free to get in touch with me if you have any questions or inquiries.</p>
        <div className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button onClick={sendEmail}>Send Message</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
