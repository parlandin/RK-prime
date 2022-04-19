import styled from "styled-components";

const Styles = {}

Styles.Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 75vh;
`
Styles.Textnull = styled.p`
    font-size: 1.1rem;
    color: #141414;
`


Styles.WrapperCart = styled.div`
    margin-top:30px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-height: 70vh;
    overflow-y: scroll;
    overflow-x: hidden;
`

Styles.CardCart = styled.div`
    margin-bottom: 1px solid #2c2c2c;
    width: 100%;
    margin: 20px;

    @media (max-width:405px){
        margin: 30px 2px;
    }
`

Styles.WrapperTotal = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 0 10px;
    flex-wrap: wrap;
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