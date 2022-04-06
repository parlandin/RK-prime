import Styles from "./Carousel.style";
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css/pagination";

import Product1 from "../../public/images/product1.jpg"
import Product2 from "../../public/images/product2.jpg"
import CardProduto from "../CardProduct";

const CarouselProducts = () => {
    return (
        <Swiper
        slidesPerView={2}
        spaceBetween={5}
        pagination={{
            clickable: true,
          }}
        breakpoints={{
            370:{
                slidesPerView: 2,
                spaceBetween: 5,
            },
            420:{
                slidesPerView: 3,
                spaceBetween: 10,
            },
            600: {
                slidesPerView: 3,
                spaceBetween: 5,
            },
            640: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            789: {
                slidesPerView: 4,
                spaceBetween: 10,
            },
        }}
        className="mySwiper"
        >
            <SwiperSlide>
               <CardProduto img={Product1} 
               title="Brinco cruz styles new limitado + par de anel dbc"/>
            </SwiperSlide>

            <SwiperSlide>
                <CardProduto img={Product2}
                 title="Brinco cruz styles new limitado + par de  new limitado
                 new limitado" />
            </SwiperSlide>

            <SwiperSlide>
               <CardProduto img={Product1} title="Anel Minimalista Com Pulseira" />
            </SwiperSlide>

            <SwiperSlide>
                <CardProduto img={Product2} title="Conjunto de joias de metal texturizado 5 peças" />
            </SwiperSlide>

            <SwiperSlide>
               <CardProduto img={Product1} />
            </SwiperSlide>

            <SwiperSlide>
                <CardProduto img={Product2} />
            </SwiperSlide>

            <SwiperSlide>
               <CardProduto img={Product1} />
            </SwiperSlide>

            <SwiperSlide>
                <CardProduto img={Product2} />
            </SwiperSlide>

        </Swiper>
    )
}

export default CarouselProducts;