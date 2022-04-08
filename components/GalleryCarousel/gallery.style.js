import styled from "styled-components";


const Styles = {}

Styles.Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 400px;
    width: 100%;
`
Styles.WrapperFeatured = styled.div`
    width: 100%;
    max-height: 400px;
    min-height: 400px;
    position: relative;
    margin-bottom: 10px;
    overflow: hidden;
    display: flex;
`


Styles.CurrentImage = styled.div`
    min-width: 100%;
    min-height: 100%;
    opacity: 0;
    transition-duration: 600ms ease; 
    order: 2;

    &.CurrentImage-active {
        order: 1;
        opacity: 1;
        transition-duration: 600ms;
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
    height: 100%;
    max-width: 68px;
    width: 100%;
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
        border: 2px solid #000;
    }
`


export default Styles