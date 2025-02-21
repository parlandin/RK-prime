import styled from "styled-components";

const Styles = {};

Styles.WrapperLogo = styled.div`
  cursor: pointer;
`;
Styles.logoImage = styled.div`
  display: flex;
  height: 60px;
  width: 130px;
  position: relative;
  align-items: center;

  @media (max-width: 299px) {
    max-width: 110px;
    top: 7px;
  }

  @media (max-width: 260px) {
    max-width: 110px;
    top: 8px;
  }
`;

export default Styles;
