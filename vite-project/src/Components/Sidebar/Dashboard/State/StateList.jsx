import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Dashboard from '../Dashboard';
import DashboardLayout from '../../DashboardLayout';

const StateList = () => {
    const [states, setStates] = useState([]);
    const [editedState, setEditedState] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    
    // Fetch states from the API
    useEffect(() => {
        fetchStates();
    }, []);

    const fetchStates = async () => {
        try {
            const response = await axios.get('http://localhost:8416/api/state');
            setStates(response.data);
        } catch (error) {
            console.error('Error fetching states:', error);
        }
    };

    const handleDelete = async (code) => {
        try {
            await axios.delete(`http://localhost:8416/api/state/${code}`);
            fetchStates(); // Refresh the list after deletion
        } catch (error) {
            console.error('Error deleting state:', error);
        }
    };

    const handleEdit = (state) => {
        setEditedState(state);
        setIsEditing(true);
    };

    const handleUpdate = async () => {
        if (!editedState) return;
        try {
            await axios.put(`http://localhost:8416/api/state/${editedState.code}`, editedState);
            fetchStates(); // Refresh the list after updating
            setEditedState(null);
            setIsEditing(false);
        } catch (error) {
            console.error('Error updating state:', error);
        }
    };

    return (
      <DashboardLayout>
          <div>
            <h1 className="text-2xl font-bold mb-4">State List</h1>
            <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                    <tr>
                        <th className="border border-gray-300 p-2">Name</th>
                        {/* <th className="border border-gray-300 p-2">Code</th> */}
                        <th className="border border-gray-300 p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {states.map((state) => (
                        <tr key={state.code}>
                            <td className="border border-gray-300 p-2">{state.name}</td>
                            {/* <td className="border border-gray-300 p-2">{state.code}</td> */}
                            <td className="border border-gray-300 p-2">
                                <button
                                    onClick={() => handleEdit(state)}
                                    className="bg-blue-500 text-white px-4 py-2 mr-2 rounded"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(state.code)}
                                    className="bg-red-500 text-white px-4 py-2 rounded"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {isEditing && (
                <div className="mt-4">
                    <h2 className="text-xl font-semibold">Edit State</h2>
                    <input
                        type="text"
                        value={editedState.name}
                        onChange={(e) => setEditedState({ ...editedState, name: e.target.value })}
                        placeholder="State Name"
                        className="border p-2 mr-2"
                    />
                    {/* <input
                        type="text"
                        value={editedState.code}
                        readOnly
                        className="border p-2 mr-2"
                    /> */}
                    <button
                        onClick={handleUpdate}
                        className="bg-green-500 text-white px-4 py-2 rounded"
                    >
                        Update
                    </button>
                </div>
            )}
        </div>
      </DashboardLayout>
    );
};

export default StateList;
