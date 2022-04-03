import styled from "styled-components";

const Styles = {};

Styles.Wrapper = styled.header`
    margin: 0 auto;
    max-width: 1000px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

Styles.WrapperLogo = styled.div`
    justify-content: center;
`
Styles.Menu = styled.nav`
    display: flex;
    justify-content: center;
`

Styles.MenuList = styled.ul`
    display: flex;
    justify-content: center;
`

Styles.MenuItem = styled.li`
    margin: 10px;
    padding: 1px;
`
Styles.MenuLink = styled.a`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    text-decoration: none;
    color: #000;
`

export default Styles;