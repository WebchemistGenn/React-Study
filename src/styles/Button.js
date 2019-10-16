import React from "react";
import styled from "styled-components";

const Button = props => (
  // 다음에 배울 전개연산자
  <ButtonStyle {...props}>Button</ButtonStyle>
);

export default Button;

const ButtonStyle = styled.button`
  width: 100%;
  height: 50px;
  font-size: 14px;
  border: none;
  border: 1px solid #eee;
  background-color: #eee;
  transition: all 0.2s ease-in;
  outline: 0;
  cursor: pointer;

  &:hover {
    background-color: #aaa;
  }
`;
