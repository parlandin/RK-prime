import React, { useState, useRef } from "react";
import Image from "next/image";
import Styles from "./gallery.style";
import { dataImages } from "./dataImage";


import Arrrow_Left from  "../../public/images/arrow-left.svg"
import Arrrow_Right from  "../../public/images/arrow-right.svg"
import Gallery2 from '../../public/images/Gallery2.jpg'



const GalleryCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const length = dataImages.length

    const nextSlide = () => {
        setCurrentSlide(currentSlide === length - 1  ? 0 : currentSlide + 1)
    }
    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0  ? length -1 : currentSlide -1)
    }

    const selectCurrent = index => {
        setCurrentSlide(index)
    }

    return (
        <Styles.Wrapper>
            <Styles.WrapperFeatured >
                {dataImages.map((date, index) => {
                    return (
                        <Styles.CurrentImage className={index == currentSlide ? "CurrentImage-active" : ""} key={index}>
                            {index == currentSlide && <Image src={date.image} alt="" />}
                        </Styles.CurrentImage>
                    )
                })}
                
                <Styles.Arrow className="left" onClick={prevSlide}> 
                    <Image src={Arrrow_Left} alt=""/>
                </Styles.Arrow>

                <Styles.Arrow className="right" onClick={nextSlide}>
                    <Image src={Arrrow_Right} alt=""/>
                </Styles.Arrow>
            </Styles.WrapperFeatured>
            
            
            <Styles.WrapperGallery>
                {dataImages.map((data, index) => {
                    return (
                        <Styles.OptionImage 
                        type="button" 
                        key={index} 
                        className={index == currentSlide ? "selected" : ""}
                        onClick={() => selectCurrent(index) }>
                            <Image src={data.image} alt="" />
                        </Styles.OptionImage>
                    )
                })}
            </Styles.WrapperGallery>
        </Styles.Wrapper>
    )
}

export default GalleryCarousel;