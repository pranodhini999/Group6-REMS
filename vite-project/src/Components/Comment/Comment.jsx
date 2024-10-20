import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; // For making API calls
import DashboardLayout from '../Sidebar/DashboardLayout';

const Comment = () => {
  const { id } = useParams();
  
  const [comments, setComments] = useState([]); // State for storing fetched comments
  const [currentPage, setCurrentPage] = useState(1); // State for the current page
  const commentsPerPage = 6; // Number of comments to display per page

  // Fetch comments when the component loads
  useEffect(() => {
    axios.get('http://localhost:8416/comments')
      .then((response) => {
        setComments(response.data); // Store the fetched comments in state
      })
      .catch((error) => {
        console.error('Error fetching comments:', error);
      });
  }, []);

  // Calculate the total number of pages
  const totalPages = Math.ceil(comments.length / commentsPerPage);

  // Get current comments based on the current page
  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = comments.slice(indexOfFirstComment, indexOfLastComment);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <DashboardLayout>
      <div className=" bg-gray-100">
        <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          {/* Property details and EMI calculator */}
          
          {/* Comments Section */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Comments</h3>
            {currentComments.length > 0 ? (
              <ul className="space-y-4">
                {currentComments.map((comment) => (
                  <li key={comment.id} className="p-4 border border-gray-300 rounded-md">
                    {comment.comment}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No comments available.</p>
            )}
            
            {/* Pagination Controls */}
            <div className="flex justify-center mt-10">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-4 py-2 bg-blue-500 text-white rounded-md ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                Previous
              </button>
              <span className="mx-4">{`Page ${currentPage} of ${totalPages}`}</span>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 bg-blue-500 text-white rounded-md ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Comment;
