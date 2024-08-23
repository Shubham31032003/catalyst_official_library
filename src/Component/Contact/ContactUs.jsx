import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      e.target,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then((result) => {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, (error) => {
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="container-fluid  py-5 heading">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <h2 className="text-center mb-5">Get in Touch with Us </h2>
          <div className="row">
            <div className="col-md-6 mb-4 mb-md-0">
              <h3 className="mb-4 heading">Contact Information</h3>
              <div className="d-flex align-items-center mb-3">
                <FaEnvelope className="me-3" size={24} />
                <div>
                  <h5 className="mb-0">Email</h5>
                  <p className="mb-0">shubhampurwar3103@gmail.com</p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3">
                <FaPhone className="me-3" size={24} />
                <div>
                  <h5 className="mb-0">Phone</h5>
                  <p className="mb-0">+91-6394198556</p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3">
                <FaMapMarkerAlt className="me-3" size={24} />
                <div>
                  <h5 className="mb-0">Address</h5>
                  <p className="mb-0">Jabalpur,Madhya Pradesh,482011</p>
                </div>
              </div>
              <div className="mt-5">
                <h4>About Career Catalyst</h4>
                <p>We're dedicated to helping you unlock your full potential and achieve your career goals. Our team of experts is here to guide you every step of the way.</p>
              </div>
            </div>
            <div className="col-md-6" >
              <form onSubmit={handleSubmit} className="p-4 bg-white  rounded" style={{fontFamily:'"Kotta One", serif;',boxShadow:'0px 30px 20px rgb(98, 98, 98)'}}>
                <h3 className="mb-4">Send Us a Message</h3>
                <div className="mb-3" style={{ fontFamily: "'Kotta One', serif" }}>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3" style={{ fontFamily: "'Kotta One', serif" }}>
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3" style={{ fontFamily: "'Kotta One', serif" }}>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3" style={{ fontFamily: "'Kotta One', serif" }}>
                  <textarea
                    className="form-control form-control-lg"
                    rows="5"
                    placeholder="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div className="d-grid">
                  <button
                    type="submit"
                    className="btn custom_button btn-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : (
                      <>
                        <FaPaperPlane className="me-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
              {submitStatus === 'success' && (
                <div className="alert alert-success mt-3" role="alert">
                  Your message has been sent successfully!
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="alert alert-danger mt-3" role="alert">
                  There was an error sending your message. Please try again.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;