import styled, { createGlobalStyle } from "styled-components";

const SwiperGlobal = createGlobalStyle`

    div {

        &.swiper-button-prev, &.swiper-button-next {
            background-color:#b7b0b070;
            width: 40px;
            z-index: 5;
            border-radius: 5px;
            visibility: hidden;

            @media (max-width: 700px){
                visibility: visible;
            }
        }

        &.swiper-button-prev{
            left: 0;
        }

        &.swiper-button-next {
            right: 0;
        }

        &.swiper-button-prev::after , &.swiper-button-next::after {
            color: #000;
            font-size: 2rem;
        }

        &.swiper-button-disabled {
            display: none;
        }
    }
`;


export default SwiperGlobal;