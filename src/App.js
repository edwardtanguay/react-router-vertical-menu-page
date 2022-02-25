import * as React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Routes,
	NavLink
} from 'react-router-dom';
import './App.scss';
import { PageHome } from './pages/PageHome';
import { PageTopics } from './pages/PageTopics';
import { PageResource } from './pages/PageResource';
import { PageTopic } from './pages/PageTopic';

export default function App() {
	return (
		<Router>
			<div className="App">
				<h1>Edward's Howtos</h1>
				<ul>
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<li>
						<NavLink to="/topics">Topics</NavLink>
					</li>
				</ul>
				<Routes>
					<Route path="/" element={<PageHome />} />
					<Route path="/topics" element={<PageTopics />}>
						<Route path=":topicId" element={<PageTopic />}>
							<Route path=":resourceId" element={<PageResource />} />
						</Route>
					</Route>
				</Routes>
			</div>
		</Router>
	);
}