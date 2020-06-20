import React from 'react';
import { Route, Switch } from 'react-router';
import Test from './pages/test';
import Error404 from './pages/error404';
import TestRedux from './pages/testRedux';
import Home from './pages/home';
import LoginKid from './pages/kid/login';
import SignupKid from './pages/kid/signup';
import LoginSupporter from './pages/supporter/login';
import SignupSupporter from './pages/supporter/signup';
import LoginBuyer from './pages/buyer/login';
import SignupBuyer from './pages/buyer/signup';
import Header from './components/header';
import Footer from './components/footer';

function App() {
	return (
		<React.Fragment>
			<Header></Header>
			<Switch>
				<Route path='/kid/login' component={LoginKid}></Route>
				<Route path='/kid/signup' component={SignupKid}></Route>
				<Route path='/supporter/login' component={LoginSupporter}></Route>
				<Route path='/supporter/signup' component={SignupSupporter}></Route>
				<Route path='/buyer/login' component={LoginBuyer}></Route>
				<Route path='/buyer/signup' component={SignupBuyer}></Route>

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
