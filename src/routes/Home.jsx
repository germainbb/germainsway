// import React from 'react'
// import { Link } from "react-router-dom";

// export default function Home() {
//   return (
//     <>
//       <main>
//         <h2>Welcome to the homepage!</h2>
//         <p>You can do this, I believe in you.</p>
//       </main>
//       <nav>
//         <Link to="/about">About</Link>
//         <Link to="/Asyncstoragewarning">Asyncstoragewarning</Link>
//         <Link to="/Drawertoapp">Drawertoapp</Link>
//         <Link to="/Firebaseinstall">Firebaseinstall</Link>
//       </nav>
//     </>
//   )
// }
//VERTICAL CAROUSEL
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../homestyles.css";

// import required modules
import { Mousewheel, Scrollbar} from "swiper";

export default function Home() {
  return (
    <>
      <Swiper
        scrollbar={true}
        mousewheel={true}
        direction={"vertical"}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[ Scrollbar, Mousewheel]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
