import styled from "styled-components";

const Styles = {}

Styles.Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 500px;
    color: #2c2c2c;
`
Styles.Title = styled.h1`
    font-size: 1.5rem;
`

Styles.Description = styled.p`
    position: relative;
    font-size: 1rem;
    max-width: 400px;
    margin: 20px 0;
    font-family: inherit;
    min-height: 80px;
    overflow: hidden;
    
    @media (max-width: 515px){
        order: 5;
        display: none;
    }
`
Styles.DescriptionButton = styled.a`
    font-size: 1rem;
    color: #000;
    font-weight: 600;
`

Styles.Price = styled.p`
    font-weight: 500;
    margin: 10px 0;
    font-size: 1.5rem;
`

Styles.WrapperQtd = styled.div`
    margin: 10px 0 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

Styles.Availability = styled.p`
    font-size: 1.1rem;
    font-weight: 500;
`

Styles.WrapperGereric = styled.div`
    display: flex;
    flex-direction: column;
`

Styles.WrapperButtons = styled.div`
    display: flex;
    margin: 20px 0;
    flex-wrap: wrap;
`


Styles.Warning = styled.span`
    font-size: 1rem;
    font-weight: 500;
    margin-right: 10px;
`

export default Styles;