import * as React from 'react';
import {
	BrowserRouter as Router,
	Link,
	Route,
	Routes
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
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/topics">Topics</Link>
					</li>
				</ul>

				<hr />

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
