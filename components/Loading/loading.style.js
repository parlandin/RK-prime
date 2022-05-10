import styled, {keyframes} from "styled-components";


const ldsDefault = keyframes`
    0%, 20%, 80%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.5);
    }
`

const Styles = {}

Styles.WrapperLoading = styled.div``

Styles.Loading = styled.div`
    display: inline-block;
    position: relative;
    width: 40px;
    height: 40px;

    & div {
        position: absolute;
        width: 3px;
        height: 3px;
        background: #000;
        border-radius: 50%;
        animation: ${ldsDefault} 1.2s linear infinite;
    }

    & div:nth-child(1) {
        animation-delay: 0s;
        top: 18px;
        left: 33px;
    }

    & div:nth-child(2) {
        animation-delay: -0.1s;
        top: 11px;
        left: 31px;
    }

    & div:nth-child(3) {
        animation-delay: -0.2s;
        top: 5px;
        left: 26px;
    }

    & div:nth-child(4) {
        animation-delay: -0.3s;
        top: 3px;
        left: 18px;
    }

    & div:nth-child(5) {
        animation-delay: -0.4s;
        top: 5px;
        left: 11px;
    }

    & div:nth-child(6) {
        animation-delay: -0.5s;
        top: 11px;
        left: 5px;
    }

    & div:nth-child(7) {
        animation-delay: -0.6s;
        top: 18px;
        left: 4px;
    }

    & div:nth-child(8) {
        animation-delay: -0.7s;
        top: 26px;
        left: 5px;
    }

    & div:nth-child(9) {
        animation-delay: -0.8s;
        top: 31px;
        left: 11px;
    }

    & div:nth-child(10) {
        animation-delay: -0.9s;
        top: 33px;
        left: 18px;
    }

    & div:nth-child(11) {
        animation-delay: -1s;
        top: 31px;
        left: 26px;
    }
    
    & div:nth-child(12) {
        animation-delay: -1.1s;
        top: 26px;
        left: 31px;
    }
`

export default Styles;

