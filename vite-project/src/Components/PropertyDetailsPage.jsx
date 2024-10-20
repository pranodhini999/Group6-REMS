import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PropertyDetailsPage = () => {
  const { id } = useParams();

  const propertyDetailsList = [
    {
      id: 1,
      name: 'Luxury Apartment',
      price: '$1,200,000',
      beds: 3,
      baths: 2,
      size: '1,500 sq ft',
      yearBuilt: 2020,
      location: '123 Main St, New York, NY',
      amenities: ['Gym', 'Swimming Pool', 'Parking', '24/7 Security'],
      description: 'A beautiful luxury apartment with modern amenities and stunning views.',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?cs=srgb&dl=pexels-binyaminmellish-106399.jpg&fm=jpg',
    },
    {
        id: 2,
        name: 'Cozy Cottage',
        price: '$750,000',
        beds: 2,
        baths: 1,
        size: '1,200 sq ft',
        yearBuilt: 2015,
        location: '456 Maple Rd, Vermont, VT',
        amenities: ['Fireplace', 'Private Garden', 'Parking', 'Pet-Friendly'],
        description: 'A cozy cottage with a warm and welcoming atmosphere, perfect for a small family.',
        image: 'https://images.unsplash.com/photo-1605146769289-440113cc3d00?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D',
      },
      {
          id: 3,
          name: 'Cozy Cottage',
          price: '$750,000',
          beds: 2,
          baths: 1,
          size: '1,200 sq ft',
          yearBuilt: 2015,
          location: '456 Maple Rd, Vermont, VT',
          amenities: ['Fireplace', 'Private Garden', 'Parking', 'Pet-Friendly'],
          description: 'A cozy cottage with a warm and welcoming atmosphere, perfect for a small family.',
          image: 'https://images.unsplash.com/photo-1605146769289-440113cc3d00?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D',
        },  {
          id: 4,
          name: 'Cozy Cottage',
          price: '$750,000',
          beds: 2,
          baths: 1,
          size: '1,200 sq ft',
          yearBuilt: 2015,
          location: '456 Maple Rd, Vermont, VT',
          amenities: ['Fireplace', 'Private Garden', 'Parking', 'Pet-Friendly'],
          description: 'A cozy cottage with a warm and welcoming atmosphere, perfect for a small family.',
          image: 'https://images.unsplash.com/photo-1605146769289-440113cc3d00?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D',
        },  {
          id: 5,
          name: 'Cozy Cottage',
          price: '$750,000',
          beds: 2,
          baths: 1,
          size: '1,200 sq ft',
          yearBuilt: 2015,
          location: '456 Maple Rd, Vermont, VT',
          amenities: ['Fireplace', 'Private Garden', 'Parking', 'Pet-Friendly'],
          description: 'A cozy cottage with a warm and welcoming atmosphere, perfect for a small family.',
          image: 'https://images.unsplash.com/photo-1605146769289-440113cc3d00?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D',
        },  {
          id: 6,
          name: 'Cozy Cottage',
          price: '$750,000',
          beds: 2,
          baths: 1,
          size: '1,200 sq ft',
          yearBuilt: 2015,
          location: '456 Maple Rd, Vermont, VT',
          amenities: ['Fireplace', 'Private Garden', 'Parking', 'Pet-Friendly'],
          description: 'A cozy cottage with a warm and welcoming atmosphere, perfect for a small family.',
          image: 'https://images.unsplash.com/photo-1605146769289-440113cc3d00?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D',
        },  {
          id: 7,
          name: 'Cozy Cottage',
          price: '$750,000',
          beds: 2,
          baths: 1,
          size: '1,200 sq ft',
          yearBuilt: 2015,
          location: '456 Maple Rd, Vermont, VT',
          amenities: ['Fireplace', 'Private Garden', 'Parking', 'Pet-Friendly'],
          description: 'A cozy cottage with a warm and welcoming atmosphere, perfect for a small family.',
          image: 'https://images.unsplash.com/photo-1605146769289-440113cc3d00?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D',
        },  {
          id: 8,
          name: 'Cozy Cottage',
          price: '$750,000',
          beds: 2,
          baths: 1,
          size: '1,200 sq ft',
          yearBuilt: 2015,
          location: '456 Maple Rd, Vermont, VT',
          amenities: ['Fireplace', 'Private Garden', 'Parking', 'Pet-Friendly'],
          description: 'A cozy cottage with a warm and welcoming atmosphere, perfect for a small family.',
          image: 'https://images.unsplash.com/photo-1605146769289-440113cc3d00?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D',
        },  {
          id: 9,
          name: 'Cozy Cottage',
          price: '$750,000',
          beds: 2,
          baths: 1,
          size: '1,200 sq ft',
          yearBuilt: 2015,
          location: '456 Maple Rd, Vermont, VT',
          amenities: ['Fireplace', 'Private Garden', 'Parking', 'Pet-Friendly'],
          description: 'A cozy cottage with a warm and welcoming atmosphere, perfect for a small family.',
          image: 'https://images.unsplash.com/photo-1605146769289-440113cc3d00?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D',
        },  {
          id: 10,
          name: 'Cozy Cottage',
          price: '$750,000',
          beds: 2,
          baths: 1,
          size: '1,200 sq ft',
          yearBuilt: 2015,
          location: '456 Maple Rd, Vermont, VT',
          amenities: ['Fireplace', 'Private Garden', 'Parking', 'Pet-Friendly'],
          description: 'A cozy cottage with a warm and welcoming atmosphere, perfect for a small family.',
          image: 'https://images.unsplash.com/photo-1605146769289-440113cc3d00?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D',
        },
  ];

  const propertyDetails = propertyDetailsList.find((property) => property.id === parseInt(id));

  if (!propertyDetails) {
    return <p className="text-center text-red-500">Property not found!</p>;
  }

  // EMI Calculator states
  const [salePrice, setSalePrice] = useState(Number(propertyDetails.price.replace(/[^0-9.-]+/g, '')));
  const [downPayment, setDownPayment] = useState(0);
  const [termYears, setTermYears] = useState(10);
  const [interestRate, setInterestRate] = useState(5);
  const [emi, setEmi] = useState(0);

  const calculateEMI = () => {
    const principal = salePrice - downPayment;
    const months = termYears * 12;
    const rate = interestRate / 12 / 100;
    const emiAmount = (principal * rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1);
    setEmi(emiAmount.toFixed(2));
  };

  // Comment box state
  const [comment, setComment] = useState('');
  const [submittedComment, setSubmittedComment] = useState('');

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  // Function to submit the comment via API
  const handleCommentSubmit = async () => {
    if (comment.trim()) {
      try {
        const response = await axios.post('http://localhost:8416/comments', { comment });
        if (response.data === "Comment submitted successfully!") {
          setSubmittedComment(comment);
          setComment(''); // Clear the comment input field
        } else {
          console.error("Error submitting comment:", response.data);
        }
      } catch (error) {
        console.error("There was an error submitting the comment:", error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8 flex flex-wrap">
        {/* Left Section: Property Details */}
        <div className="w-full lg:w-2/3 pr-4">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">{propertyDetails.name}</h2>
          <img className="w-full h-64 object-cover mb-6" src={propertyDetails.image} alt={propertyDetails.name} />
          <p className="text-gray-700 text-lg mb-4">{propertyDetails.description}</p>
          
          <div className="text-gray-600 mb-4">
            <p><strong>Price:</strong> {propertyDetails.price}</p>
            <p><strong>Beds:</strong> {propertyDetails.beds}</p>
            <p><strong>Baths:</strong> {propertyDetails.baths}</p>
            <p><strong>Size:</strong> {propertyDetails.size}</p>
            <p><strong>Year Built:</strong> {propertyDetails.yearBuilt}</p>
            <p><strong>Location:</strong> {propertyDetails.location}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Amenities</h3>
            <ul className="list-disc list-inside text-gray-600">
              {propertyDetails.amenities.map((amenity, index) => (
                <li key={index}>{amenity}</li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <button className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-500">
              Leave a Review
            </button>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">Similar Properties</h3>
          <div className="grid grid-cols-2 gap-4">
            {propertyDetailsList
              .filter((property) => property.id !== parseInt(id))
              .map((similarProperty) => (
                <div key={similarProperty.id} className="border rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-gray-800">{similarProperty.name}</h4>
                  <img className="w-full h-48 object-cover my-2" src={similarProperty.image} alt={similarProperty.name} />
                  <p className="text-gray-600">{similarProperty.price}</p>
                  <p className="text-gray-600">{similarProperty.location}</p>
                </div>
              ))}
          </div>
        </div>

        {/* Right Section: EMI Calculator */}
        <div className="w-full lg:w-1/3 pl-4">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">EMI Calculator</h3>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Sale Price</label>
              <input
                type="number"
                value={salePrice}
                onChange={(e) => setSalePrice(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Down Payment</label>
              <input
                type="number"
                value={downPayment}
                onChange={(e) => setDownPayment(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Term (years)</label>
              <input
                type="number"
                value={termYears}
                onChange={(e) => setTermYears(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Interest Rate (%)</label>
              <input
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2"
              />
            </div>
            <button
              onClick={calculateEMI}
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-500"
            >
              Calculate EMI
            </button>
            {emi > 0 && (
              <div className="mt-4 text-center text-gray-800">
                <p className="text-lg font-semibold">Monthly EMI: ${emi}</p>
              </div>
            )}
          </div>
        </div>

        {/* Comment Box and Submit Button */}
        <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Leave a Comment</h3>
            <textarea
              className="w-full h-80 p-4 border rounded-md text-gray-700 mb-4"
              placeholder="Write your comment here..."
              value={comment}
              onChange={handleCommentChange}
            ></textarea>
            <button
              className="bg-blue-600  w-full text-white py-2 px-4 rounded-md hover:bg-blue-500"
              onClick={handleCommentSubmit}
            >
              Submit Comment
            </button>

            {/* Displaying submitted comment */}
            {submittedComment && (
              <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-800 rounded-md">
                <p><strong>Submitted Comment:</strong> {submittedComment}</p>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsPage;
