import styled from "styled-components";

const Styles = {}

Styles.WrapperFooter = styled.footer`
    background-color: black;
`

Styles.Wrapper = styled.div`
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    flex-wrap: wrap;

    @media (max-width: 737px){
        justify-content: center;
    }
`

Styles.WrapperNetWork = styled.div`
    display: flex;
    max-width:400px;
    width: 100%;
    flex: 1;
    min-width: 295px;
    flex-wrap: wrap;

    @media (max-width: 1045px){
        margin-left: 10px;
    }

`

Styles.NetWorkColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 199px;
    max-height: 80px;

    @media (min-width: 741px){
        max-height: 10px;
    }
`

Styles.NetWork = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
`

Styles.NetWorkText = styled.a`
    color: white;
    margin-left: 5px;
`

Styles.Address = styled.p`
    color: white;

    @media (max-width: 631px){
       margin-bottom: 20px;
    }
`

Styles.Copyright = styled.div`
    max-width: 1000px;
    color: white;
    margin: 0 auto;
    padding-bottom: 5px;
`

export default Styles;


