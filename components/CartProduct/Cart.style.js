import styled from "styled-components";


const Styles = {}

Styles.Wrapper = styled.div`
    display: flex;
    padding: 5px;
    position: relative;
    border-radius: 10px;
    justify-content: space-between;
    align-items: center;
    opacity: ${({selected}) => selected ? 1 : 0.5};

`

Styles.WrapperGereric = styled.div`
    display: flex;
    width: 100%;
    color: #2c2c2c;
    align-items: flex-start;
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
    word-wrap: break-word;

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
   
   @media (max-width:404px) {
       bottom: -28px;
   }
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

Styles.Label = styled.label` 
`

Styles.InputCheck = styled.input`
    appearance: none;
    width: 15px;
    height: 15px;
    border: 1px solid #8b8b8b;
    display: flex;
    position: relative;
    cursor: pointer;
        
    &:checked::before{
        transition: all 500ms ease-in-out;
        position: absolute;
        left: 33%;
        transform: translate(-50%);
        content: " ";
        width: 4px;
        height: 8px;
        border-right: 2px solid #423e3e;
        border-bottom: 2px solid #423e3e;
        transform: rotate(40deg);
    }
`

export default Styles;