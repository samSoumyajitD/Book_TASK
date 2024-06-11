import React, { useState, useEffect } from 'react';
import { Button, Label, Textarea } from "flowbite-react";
import { useLoaderData, useParams } from 'react-router-dom';

const Edit = () => {
  const { id } = useParams();
  const { bookTitle, authorName, imageURL, bookDescription, bookPdfUrl,category } = useLoaderData();
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mystery",
    "Thriller",
    "Romance",
    "Science Fiction",
    "Fantasy",
    "Historical Fiction",
    "Biography",
    "Autobiography",
    "Memoir",
    "Self-Help",
    "Cookbook",
    "Travel",
    "History",
    "Philosophy",
    "Poetry",
    "Art",
    "Science",
    "Psychology",
    "Kids"
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);

  const handleChangeSelect = (event) => {
    setSelectedBookCategory(event.target.value);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const updatedBook = {
      bookTitle: form.bookTitle.value,
      authorName: form.authorName.value,
      imageURL: form.imageURL.value,
      category: form.categoryName.value,
      bookDescription: form.bookDescription.value,
      bookPdfUrl: form.bookPdfUrl.value
    };

    fetch(`https://book-api-zeta.vercel.app/book/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedBook)
    })
      .then(res => res.json())
      .then(data => {
        alert("Book is updated successfully!!!");
      })
      .catch(error => {
        console.error('Error updating book:', error);
      });
  };
 const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://book-api-zeta.vercel.app/all-books")
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setBooks(data);
      })
      .catch(error => {
        console.error("Error fetching books:", error);
      });
  }, []);

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Update Book</h2>
      <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        <div className='flex gap-8'>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <input
              id="bookTitle"
              name="bookTitle"
              type="text"
              placeholder="Book name"
              required
              className="w-full h-10 px-2 rounded border border-gray-300"
              defaultValue={bookTitle}
            />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author name" />
            </div>
            <input
              id="authorName"
              name="authorName"
              type="text"
              placeholder="Author Name"
              required
              className="w-full h-10 px-2 rounded border border-gray-300"
              defaultValue={authorName}
            />
          </div>
        </div>
        <div className='flex gap-8'>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image URL" />
            </div>
            <input
              id="imageURL"
              name="imageURL"
              type="text"
              placeholder="Book Image URL"
              required
              className="w-full h-10 px-2 rounded border border-gray-300"
              defaultValue={imageURL}
            />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            <select
              id="inputState"
              name="categoryName"
              className="w-full h-10 px-2 rounded border border-gray-300"
              value={selectedBookCategory}
              onChange={handleChangeSelect}
            >
              {bookCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <div className='mb-2 block'>
            <Label htmlFor='bookDescription' value='Book Description' />
          </div>
          <Textarea
            id='bookDescription'
            rows={6}
            name='bookDescription'
            placeholder='Add Book Description'
            className="w-full h-10 p-2 rounded border border-gray-300"
            required
            defaultValue={bookDescription}
          />
        </div>
        <div>
          <div className='mb-2 block'>
            <Label htmlFor='bookPdfUrl' value='Book Pdf Url' />
          </div>
          <input
            id='bookPdfUrl'
            name='bookPdfUrl'
            placeholder='Book Pdf Url'
            className="w-full h-10 p-2 rounded border border-gray-300"
            required
            type='text'
            defaultValue={bookPdfUrl}
          />
        </div>
        <Button type="submit" className='mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded w-full flex justify-center'>
          Update
        </Button>
      </form>
    </div>
  );
};

export default Edit;
