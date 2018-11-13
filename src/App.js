import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import New from './views/New';

const routes = [
	{
		path: '/',
		exact: true,
		component: Home
	},
	{
		path: '/new',
		exact: false,
		component: New
	}
];

function App() {
	return (
		<Router>
			<div className="App">
				{routes.map((route, index) => (
					<Route {...route} key={index} />
				))}
			</div>
		</Router>
	);
}

export default App;
