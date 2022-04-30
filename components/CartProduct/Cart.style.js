import styled from "styled-components";


const Styles = {}

Styles.Wrapper = styled.div`
    display: flex;
    padding: 5px;
    position: relative;
    border-radius: 10px;
    justify-content: space-between;
    align-items: center;

`

Styles.WrapperGereric = styled.div`
    display: flex;
    width: 100%;
    color: #2c2c2c;
    align-items: flex-start;

   /*  @media (max-width: 405px){
        flex-direction: column;
    } */
`

Styles.LinkProduct = styled.a`
    position: absolute;
    width: 83%;
    height: 69px;
    top: 0;
    cursor: pointer;
    z-index: 4;
`

Styles.WrapperImage = styled.div`
    padding: 5px;
    align-self: flex-start;
    display: flex;
    align-items: center;
    justify-content: center;
`

Styles.WrapperInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    min-height: 96px;
`

Styles.PTitle = styled.p`
    font-size: 1.1rem;
    font-weight: 400;
    margin-right: 0;
    overflow: hidden;

    @media (max-width: 404px){
        font-size: 1rem;
    }
` 

Styles.Price = styled.span`
    font-size: 1.2rem;
    font-weight: 400px;
    margin: 10px 0px;

    @media (max-width: 404px){
        font-size: 1.1rem;
    }
`

Styles.WrapperQtd = styled.div`
    position: absolute;
    bottom: 0;
    left: 86px;
    z-index: 20;
    display: flex;
    align-items: center;
    background: #F0F2F2;
    box-shadow: 0 2px 5px rgb(15 17 17 / 15%);
    box-sizing: 5px;
    padding: 5px;
   
   @media (max-width:404px) {
       bottom: -28px;
   }
`
Styles.Span = styled.span`
    margin: 0px 5px;
`

Styles.ButtonQtd = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3px;
    border: none;
    cursor: pointer;
`

Styles.WrapperButton = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);

    @media (max-width: 534px) {
        flex-direction: row;
        bottom: -52px;
        top: unset;
        right: unset;
        left: 1;
    }

    @media (max-width:404px) {
       bottom: -75px;
   }
`

Styles.Button = styled.button`
    font-size: 0.9rem;
    padding: 9px;
    border-radius: 5px;
    margin: 10px 0px;
    color: #fff;
    border: none;
    cursor: pointer;
    background-color: transparent;
`



export default Styles;