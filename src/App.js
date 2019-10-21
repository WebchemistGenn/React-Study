import React, { useState, useReducer } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import Layout from "./layouts/DefaultLayout";
import HomeView from "./views/Home";
import TodoView from "./views/Todo";
import ThemeView from "./views/Theme";

import { Context } from "./Context";
import { Reducer, reducers, init } from "./Reducer";
console.log("!!!!!!!!");
const InitStyle = createGlobalStyle`
  ${reset};

  html,
  body,
  #root {
    height: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    line-height: 1.2;
  }
`;

const App = () => {
  const [commonCount, setCommonCount] = useState(0);
  const [props, dispatch] = useReducer(reducers, init);

  return (
    <Reducer.Provider value={{ props, dispatch }}>
      <Context.Provider value={{ commonCount, setCommonCount }}>
        <BrowserRouter>
          <InitStyle />
          <Layout>
            <Switch>
              <Route exact path="/" component={HomeView} />
              <Route path="/todo" component={TodoView} />
              <Route path="/theme" component={ThemeView} />
              <Redirect to="/" />
            </Switch>
          </Layout>
        </BrowserRouter>
      </Context.Provider>
    </Reducer.Provider>
  );
};

export default App;
