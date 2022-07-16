import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import async from "./async.jpg"
import "./styles.css";

// import required modules
import { FreeMode, Navigation, Pagination } from "swiper";

export default function Carousel() {
  return (
    <>
      <Swiper
        navigation={true}
        slidesPerView={"auto"}
        spaceBetween={60}
        freeMode={true}
        pagination={{
            type: "progressbar",
        }}
        modules={[FreeMode, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide> 
        <nav>
        <Link to="/about">
        <img src={async} alt="warning"/>
          About
        </Link>
        </nav>
        </SwiperSlide>
        <SwiperSlide> 
        <nav>
        <Link to="/Firebaseinstall">Firebaseinstall</Link>
        </nav>
        </SwiperSlide>
        <SwiperSlide> 
        <nav>
        <Link to="/Drawertoapp">Drawertoapp</Link>
        </nav>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide> 
        <nav>
        <Link to="/Asyncstoragewarning">Asyncstoragewarning</Link>
        </nav>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
