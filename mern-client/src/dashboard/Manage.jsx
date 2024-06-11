import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Edit from './Edit'; // Import the Edit component

const Manage = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetch("https://book-api-zeta.vercel.app/all-books")
      .then(res => res.json())
      .then(data => setAllBooks(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleDelete = (id) => {
    fetch(`https://book-api-zeta.vercel.app/book/${id}`, {
      method: "DELETE",
    })
    .then(res => res.json())
    .then(data => {
      alert("Book is deleted successfully!!");
      // Update allBooks state by removing the deleted book
      setAllBooks(prevBooks => prevBooks.filter(book => book._id !== id));
    })
    .catch(error => console.error('Error deleting book:', error));
  };

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Dashboard</h2>
      
      <table className="lg:w-[1180px] bg-white dark:bg-gray-800">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-700 text-left">Serial No.</th>
            <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-700 text-left">Book name</th>
            <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-700 text-left">Author</th>
            <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-700 text-left">Category</th>
            <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-700 text-left">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {allBooks.map((book, index) => (
            <tr key={book._id} className="bg-white dark:bg-gray-800">
              <td className="py-2 px-4 text-left">{index + 1}</td>
              <td className="py-2 px-4 whitespace-nowrap font-medium text-gray-900 dark:text-white text-left">
                {book.bookTitle}
              </td>
              <td className="py-2 px-4 text-left">{book.authorName}</td>
              <td className="py-2 px-4 text-left">{book.category}</td>
              <td className="py-2 px-4 flex text-left">
                {/* Link to the Edit component */}
                <Link to={`/admin/dashboard/edit/${book._id}`} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5">
                  Edit
                </Link>
                <div className='px-4 font-semibold text-red-600 cursor-pointer hover:text-red-700 hover:underline' onClick={() => handleDelete(book._id)}>
                  Delete
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Manage;
