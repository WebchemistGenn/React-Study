import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import Layout from "./layouts/DefaultLayout";
import HomeView from './views/Home';
import TodoView from './views/Todo';

const InitStyle = createGlobalStyle`
  ${reset};

  html, body, #root {
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
  return (
    <Router>
      <InitStyle />
      <Layout>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/todo" component={TodoView} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;