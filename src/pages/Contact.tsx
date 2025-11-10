import { useEffect, useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <div className="page-container contact-page">
      <div className="content-wrapper fade-in">
        <h1 className="page-title">Get In Touch</h1>
        <p className="page-subtitle">Let's Work Together</p>

        <div className="contact-grid">
          <div className="contact-info">
            <h2>Contact Information</h2>
            <p className="contact-intro">
              Feel free to reach out for collaborations, projects, or just a friendly chat about technology!
            </p>

            <div className="info-items">
              <div className="info-item">
                <Mail size={24} />
                <div>
                  <h4>Email</h4>
                  <p>your.email@example.com</p>
                </div>
              </div>

              <div className="info-item">
                <Phone size={24} />
                <div>
                  <h4>Phone</h4>
                  <p>+1 (123) 456-7890</p>
                </div>
              </div>

              <div className="info-item">
                <MapPin size={24} />
                <div>
                  <h4>Location</h4>
                  <p>Your City, Your Country</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Enter your message"
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                {submitted ? 'Message Sent!' : 'Send Message'}
              </button>

              {submitted && (
                <p className="success-message">Thank you! Your message has been sent successfully.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
