import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import './BannerCard.css';

// import required modules
import { EffectCube, Pagination } from 'swiper/modules';

const BannerCard = () => {
  return (
    <div className='banner-card'>
      <Swiper
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img 
            src="https://res.cloudinary.com/bookbub/image/upload/t_ci_ar_6:9_padded,f_auto,q_auto,dpr_1,c_scale,w_405/v1627437043/pro_pbid_611331.jpg" 
            alt="Book Cover"
            style={{ width: '400px', height: '400px' }} 
          />
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src="https://res.cloudinary.com/bookbub/image/upload/t_ci_ar_6:9_padded,f_auto,q_auto,dpr_1,c_scale,w_405/v1557422591/pro_pbid_4184.jpg" 
            alt="Book Cover"
            style={{ width: '400px', height: '400px' }} 
          />
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src="https://res.cloudinary.com/bookbub/image/upload/t_ci_ar_6:9_padded,f_auto,q_auto,dpr_1,c_scale,w_405/v1642717117/pro_pbid_4391809.jpg" 
            alt="Book Cover"
            style={{ width: '400px', height: '400px' }} 
          />
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src="https://res.cloudinary.com/bookbub/image/upload/t_ci_ar_6:9_padded,f_auto,q_auto,dpr_1,c_scale,w_405/v1681222028/pro_pbid_4921088.jpg" 
            alt="Book Cover"
            style={{ width: '400px', height: '400px' }} 
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default BannerCard;
