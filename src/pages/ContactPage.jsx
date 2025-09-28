import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // State to manage submission status (e.g., 'idle', 'sending', 'success', 'error')
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    // ** IMPORTANT: Replace this with a real endpoint using a service like Formspree or EmailJS **
    // For demonstration, we'll just simulate a delay and success.
    console.log('Form Data Submitted:', formData);
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate network request

    // On success:
    setStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' }); // Clear the form
    
    // To handle errors, you would setStatus('error');
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 text-white">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 font-raleway">
          Get In <span className="text-purple-400">Touch</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Column 1: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-300 font-josefin-sans mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-300 font-josefin-sans mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-lg font-medium text-gray-300 font-josefin-sans mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-300 font-josefin-sans mb-2">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 disabled:bg-purple-400 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
            {status === 'success' && <p className="mt-4 text-center text-green-400">Message sent successfully! I'll get back to you soon.</p>}
            {status === 'error' && <p className="mt-4 text-center text-red-400">Something went wrong. Please try again later.</p>}
          </motion.div>

          {/* Column 2: Illustration */}
          <motion.div 
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src="https://storyset.com/illustration/contact-us/pana" 
              alt="Contact illustration"
              className="w-full max-w-md"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;