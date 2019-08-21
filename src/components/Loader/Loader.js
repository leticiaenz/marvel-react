import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: red; */
  height: 80vh;
  .fa-circle-notch {
    color: #ea2327;
  }
`;

const Loader = () => (
  <Container className="fa-5x">
    <i className="fas fa-circle-notch fa-spin"></i>
  </Container>
);

export default Loader;
