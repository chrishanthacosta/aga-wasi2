"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import React from 'react'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import Image from "next/image";

const gallery = [{ id: 1, imgUrl: "/aw-1.jpg" }, { id: 2, imgUrl: "/aw-2.jpg" }]


const Carousel = () => {
    return (
        <div className="container mx-auto h-unit-9xl">
      <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={550}
          slidesPerView={1}
          navigation
          // pagination={{ type:"fraction" }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          className="container mx-auto h-full"
        //   className="h-max flex justify-center items-center"
          autoplay={{ delay: 2000 }}
          speed={6000}
        //   width={1000}
                // height={665}
                centeredSlides={true}
      >

          {gallery?.map((item) => (
              <SwiperSlide
                  key={`product-gallery-${item.id}`}
                  className="container mx-auto"
              >
                  <Image
                      src={item.imgUrl}
                      alt={`Product gallery ${item.id}`}
                      width={1000}
                      height={665}
                      className="block w-full h-full object-fit"
                  />
              </SwiperSlide>
          ))}
          {/* // <SwiperSlide>Slide 1</SwiperSlide>
              // <SwiperSlide>Slide 2</SwiperSlide>
              // <SwiperSlide>Slide 3</SwiperSlide>
              // <SwiperSlide>Slide 4</SwiperSlide> */}

            </Swiper>
            </div>
  )
}

export default Carousel