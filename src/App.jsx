import React from "react";
import { Route, Switch } from "react-router";
import Test from "./pages/test";
import Error404 from "./pages/error404";
import TestRedux from "./pages/testRedux";
import Home from "./pages/home";
import postForm from "./pages/postForm";
import Header from "./components/header";
import Footer from "./components/footer";
import PostDetails from "./components/postDetails";
import KidLogin from "./pages/kidLogin";
import SupporterLogin from "./pages/supporterLogin";
import BuyerLogin from "./pages/buyerLogin";
import Kid from "./pages/kid";
import Supporter from "./pages/supporter";
import Categories from "./pages/categories";
import Store from "./components/store/store";
import Buyer from "./pages/buyer";
import About from "./pages/about";
import Contact from "./pages/contact";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProtectedRoute from "./components/protectedRoute";

import { loadUser } from "./redux/actions/userActions";

function App() {
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();
  useEffect(() => {
    if (token) dispatch(loadUser());
  }, []);
  return (
    <React.Fragment>
      <Header></Header>

      <Switch>
        <ProtectedRoute userType="Kid" path="/postForm" component={postForm} />
        <Route path="/PostDetails/:id" component={PostDetails}></Route>
        <Route path="/kid/login" component={KidLogin}></Route>
        <Route path="/kid/:id" component={Kid}></Route>
        <Route path="/supporter/login" component={SupporterLogin}></Route>
        <Route path="/supporter/:id" component={Supporter}></Route>
        <Route path="/buyer/login" component={BuyerLogin}></Route>
        <Route path="/buyer/:id" component={Buyer}></Route>
        <Route path="/store" component={Store}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
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
