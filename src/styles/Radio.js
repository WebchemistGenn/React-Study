import React from "react";
import styled from "styled-components";

const RadioComponent = props => (
  <Wrap>
    <input type="radio" {...props} />
    <div className="radio" />
    <div>{props.label}</div>
  </Wrap>
);

export default RadioComponent;

const Wrap = styled.label`
  display: flex;
  align-items: center;
  height: 40px;
  font-size: 14px;

  input {
    display: none;
  }

  div.radio {
    position: relative;
    width: 18px;
    height: 18px;
    margin-right: 5px;
    border: 2px solid #0094ff;
    border-radius: 999px;
  }

  input[type="radio"]:checked ~ div.radio {
    &::after {
      position: absolute;
      content: "";
      top: 50%;
      left: 50%;
      width: 10px;
      height: 10px;
      background-color: #0094ff;
      transform: translate(-50%, -50%);
      border-radius: 999px;
    }
  }
`;
