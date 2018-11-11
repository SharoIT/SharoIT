import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './views/Home';

const routes = [
	{
		path: '/',
		exact: true,
		component: Home
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
