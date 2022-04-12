import styled from "styled-components";


const Styles = {}

Styles.Wrapper = styled.a`
    max-width: 200px;
    min-width:200px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    padding: 5px;
    color: #202020;

    &:hover {
        background-color: #faf2f2;
    }

    &.mobile-direct {

        @media (max-width: 476px) and  (min-width: 300px){
            flex-direction: row;
            max-width: 100%;
            min-width: 100%;
        }
        
    }
`

Styles.WrapperImage = styled.div`
    padding: 5px;
    border: 1px solid #000;
    max-height: 160px;
    min-height: 160px;
    max-width: 140px;
    min-width: 140px;
    align-self: center;
    display: flex;
    align-items: center;
    justify-content: center;
`

Styles.WrapperInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

Styles.PTitle = styled.p`
    font-size: 1rem;
    font-weight: 400px;
    margin: 10px 5px 5px ;
    margin-right: 0;
    max-height: 39px;
    min-height: 39px;
    overflow: hidden;

    &.mobile-direct {

        @media (max-width: 438px) and  (min-width: 300px){
            max-height:78px;
        }
    }
` 

Styles.Price = styled.span`
    font-size: 1.5rem;
    font-weight: 400px;
    align-self: center;
    margin: 10px 0;

    &.mobile-direct {

        @media (max-width: 476px) and  (min-width: 300px){
            align-self: flex-start;
            margin: 10px 5px;
        }
        
    }
`


Styles.WrapperRating =styled.div`
    align-self: center;
    margin: 5px 5px 10px;
    display: flex;
    align-items: center;


    @media (max-width: 478px) and  (min-width: 300px){
           align-self: flex-start;
        }
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

export default Styles;