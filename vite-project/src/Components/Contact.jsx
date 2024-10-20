import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-16 px-6">
      <h2 className="text-4xl font-extrabold text-center text-white mb-12">Get in Touch</h2>
      
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8">
        {/* Email Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">Email Us</h3>
          <p className="text-gray-700 mb-2">
            For any inquiries or issues, please reach out to us at:
          </p>
          <a
            href="mailto:support@realestate.com"
            className="text-xl text-blue-600 font-medium hover:text-blue-800 transition duration-300 ease-in-out"
          >
            support@realestate.com
          </a>
        </div>

        {/* Phone Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">Call Us</h3>
          <p className="text-gray-700 mb-2">
            You can also reach us by phone:
          </p>
          <a
            href="tel:+11234567890"
            className="text-xl text-blue-600 font-medium hover:text-blue-800 transition duration-300 ease-in-out"
          >
            +1 (123) 456-7890
          </a>
        </div>

        {/* Office Address Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">Visit Our Office</h3>
          <p className="text-gray-700 mb-2">
            Our office is located at:
          </p>
          <address className="text-lg text-gray-800 font-medium">
            123 RealEstate St, Suite 456, <br />
            CityName, Country
          </address>
        </div>

        {/* Social Media Section */}
        <div className="mt-8 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Follow Us</h3>
          <div className="flex justify-center space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 transition duration-300 ease-in-out">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
