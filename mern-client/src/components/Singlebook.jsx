import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Card } from "flowbite-react";

const Singlebook = () => {
  const book = useLoaderData();

  if (!book) {
    return <div>Loading...</div>; // Fallback while data is being fetched
  }

  const { bookTitle, authorName, imageURL, category, bookDescription, bookPdfUrl } = book;

  return (
    <div className='mt-28 px-8 lg:px-24 text-center'>
    <h2 className="text-6xl font-bold mx-1 lg:mx-auto" >{bookTitle}</h2>

      <Card className="max-w-sm mx-auto text-center mt-6">
        <img src={imageURL} alt={bookTitle} className='w-full h-[300px]' />
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-4">
          Author: {authorName}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400 mt-2">
          Category: {category}
        </p>
        <a href={bookPdfUrl} target="_blank" rel="noopener noreferrer" className='text-blue-500 mt-4 inline-block'>Read PDF</a>
      </Card>
      
      <h3 className="text-4xl lg:text-2xl font-bold mt-4 px-[50px]">Description</h3>
      <p className='text-lg lg:text-2xl mt-2 lg:mt-4 px-[50px] m-2 lg:m-12'>{bookDescription}</p>
    </div>
  );
};

export default Singlebook;
