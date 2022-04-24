import styled from "styled-components";


const Styles = {}

Styles.Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 400px;
    width: 100%;
    padding: 10px;
    border-radius: 5px;
`
Styles.WrapperFeatured = styled.div`
    width: 100%;
    max-height: 332px;
    min-height: 332px;
    position: relative;
    margin-bottom: 10px;
    overflow: hidden;
    display: flex;
    border-bottom: 1px solid #7774748a;

    @media (max-width: 360px) {
        min-height: 200px;
    }
`


Styles.CurrentImage = styled.div`
    opacity: 0;
    transition-duration: 700ms ease; 

    &.CurrentImage-active {
        width: 100%;
        height: 100%;
        opacity: 1;
        transition-duration: 700ms;
    }
`

Styles.Arrow = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 4px;
    background-color: #ffffff59;
    cursor: pointer;
    visibility: hidden;
    transition: visibility 200ms ease-in;

    &.left {
        left: 0;
    }
    &.right {
        right: 0;
    }

    ${Styles.WrapperFeatured}:hover & {
        visibility: visible;
    }
`


Styles.WrapperGallery = styled.div`
    display: flex;
    width: 100%;
    max-height: 68px;
    height: 100%;
    justify-content: flex-start;
`

Styles.OptionImage = styled.button`
    border: 1px solid #000;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 68px;
    width: 60px;
    height: 60px;
    overflow: hidden;
    margin-right: 15px;
    cursor: pointer;
    transition: opacity 300ms ease;

    &:hover {
        border:2px solid #168494;
    }

    &:last-of-type {
        margin-right: 0;
    }

    &.selected  img {
        opacity: 0.2;
        transition: 300ms;
    }
    &.selected {
        border: 1px solid #7774748a;
    }
`


export default Styles