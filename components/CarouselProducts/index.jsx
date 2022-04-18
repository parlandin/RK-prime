import Styles from "./Carousel.style";
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper";

import "swiper/css/navigation";

import Product1 from "../../public/images/product1.jpg"
import Product2 from "../../public/images/product2.jpg"
import CardProduct from "../CardProduct";

const CarouselProducts = () => {
    return (
        <Styles.WrapperGereric>
            <Swiper
            slidesPerView={2}
            spaceBetween={140}
            breakpoints={{
                100: {
                    slidesPerView: "1",
                    centeredSlides: true,
                },
                273: {
                    slidesPerView: '1',
                    spaceBetween: 200,
                    centeredSlides: true,
                },
                290: {
                    slidesPerView: '2',
                    spaceBetween: 120,
                    centeredSlides: false,
                },
                370:{
                    slidesPerView: '2',
                    spaceBetween: 50,
                },
                420:{
                    slidesPerView: '3',
                    spaceBetween: 150,
                },
                580: {
                    slidesPerView: '3',
                    spaceBetween: 5,
                },
                640: {
                    slidesPerView: '3',
                    spaceBetween: 10,
                },
                789: {
                    slidesPerView: '4',
                    spaceBetween: 20,
                },
                940: {
                    slidesPerView: '5',
                    spaceBetween: 20,
                },
            }}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
            >
                <SwiperSlide>
                <CardProduct img={Product1} 
                title="Brinco cruz styles new limitado + par de anel dbc"  
                price={"100"}/>
                </SwiperSlide>

                <SwiperSlide>
                    <CardProduct img={Product2}
                    title="Brinco cruz styles new limitado + par de  new limitado
                    new limitado"
                    price={"100"} />
                </SwiperSlide>

                <SwiperSlide>
                <CardProduct img={Product1} title="Anel Minimalista Com Pulseira" price={"100"}/>
                </SwiperSlide>

                <SwiperSlide>
                    <CardProduct img={Product2} title="Conjunto de joias de metal texturizado 5 peças" 
                    price={"100"}/>
                </SwiperSlide>

                <SwiperSlide>
                <CardProduct img={Product1} price={"100"}/>
                </SwiperSlide>

                <SwiperSlide>
                    <CardProduct img={Product2} price={"100"}/>
                </SwiperSlide>

                <SwiperSlide>
                <CardProduct img={Product1} price={"100"}/>
                </SwiperSlide>

                <SwiperSlide>
                    <CardProduct img={Product2} price={"100"}/>
                </SwiperSlide>

            </Swiper>
        </Styles.WrapperGereric>
    )
}

export default CarouselProducts;