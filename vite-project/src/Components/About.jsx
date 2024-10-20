import React from 'react';

const RealEstateContent = () => {
  return (
    <div className="h-auto w-full bg-gray-100">
      <div className="relative">
        {/* Background Image Section */}
        <div
          className="h-[70vh] bg-cover bg-center"
          style={{ backgroundImage: 'url(https://static.vecteezy.com/system/resources/previews/021/960/931/non_2x/black-gold-real-estate-logo-construction-architecture-building-logo-design-template-element-vector.jpg)' }}
        >
          <div className="flex justify-center items-center h-full bg-black bg-opacity-50">
            <h2 className="text-4xl font-extrabold text-white">
              Welcome to Our Real Estate Website
            </h2>
          </div>
        </div>

        {/* Content Section (Below the Image) */}
        <div className="bg-white p-8 rounded-t-lg shadow-lg -mt-16">
          <div className="max-w-3xl mx-auto">
            {/* First Paragraph */}
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Explore the finest properties in the city with our advanced real estate platform. 
              Whether you're searching to buy, sell, or rent, our wide range of listings has you covered. 
              Discover homes, apartments, and commercial spaces tailored to your needs.
            </p>

            {/* Second Paragraph */}
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our website offers detailed property listings, high-resolution images, and comprehensive information, allowing you to make confident and informed decisions. Start your journey today and find the property you've been dreaming of!
            </p>

            {/* Why Choose Us Section */}
            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              Why Choose Us?
            </h3>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>🌍 **Access to a wide range of properties**: From luxury homes to affordable apartments, our platform offers something for everyone.</li>
              <li>🖼️ **Detailed property descriptions and high-quality images**: View properties in detail with high-quality visuals to make your decision easier.</li>
              <li>🔍 **Smart filters and search options**: Refine your property search by location, price, size, and more to find exactly what you need.</li>
              <li>👩‍🏫 **Expert advice and personalized guidance**: Get support from industry experts, especially for first-time homebuyers.</li>
              <li>💼 **Seamless buying, selling, or renting process**: Experience a smooth, stress-free transaction from start to finish.</li>
              <li>📱 **Mobile-friendly interface**: Browse properties on the go with our fully responsive website that adapts to any device.</li>
            </ul>

            {/* Final Paragraph */}
            <p className="text-lg text-gray-600 mt-6 leading-relaxed">
              Whether you're in search of your dream home, looking for an investment opportunity, or just exploring the market, our platform provides everything you need for a smooth and successful real estate journey. 
              Explore our extensive listings today and take the first step toward finding your perfect property!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealEstateContent;
