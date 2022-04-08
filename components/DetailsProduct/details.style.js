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
`


Styles.Warning = styled.span`
    font-size: 1rem;
    font-weight: 500;
`

export default Styles;