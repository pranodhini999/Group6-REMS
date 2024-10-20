
// import React, { useState } from "react";
// import axios from "axios";
// import DashboardLayout from '../../DashboardLayout';

// const AddPropertyForm = () => {
//   const [propertyName, setPropertyName] = useState("");
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const propertyData = { name: propertyName };

//     try {
//       const response = await axios.post("http://localhost:8416/property/add", propertyData);
//       setIsSubmitted(true); // Set submitted flag to true
//       setPropertyName(''); // Clear the input field after submission
//       setErrorMessage(''); // Reset error message

//       setTimeout(() => {
//         alert(response.data); // Show success message
//       }, 200);
//     } catch (error) {
//       console.error("There was an error adding the property!", error);
//       setErrorMessage('Failed to add property. Please try again.'); // Set error message
//     }
//   };

//   return (
//     <DashboardLayout>
//       <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
//         <h2 className="text-2xl font-bold mb-4">Add Property</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="propertyName" className="block text-gray-700 font-bold mb-2">
//               Property Name:
//             </label>
//             <input
//               type="text"
//               id="propertyName"
//               value={propertyName}
//               onChange={(e) => setPropertyName(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
//           >
//             Add Property
//           </button>
//         </form>

//         {/* Show a confirmation message once the form is submitted */}
//         {isSubmitted && <div className="mt-4 text-green-500">Property added successfully!</div>}

//         {/* Show error message if submission fails */}
//         {errorMessage && <div className="mt-4 text-red-500">{errorMessage}</div>}
//       </div>
//     </DashboardLayout>
//   );
// };

// export default AddPropertyForm;
import React, { useState } from "react";
import axios from "axios";
import DashboardLayout from '../../DashboardLayout';

const AddPropertyForm = () => {
  const [propertyName, setPropertyName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const propertyData = { name: propertyName };

    try {
      const response = await axios.post("http://localhost:8416/property/add", propertyData);
      setIsSubmitted(true); // Set submitted flag to true
      setPropertyName(''); // Clear the input field after submission
      setErrorMessage(''); // Reset error message

      setTimeout(() => {
        alert(response.data); // Show success message
      }, 200);
    } catch (error) {
      console.error("There was an error adding the property!", error);
      setErrorMessage('Failed to add property. Please try again.'); // Set error message
    }
  };

  return (
    <DashboardLayout>
      <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-4">Add Property</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="propertyName" className="block text-gray-700 font-bold mb-2">
              Property Name:
            </label>
            <input
              type="text"
              id="propertyName"
              value={propertyName}
              onChange={(e) => setPropertyName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Add Property
          </button>
        </form>

        {/* Show a confirmation message once the form is submitted */}
        {isSubmitted && <div className="mt-4 text-green-500">Property added successfully!</div>}

        {/* Show error message if submission fails */}
        {errorMessage && <div className="mt-4 text-red-500">{errorMessage}</div>}
      </div>
    </DashboardLayout>
  );
};

export default AddPropertyForm;