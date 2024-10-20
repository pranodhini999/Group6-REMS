import React from 'react';

const AgentDetails = () => {
  const agents = [
    {
      name: 'John Doe',
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fuxwing.com%2Fcustomer-care-icon%2F&psig=AOvVaw3mwJ15SFYdUgf06q8NmEtQ&ust=1729356625489000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLj2td-xmIkDFQAAAAAdAAAAABAS', // Placeholder image
      title: 'Real Estate Agent',
      email: 'johndoe@example.com',
      phone: '+123-456-7890',
      description:
        'John has been a trusted real estate agent for over 10 years, helping families find their dream homes. His in-depth knowledge of the market and excellent customer service make him a standout in the industry.',
      social: {
        facebook: 'https://facebook.com',
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com',
      },
    },
    {
      name: 'Jane Smith',
      image:
        'https://cdn-icons-png.flaticon.com/512/6070/6070926.png', // Use a valid image URL
      title: 'Senior Property Consultant',
      email: 'janesmith@example.com',
      phone: '+987-654-3210',
      description:
        'Jane has been in the real estate industry for over 15 years, specializing in luxury homes. Her attention to detail and dedication to client satisfaction is unmatched.',
      social: {
        facebook: 'https://facebook.com',
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com',
      },
    },
    {
      name: 'Michael Brown',
      image:
        'https://uxwing.com/wp-content/themes/uxwing/download/business-professional-services/customer-care-icon.svg', // Valid image URL
      title: 'Property Manager',
      email: 'michaelbrown@example.com',
      phone: '+555-123-4567',
      description:
        'Michael has extensive experience in managing residential and commercial properties. He ensures that every client receives top-notch service and support.',
      social: {
        facebook: 'https://facebook.com',
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com',
      },
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {agents.map((agent, index) => (
          <div
            key={index}
            className="p-8 bg-blue-500 text-white shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg border border-gray-300 transform hover:scale-105 hover:bg-white hover:text-black"
          >
            <div className="flex justify-center mb-6">
              <img
                src={agent.image}
                alt={agent.name}
                className="w-32 h-32 rounded-full shadow-lg border-4 border-indigo-500"
                onError={(e) => {
                  e.target.onerror = null; // Prevent infinite loop
                  e.target.src =
                    'https://via.placeholder.com/150'; // Fallback image
                }}
              />
            </div>
            <h2 className="text-2xl font-bold text-white text-center mb-2 hover:text-black">
              {agent.name}
            </h2>
            <p className="text-center text-indigo-200 mb-4 font-semibold hover:text-black">
              {agent.title}
            </p>
            <div className="text-center mb-6">
              <p className="text-indigo-200 mb-2 hover:text-black">
                <strong>Email:</strong> {agent.email}
              </p>
              <p className="text-indigo-200 hover:text-black">
                <strong>Phone:</strong> {agent.phone}
              </p>
            </div>
            <div className="text-indigo-200 text-center mb-6 hover:text-black">
              <p>{agent.description}</p>
            </div>
            <div className="flex justify-center space-x-4 mt-4">
              <a
                href={agent.social.facebook}
                className="text-white hover:text-blue-600 transition-colors duration-200"
              >
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
              <a
                href={agent.social.twitter}
                className="text-white hover:text-blue-500 transition-colors duration-200"
              >
                <i className="fab fa-twitter"></i> Twitter
              </a>
              <a
                href={agent.social.linkedin}
                className="text-white hover:text-blue-800 transition-colors duration-200"
              >
                <i className="fab fa-linkedin-in"></i> LinkedIn
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgentDetails;

