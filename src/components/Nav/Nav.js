import React from "react";
import MarvelLogo from "../../img/marvel-logo.jpg";
import styled from "styled-components";

export const Container = styled.div`
  background-color: #333;
  margin: 0;
  padding: 0;
`;

const Nav = () => (
  <Container data-testid="nav-container">
    <img src={MarvelLogo} alt="logo" height="60" />
  </Container>
);

export default Nav;
