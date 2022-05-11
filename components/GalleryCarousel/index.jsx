import React, { useState, useRef } from "react";
import Image from "next/image";
import Styles from "./gallery.style";


import Arrrow_Left from  "../../public/images/arrow-left.svg"
import Arrrow_Right from  "../../public/images/arrow-right.svg"




const GalleryCarousel = ({arrayImages, description}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const length = arrayImages.length

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
                {arrayImages.map((image, index) => {
                    return (
                        <Styles.CurrentImage className={index == currentSlide ? "CurrentImage-active" : ""} key={index}>
                            {index == currentSlide && <Image src={image} width="380" height="380"  alt={description} />}
                        </Styles.CurrentImage>
                    )
                })}
                
                <Styles.Arrow className="left" onClick={prevSlide} type="button" title="button left"> 
                    <Image src={Arrrow_Left} alt=""/>
                </Styles.Arrow>

                <Styles.Arrow className="right" onClick={nextSlide} type="button" title="button left">
                    <Image src={Arrrow_Right} alt=""/>
                </Styles.Arrow>
            </Styles.WrapperFeatured>
            
            
            <Styles.WrapperGallery>
                {arrayImages.map((image, index) => {
                    return (
                        <Styles.OptionImage 
                        type="button" 
                        key={index} 
                        className={index == currentSlide ? "selected" : ""}
                        onMouseEnter={() => selectCurrent(index) }>
                            <Image src={image} alt={description} width="60" height="60"/>
                        </Styles.OptionImage>
                    )
                })}
            </Styles.WrapperGallery>
        </Styles.Wrapper>
    )
}

export default GalleryCarousel;