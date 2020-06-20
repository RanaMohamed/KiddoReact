import React from "react";
import { Route, Switch } from "react-router";
import Test from "./pages/test";
import Error404 from "./pages/error404";
import TestRedux from "./pages/testRedux";
import Home from "./pages/home";
import postForm from "./pages/postForm";
import Header from "./components/header";
import Footer from "./components/footer";
import KidLogin from "./pages/kidLogin";
import SupporterLogin from "./pages/supporterLogin";
import BuyerLogin from "./pages/buyerLogin";
import Kid from "./pages/kid";
import Supporter from "./pages/supporter";
import Categories from "./pages/categories";
import Store from "./components/store/store";
import Buyer from "./pages/buyer";

function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <Switch>
        <Route path="/postForm" component={postForm}></Route>
        <Route path="/supporter" component={Supporter}></Route>
        <Route path="/buyer" component={Buyer}></Route>
        <Route path="/kid/login" component={KidLogin}></Route>
        <Route path="/supporter/login" component={SupporterLogin}></Route>
        <Route path="/buyer/login" component={BuyerLogin}></Route>
        <Route path="/kid" component={Kid}></Route>
        <Route path="/store" component={Store}></Route>
        <Route path="/testRedux" component={TestRedux}></Route>
        <Route path="/test" component={Test}></Route>
        <Route path="/categories" component={Categories}></Route>
        <Route path="/" component={Home}></Route>
        <Route component={Error404}></Route>
      </Switch>
      <Footer></Footer>
    </React.Fragment>
  );
}
export default App;
