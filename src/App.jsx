import React from "react";
import { Route, Switch } from "react-router";
import Test from "./pages/test";
import Error404 from "./pages/error404";
import TestRedux from "./pages/testRedux";
import postForm from "./pages/postForm";
import Home from "./pages/home";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/testRedux" component={TestRedux}></Route>
        <Route path="/test" component={Test}></Route>
        <Route path="/postForm" component={postForm}></Route>
        <Route path="/" component={Home}></Route>
        <Route component={Error404}></Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
