import styled from "styled-components";

const Styles = {}

Styles.Wrapper = styled.section`
    position: absolute;
    top: 0px;
    right: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 400px;
    height: 75vh;
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
    box-shadow: 1px 1px 10px 3px #c2c0c0;
`

Styles.Title = styled.h1`
    font-size: 1.1rem;
    font-family: inherit;
    font-weight: 500;
    color: #2c2c2c;
    margin: 20px 0;
    padding: 0 5px;
    text-align: center;
`

Styles.ClosedButton = styled.button`
    position: absolute;
    top: 15px;
    right: 5px;
`

Styles.WrapperCart = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    overflow-y: scroll;
    max-height: 100vh;
    padding-bottom: 100px;
`

Styles.CardCart = styled.div`
    position: relative;
    margin-bottom: 1px solid #2c2c2c;
    width: 100%;
    margin: 20px;

    @media (max-width:405px){
        margin: 30px 2px;
    }

   /*  &::before {
        content: " ";
        position: absolute;
        bottom: -8px;
        width: 100%;
        height: 1px;
        background-color:  #7774748a;
        left: -23px;
        //left: 50%;
        //transform: translateX(-52%);
    } */

    &:first-of-type {
        &::after {
            content: " ";
            position: absolute;
            top: -14px;
            width: 100%;
            height: 1px;
            background-color: #7774748a;
            left: -23px;
        }
    }
`

Styles.WrapperTotal = styled.div`
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 0 10px;
    flex-wrap: wrap;
    background-color: #fff;
    bottom: 0;
    
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
    font-size: 1.2rem;
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
    background-color: #5aaa5a;
    cursor: pointer;
    border: none;
    margin: 5px 0;
`

export default Styles;