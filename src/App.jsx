import React from 'react';
import { Route, Switch } from 'react-router';
import Test from './pages/test';
import Error404 from './pages/error404';
import TestRedux from './pages/testRedux';
import Home from './pages/home';
import Header from './components/header';
import Footer from './components/footer';
import Buyer from './pages/buyer';
import Supporter from './pages/supporter';
import Kid from './pages/kid';

function App() {
	return (
		<React.Fragment>
			<Header></Header>
			<Switch>
				<Route path='/kid/login' component={Kid}></Route>
				<Route path='/supporter/login' component={Supporter}></Route>
				<Route path='/buyer/login' component={Buyer}></Route>

				<Route path='/testRedux' component={TestRedux}></Route>
				<Route path='/test' component={Test}></Route>
				<Route path='/' component={Home}></Route>
				<Route component={Error404}></Route>
			</Switch>
			<Footer></Footer>
		</React.Fragment>
	);
}

export default App;
