import React, { useContext } from "react";
import styled from "styled-components";

import { Context } from "../Context";
import { Reducer } from "../Reducer";

const HomeView = () => {
  const { commonCount, setCommonCount } = useContext(Context);
  const { props, dispatch } = useContext(Reducer);
  return (
    <React.Fragment>
      <h1>Home</h1>
      <h1>두 정보는 라우팅이 일어나도 보존됩니다. ( 새로고침 제외 )</h1>
      <h1>context count: {commonCount}</h1>
      <h1>reducer count: {props.count}</h1>
      <button onClick={() => setCommonCount(prev => prev + 1)}>context 증가</button>
      <button onClick={() => dispatch({ type: "ADD" })}>reducer 증가</button>
      <button onClick={() => dispatch({ type: "MINUS" })}>reducer 감소</button>
    </React.Fragment>
  );
}

export default HomeView;
