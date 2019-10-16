import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderComponent = () => (
  <Header>
    <Title>Group Of Developers</Title>
    <Menu>
      <Item exact to="/">
        Home
      </Item>
      <Item to="/todo">Todo</Item>
      <Item to="/theme">Theme</Item>
    </Menu>
  </Header>
);

export default HeaderComponent;

const Header = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  padding: 0 20px;
  background-color: #fff;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.2);
  user-select: none;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: bolder;
`;

const Menu = styled.div`
  display: flex;
  height: 100%;
  margin-left: 120px;
`;

const Item = styled(NavLink)`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 20px;
  margin: 0 10px;
  font-weight: bold;

  &::before {
    position: absolute;
    display: block;
    bottom: 0;
    left: 0;
    content: "";
    width: 100%;
    height: 2px;
    margin: 0 auto;
    background-color: #4caa9f;
    transform: scaleX(0);
    transition: all 0.2s ease-in-out;
  }

  &.active {
    color: #4caa9f;

    &::before {
      transform: scaleX(1);
    }
  }
`;
