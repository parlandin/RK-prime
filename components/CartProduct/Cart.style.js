import styled from "styled-components";


const Styles = {}

Styles.Wrapper = styled.div`
    display: flex;
    cursor: pointer;
    padding: 5px;
    position: relative;
    border-radius: 10px;
    justify-content: space-between;
    align-items: center;

`

Styles.WrapperGereric = styled.a`
    display: flex;
    width: 100%;
    color: #2c2c2c;

   /*  @media (max-width: 405px){
        flex-direction: column;
    } */
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
`

Styles.PTitle = styled.p`
    font-size: 1.3rem;
    font-weight: 400;
    margin: 10px 5px 5px;
    margin-right: 0;
    overflow: hidden;


` 

Styles.Price = styled.span`
    font-size: 1.5rem;
    font-weight: 400px;
    margin: 10px 5px;

`

Styles.WrapperRating =styled.div`
    margin: 5px 5px 10px;
    display: flex;
    align-items: center;
`

Styles.Icon = styled.span`
    font-size: 0.9rem;
    & + span {
        margin-left: 2px;
    }

    &:hover .icon-star_icon{
        color: #ffc600db;
    }

    &.title {
       
    }
`

Styles.WrapperButton = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    right: 25px;
    transform: translateY(-50%);

    @media (max-width: 534px) {
        flex-direction: row;
        bottom: -52px;
        top: unset;
        right: unset;
        left: 1;
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