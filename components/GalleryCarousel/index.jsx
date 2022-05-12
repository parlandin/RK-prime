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
                            {index == currentSlide && <Image src={image} width="340" height="340" layout="responsive"  alt={description} />}
                        </Styles.CurrentImage>
                    )
                })}
                
                <Styles.Arrow className="left" onClick={prevSlide} type="button" title="button left"> 
                    <Styles.DivImage>
                        <Image src={Arrrow_Left} alt="botão imagem anterior" width="32" height="32" layout="responsive"/>
                    </Styles.DivImage>
                </Styles.Arrow>

                <Styles.Arrow className="right" onClick={nextSlide} type="button" title="button left">
                    <Styles.DivImage>
                        <Image src={Arrrow_Right} alt="botão proxima imagem" width="32" height="32" layout="responsive"/>
                    </Styles.DivImage>
                    
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
                            <Styles.DivImage>
                                <Image src={image} alt={description} width="60" height="60" layout="responsive" />
                            </Styles.DivImage>
                        </Styles.OptionImage>
                    )
                })}
            </Styles.WrapperGallery>
        </Styles.Wrapper>
    )
}

export default GalleryCarousel;