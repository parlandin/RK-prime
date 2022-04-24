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
            breakpoints={{
                100: {
                    slidesPerView: "auto",
                    centeredSlides: true,
                    spaceBetween: 10,
                },
                290: {
                    centeredSlides: false,
                    lidesPerView: '2',
                    spaceBetween: 150,
                },
                330: {
                    lidesPerView: '2',
                    spaceBetween: 140,
                    centeredSlides: false,
                },
                370:{
                    slidesPerView: '2',
                    spaceBetween: 90,
                },
               
                425: {
                    slidesPerView: '2',
                    spaceBetween: 70,
                },
                484: {
                    slidesPerView: '2',
                    spaceBetween: 20,
                },
                514 :{
                    slidesPerView: '3',
                    spaceBetween: 180,
                },
                580: {
                    slidesPerView: '3',
                    spaceBetween: 100,
                },
                680: {
                    slidesPerView: '3',
                    spaceBetween: 20,
                },
                714: {
                    slidesPerView: '3',
                    spaceBetween: 50,
                },
                789: {
                    slidesPerView: '4',
                    spaceBetween: 110,
                },
                890: {
                    slidesPerView: '4',
                    spaceBetween: 30,
                },
                940: {
                    slidesPerView: '4',
                    spaceBetween: 50,
                },
            }}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
            >
                <SwiperSlide>
                    <Styles.WrapperCard>
                        <CardProduct img={Product1} 
                        title="Brinco cruz styles new limitado + par de anel dbc"  
                        price={"100"}/>
                    </Styles.WrapperCard>
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