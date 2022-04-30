import styled, {css} from "styled-components";

const Styles = {}


Styles.WrapperModal = styled.div`
    position: fixed;
    min-height: 100vh;
    min-width: 100%;
    background-color: #1b1b1bbf;
    opacity: 0.8;
    z-index: 5;
    inset: 0;
`

Styles.WrapperNull = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`

Styles.Textnull = styled.p`
    font-size: 1.1rem;
    color: #141414;
`

Styles.WrapperGeneric = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    max-width: 400px;
    width: 100%;
    height: 100vh;
    z-index: 10;
    background-color: #fff;
    //box-shadow: 1px 1px 10px 3px #c2c0c0;
    z-index: 10;
`

Styles.Title = styled.h1`
    font-size: 1.1rem;
    font-family: inherit;
    font-weight: 500;
    color: #2c2c2c;
    margin: 15px 0;
    padding: 0 5px;
    text-align: center;
`

Styles.ClosedButton = styled.button`
    position: absolute;
    top: 6px;
    right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    cursor: pointer;
    border: none;
    background-color: transparent;
`

Styles.WrapperCart = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    overflow-y: scroll;
    max-height: 100vh;
    padding-bottom: 200px;
`

const lines = css`
    position: absolute;
    width: 90%;
    height: 1px;
    background-color:  #7774748a;
    left: 50%;
    transform: translateX(-50%);
`

Styles.CardCart = styled.div`
    position: relative;
    width: 100%;
    margin: 20px 0px;

    @media (max-width:405px){
        margin: 30px 2px;
    }

   &::before {
        content: " ";
        top: -24px;
        ${lines}

        @media (max-width: 404px) {
            top: -27px;
        }
    } 

    &::after {
        content: " ";
        bottom: -17px;
        ${lines}

        @media (max-width: 404px) {
            bottom: -34px;
        }
    }

    &:first-of-type {
        &::before {
        content: " ";
        top: -18px;
        ${lines}
    }
    }

`

Styles.WrapperTotal = styled.div`
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0 10px;
    flex-wrap: wrap;
    background-color: #fff;
    bottom: 0;
    z-index: 50;
    
    &::before {
        content: " ";
        position: absolute;
        top: 0;
        width: 100%;
        height: 1px;
        background-color:  #7774748a;
    }
`

Styles.GerericTotal = styled.div`
    display: flex;
    align-items: center;
`

Styles.TotalText = styled.p`
    font-size: 1.4rem;
    font-weight: 500;
`

Styles.Total = styled.span`
    font-size: 1.2rem;
    margin-left: 10px;
`

Styles.Button = styled.button`
    padding: 10px 15px;
    font-size: 1rem;
    color: #fff;
    border-radius: 5px;
    background-color: #39ab39f2;
    cursor: pointer;
    border: none;
    margin: 5px 0;
    display: flex;
    align-items: center;
`

export default Styles;