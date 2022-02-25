import * as React from "react";
import {
	BrowserRouter as Router,
	Link,
	Route,
	useParams,
	Routes,
	Outlet
} from "react-router-dom";
import { getTopic, getResource, getTopics } from "./api";
import './App.scss';
import { PageHome } from './pages/PageHome';
import { PageTopics } from './pages/PageTopics';


function Resource() {
	const { topicId, resourceId } = useParams();

	const { name, description, id } = getResource({ topicId, resourceId });

	return (
		<div>
			<h3>{name}</h3>
			<p>{description}</p>
			<a href={`https://ui.dev/${id}`}>Read Post</a>
		</div>
	);
}

function Topic() {
	const { topicId } = useParams();
	const topic = getTopic(topicId);

	return (
		<div>
			<h2>{topic.name}</h2>
			<p>{topic.description}</p>

			<ul>
				{topic.resources.map((sub) => (
					<li key={sub.id}>
						<Link to={sub.id}>{sub.name}</Link>
					</li>
				))}
			</ul>

			<hr />

			<Outlet />
		</div>
	);
}

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
						<Route path=":topicId" element={<Topic />}>
							<Route path=":resourceId" element={<Resource />} />
						</Route>
					</Route>
				</Routes>
			</div>
		</Router>
	);
}
