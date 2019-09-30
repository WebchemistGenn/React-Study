import React from "react";
import styled from "styled-components";

import Header from "../components/common/Header";

const DefaultLayout = ({ children }) => {
  return (
    <Wrap>
      <Header />
      <Container>
        {children}
      </Container>
    </Wrap>
  );
}

export default DefaultLayout;

const Wrap = styled.div`
  height: 100%;
  padding: 60px 10px 10px;
  background-color: #F5F5F5;
`;

const Container = styled.div`
  width: 1024px;
  margin: 0 auto;
`;