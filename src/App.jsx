import React from "react";
import { Route, Switch } from "react-router";
import Test from "./pages/test";
import Error404 from "./pages/error404";
import TestRedux from "./pages/testRedux";
import Home from "./pages/home";
import postForm from "./pages/postForm";
import LoginKid from "./pages/kid/login";
import SignupKid from "./pages/kid/signup";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/kid/login" component={LoginKid}></Route>
        <Route path="/kid/signup" component={SignupKid}></Route>
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
