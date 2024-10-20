

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import DashboardLayout from '../../DashboardLayout';
// import { useNavigate } from 'react-router-dom';

// const PropertyList = () => {
//   const [properties, setProperties] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isEditing, setIsEditing] = useState(null); // To track which property is being edited
//   const [editName, setEditName] = useState(""); // To hold the new name for the property
//   const [successMessage, setSuccessMessage] = useState(""); // To hold success message
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch data from the Spring Boot API
//     axios.get('http://localhost:8416/property/all')
//       .then(response => {
//         setProperties(response.data);
//         setLoading(false);
//       })
//       .catch(error => {
//         setError("Error fetching data");
//         setLoading(false);
//       });
//   }, []);

//   const handleEditClick = (property) => {
//     setIsEditing(property.id); // Set the property being edited
//     setEditName(property.name); // Set the current name in the input
//     setSuccessMessage(""); // Clear any previous success messages
//   };

//   const handleSave = (id) => {
//     axios.put(`http://localhost:8416/property/edit/${id}`, { name: editName })
//       .then(response => {
//         // Update properties state with the new name
//         setProperties(properties.map(property => 
//           property.id === id ? { ...property, name: editName } : property
//         ));
//         setIsEditing(null); // Close the edit input
//         setSuccessMessage("Successfully submitted"); // Show success message
//         alert(response.data); // Show success message in alert
//       })
//       .catch(error => {
//         console.error("There was an error updating the property!", error);
//         alert('Failed to update property');
//       });
//   };

//   const handleDelete = (id) => {
//     if (window.confirm('Are you sure you want to delete this property?')) {
//       axios.delete(`http://localhost:8416/property/${id}`)
//         .then(() => {
//           setProperties(properties.filter(property => property.id !== id));
//           alert('Property deleted successfully');
//         })
//         .catch(error => {
//           console.error("There was an error deleting the property!", error);
//           alert('Failed to delete property');
//         });
//     }
//   };

//   const handleCreate = () => {
//     // Redirect to create property form
//     navigate('/property/create');
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <DashboardLayout>
//       <div className="container mx-auto">
//         <h1 className="text-2xl font-bold mb-4">Property List</h1>

//         {/* Success Message */}
//         {successMessage && (
//           <div className="mb-4 p-2 bg-green-200 text-green-800 border border-green-300 rounded">
//             {successMessage}
//           </div>
//         )}
        
//         {/* Create button */}
//         <button 
//           onClick={handleCreate} 
//           className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
//         >
//            Property List 
//         </button>

//         <table className="table-auto w-full border-collapse border border-gray-400">
//           <thead>
//             <tr>
//               <th className="border border-gray-300 px-4 py-2">Name</th>
//               <th className="border border-gray-300 px-4 py-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {properties.map((property) => (
//               <tr key={property.id}>
//                 <td className="border border-gray-300 px-4 py-2">
//                   {isEditing === property.id ? (
//                     <input
//                       type="text"
//                       value={editName}
//                       onChange={(e) => setEditName(e.target.value)}
//                       className="border border-gray-300 px-2 py-1 rounded"
//                     />
//                   ) : (
//                     property.name
//                   )}
//                 </td>
//                 <td className="border border-gray-300 px-4 py-2">
//                   {isEditing === property.id ? (
//                     <button 
//                       onClick={() => handleSave(property.id)} 
//                       className="mr-2 px-2 py-1 bg-green-500 text-white rounded"
//                     >
//                       Save
//                     </button>
//                   ) : (
//                     <button 
//                       onClick={() => handleEditClick(property)} 
//                       className="mr-2 px-2 py-1 bg-yellow-500 text-white rounded"
//                     >
//                       Edit
//                     </button>
//                   )}
//                   <button 
//                     onClick={() => handleDelete(property.id)} 
//                     className="px-2 py-1 bg-red-500 text-white rounded"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </DashboardLayout>
//   );
// };

// export default PropertyList;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DashboardLayout from '../../DashboardLayout';
import { useNavigate } from 'react-router-dom';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(null); // To track which property is being edited
  const [editName, setEditName] = useState(""); // To hold the new name for the property
  const [successMessage, setSuccessMessage] = useState(""); // To hold success message
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from the Spring Boot API
    axios.get('http://localhost:8416/property/all')
      .then(response => {
        setProperties(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError("Error fetching data");
        setLoading(false);
      });
  }, []);

  const handleEditClick = (property) => {
    setIsEditing(property.id); // Set the property being edited
    setEditName(property.name); // Set the current name in the input
    setSuccessMessage(""); // Clear any previous success messages
  };

  const handleSave = (id) => {
    axios.put(`http://localhost:8416/property/edit/${id}`, { name: editName })
      .then(response => {
        // Update properties state with the new name
        setProperties(properties.map(property => 
          property.id === id ? { ...property, name: editName } : property
        ));
        setIsEditing(null); // Close the edit input
        setSuccessMessage("Successfully submitted"); // Show success message
        alert(response.data); // Show success message in alert
      })
      .catch(error => {
        console.error("There was an error updating the property!", error);
        alert('Failed to update property');
      });
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this property?')) {
      axios.delete(`http://localhost:8416/property/${id}`)
        .then(() => {
          setProperties(properties.filter(property => property.id !== id));
          alert('Property deleted successfully');
        })
        .catch(error => {
          console.error("There was an error deleting the property!", error);
          alert('Failed to delete property');
        });
    }
  };

  const handleCreate = () => {
    // Redirect to create property form
    navigate('/property/create');
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <DashboardLayout>
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-4">Property List</h1>

        {/* Success Message */}
        {successMessage && (
          <div className="mb-4 p-2 bg-green-200 text-green-800 border border-green-300 rounded">
            {successMessage}
          </div>
        )}
        
        {/* Create button */}
        <button 
          onClick={handleCreate} 
          className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
           Property List 
        </button>

        <table className="table-auto w-full border-collapse border border-gray-400">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {properties.map((property) => (
              <tr key={property.id}>
                <td className="border border-gray-300 px-4 py-2">
                  {isEditing === property.id ? (
                    <input
                      type="text"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      className="border border-gray-300 px-2 py-1 rounded"
                    />
                  ) : (
                    property.name
                  )}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {isEditing === property.id ? (
                    <button 
                      onClick={() => handleSave(property.id)} 
                      className="mr-2 px-2 py-1 bg-green-500 text-white rounded"
                    >
                      Save
                    </button>
                  ) : (
                    <button 
                      onClick={() => handleEditClick(property)} 
                      className="mr-2 px-2 py-1 bg-yellow-500 text-white rounded"
                    >
                      Edit
                    </button>
                  )}
                  <button 
                    onClick={() => handleDelete(property.id)} 
                    className="px-2 py-1 bg-red-500 text-white rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};

export default PropertyList;
