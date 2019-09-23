import React from "react";
import styled from "styled-components";

const Input = ({ label="", type = "text" }) => {
  return (
    <Wrap>
      <Label>{label}</Label>
      <InputStyle type={type} />
    </Wrap>
  )
}

export default Input;

// styled-components를 이용하여 다음과 같이 style도 component화 시킬수 있습니다.
const Wrap = styled.div`
  margin: 20px 0;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
`;

const InputStyle = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  border-bottom: 1px solid #eee;
  transition: border .2s ease-in;
  outline: none;

  &:focus {
    border-bottom-color: red;
  }
`;