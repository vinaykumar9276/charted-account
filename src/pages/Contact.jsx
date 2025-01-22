import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    // Handle form submission logic (e.g., send email, save in database, etc.)
    console.log('Form Submitted:', formData);
  };

  return (
    <div className="p-6">
      {/* Contact Page Header */}
      <h1 className="text-4xl font-extrabold text-center my-5">Contact Us</h1>
      <p className="text-center text-lg text-gray-600 mb-6">
        Have questions or need assistance? Reach out to us!
      </p>

      {/* Contact Form */}
      <div className="max-w-3xl mx-auto">
        {formSubmitted ? (
          <div className="text-center text-green-500">
            <h2 className="text-xl font-semibold">Thank you for contacting us!</h2>
            <p>We will get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-semibold">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-semibold">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-semibold">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Enter your message"
                rows="5"
              />
            </div>

            <div className="text-center">
              <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                Send Message
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Contact Info */}
      <div className="mt-12 text-center text-lg">
        <p className="font-semibold">Alternatively, you can reach us at:</p>
        <p>Email: <a href="mailto:contact@charteredfinders.com" className="text-black-500">vinaykothirala9276@gmail.com</a></p>
        <p>Phone: <span className="text-black-500">+91-7995479817</span></p>
      </div>
    </div>
  );
};

export default Contact;