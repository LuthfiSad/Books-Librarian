// src/components/DonationSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import donation1 from "@/core/assets/coba.png";
import useResponsive from "@/features/global/hooks/useResponsive";

import slider from "@/core/utils/slider.json"

const DonationSlider = () => {
  const { isTablet } = useResponsive();
  return (
    <div className="py-20">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={isTablet ? 2 : 3}
        navigation
        pagination={{ clickable: true, el: ".swiper-pagination" }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="py-5"
      >
        {slider.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col mb-10 items-center">
              <img
                src={donation1}
                alt="Dapat dipercaya"
                className="rounded-lg w-[200px] h-[200px] object-cover mb-4"
              />
              <h3 className="text-xl text-center font-bold">{item.title}</h3>
              <p className="text-center">{item.description}</p>
            </div>
          </SwiperSlide>
        ))}

        <div className="swiper-pagination mb-0"></div>
        {/* Tambahkan SwiperSlide tambahan jika diperlukan */}
      </Swiper>
    </div>
  );
};

export default DonationSlider;
