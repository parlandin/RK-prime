import styled from "styled-components";

const Styles = {}

Styles.Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 500px;
`
Styles.Title = styled.h1`
    font-size: 1.5rem;
`

Styles.Description = styled.p`
    font-size: 1rem;
    max-width: 400px;
    margin: 20px 0;
    font-family: inherit;
    
    @media (max-width: 515px){
        order: 5;
    }
`

Styles.WrapperSize = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0 20px;
`
Styles.SizeText = styled.p`
    font-size: 1.1rem;
    font-weight: 500;
`
Styles.WrapperCheckBox = styled.div`
    display: flex;
`

Styles.SelectSize = styled.div`
    & + div {
        margin-left: 10px;
    }
`

Styles.CheckSize = styled.input`
`
Styles.CheckText = styled.label`
    font-size: 1rem;
    font-weight: 500;
    margin-left: 2px;
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
`

export default Styles;