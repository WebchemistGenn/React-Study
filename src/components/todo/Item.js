import React from "react";
import styled from "styled-components";

import { ReactComponent as Check } from "../../assets/icons/check.svg";
import { ReactComponent as Clear } from "../../assets/icons/clearable.svg";

const ItemComponent = ({ data, onCheck, onRemove }) => (
  <Wrap>
    {data.content}
    <Check className={data.done ? "check done" : "check"} onClick={onCheck} />
    {/* <Checkbox />
      <Content>{data.content}</Content>
      <ModifyBtn>수정</ModifyBtn>
      <DeleteBtn>삭제</DeleteBtn> */}
    <Clear className="clear" onClick={onRemove} />
  </Wrap>
);

export default ItemComponent;

const Wrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0 0 0 60px;
  background-color: #31383e;
  border-bottom: 1px solid #29353a;
  transition: all 0.2s ease-in;
  font-size: 20px;
  font-weight: bold;
  text-transform: capitalize;

  svg.check {
    position: absolute;
    left: 10px;
    fill: #5e6876;
    cursor: pointer;

    &.done {
      fill: #e7d45d;
    }
  }

  svg.clear {
    position: absolute;
    right: 20px;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`;
