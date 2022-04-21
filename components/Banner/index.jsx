import Styles from "./banner.style"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper";

import "swiper/css/pagination";


import Image from "next/image"
import BannerF2 from "../../public/images/final-exemplo2.jpg"

const Banner = () => {
    return (
        <Styles.Wrapper>
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
                    <Image src={BannerF2} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={BannerF2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={BannerF2} alt="" />
                </SwiperSlide>
            </Swiper>
        </Styles.Wrapper>
    )
}

export default Banner;