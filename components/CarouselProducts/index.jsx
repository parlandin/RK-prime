import Styles from "./Carousel.style";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import CardProduct from "../CardProduct";

import "swiper/css/navigation";



const CarouselProducts = ({arrayProducts, categorys}) => {

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
                {arrayProducts.length >= 0 && arrayProducts.map((product) => {
                    return (
                        <SwiperSlide key={product._id}>
                            <Styles.WrapperCard>
                                <CardProduct img={product.imagens[0]} 
                                    title={product.nome}  
                                    price={product.preco}
                                    id={product._id}
                                    desc={product.descricao}/>
                            </Styles.WrapperCard>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </Styles.WrapperGereric>
    )
}

export default CarouselProducts;