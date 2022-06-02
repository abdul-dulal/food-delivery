import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import slider1 from "../../assets/images/dinner/dinner1.png";
import slider2 from "../../assets/images/dinner/dinner2.png";
import slider3 from "../../assets/images/dinner/dinner3.png";
import slider4 from "../../assets/images/dinner/dinner4.png";
const Slider = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: false }}
    >
      <SwiperSlide>
        <div className="grid grid-cols-1 md:grid-cols-2 md:items-center lg:grid-cols-2 px-14 gap-6 bg-[#FCF4E0] sm:h-screen">
          <div className="flex items-center">
            <h1 className=" lg:text-5xl mr-2 uppercase md:text-3xl sm: ml-8 mt-2 text-2xl lg:leading-snug">
              <span className="text-[#ff6347]  lg:text-5xl md:text-3xl  sm:text-5xl sm:text-center font-bold">
                Read-Onion!
              </span>
              you are in the right place
            </h1>
          </div>
          <div>
            <img src={slider1} alt="" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="grid grid-cols-1 md:grid-cols-2 md:items-center lg:grid-cols-2 px-14 gap-6 bg-[#FCF4E0] sm:h-screen">
          <div className="flex items-center">
            <h1 className=" lg:text-5xl mr-2 uppercase md:text-3xl sm: ml-8 mt-2 text-2xl lg:leading-snug">
              <span className="text-[#ff6347] text-3xl lg:text-5xl sm:text-5xl sm:text-center font-bold">
                Read-Onion!
              </span>
              you are in the right place
            </h1>
          </div>
          <div>
            <img src={slider2} alt="" />
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="grid grid-cols-1 md:grid-cols-2 md:items-center lg:grid-cols-2 px-14 gap-6 bg-[#FCF4E0] sm:h-screen">
          <div className="flex items-center">
            <h1 className=" lg:text-5xl mr-2 uppercase md:text-3xl sm: ml-8 mt-2 text-2xl lg:leading-snug">
              <span className="text-[#ff6347] text-3xl lg:text-5xl sm:text-5xl sm:text-center font-bold">
                Read-Onion!
              </span>
              you are in the right place
            </h1>
          </div>
          <div>
            <img src={slider3} alt="" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="grid grid-cols-1 md:grid-cols-2 md:items-center lg:grid-cols-2 px-14 gap-6 bg-[#FCF4E0] sm:h-screen">
          <div className="flex items-center">
            <h1 className=" lg:text-5xl mr-2 uppercase md:text-3xl sm: ml-8 mt-2 text-2xl lg:leading-snug">
              <span className="text-[#ff6347] text-3xl lg:text-5xl sm:text-5xl sm:text-center font-bold">
                Read-Onion!
              </span>
              you are in the right place
            </h1>
          </div>
          <div>
            <img src={slider4} alt="" />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
export default Slider;
