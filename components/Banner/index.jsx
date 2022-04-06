import Styles from "./banner.style"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper";

import "swiper/css/pagination";


import Image from "next/image"
import IBanner1 from "../../public/images/banner1.png"
import IBanner2 from "../../public/images/banner2.png"
import IBanner3 from "../../public/images/banner3.png"

const Banner = () => {
    return (
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        >
            <SwiperSlide>
                <Image src={IBanner1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <Image src={IBanner2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <Image src={IBanner1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <Image src={IBanner3} alt="" />
            </SwiperSlide>
        </Swiper>
    )
}

export default Banner;