import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import './BookCards.css';
import { Pagination } from 'swiper/modules';
import { FaCrown } from "react-icons/fa6";
const BookCards = ({ headline, books }) => {
  if (!books || books.length === 0) {
    return <div>No books available</div>; // Add a fallback if books are undefined or empty
  }

  return (
    <div className='book-cards my-16 px-4 lg:px-24'>
      <h2 className='text-5xl text-center font-bold text-black my-5'>{headline}</h2>
      <div className='mt-12'>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{ clickable: true }}
          breakpoints={{
            '@0.00': { slidesPerView: 1, spaceBetween: 10 },
            '@0.75': { slidesPerView: 2, spaceBetween: 20 },
            '@1.00': { slidesPerView: 3, spaceBetween: 40 },
            '@1.50': { slidesPerView: 4, spaceBetween: 50 },
          }}
          modules={[Pagination]}
          className="mySwiper w-full h-full"
        >
          {books.map((book) => (
            <SwiperSlide key={book._id}>
              <Link to={`/book/${book._id}`}>
                <div className='relative'>
                <div><img src={book.imageURL} alt={book.bookTitle} /></div>
                <div  className='absolute top-3 right-3 bg-blue-600 hover:bg-black p-2 rounded'>< FaCrown className='w-4 h-4 text-white'/></div>
                <div><h3>{book.bookTitle}</h3></div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default BookCards;
