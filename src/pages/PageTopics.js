import { Outlet, Link } from 'react-router-dom';
import { getTopics } from "../data/siteData";

export function PageTopics() {
	const topics = getTopics();

	return (
		<div>
			<h1>Topics</h1>
			<ul>
				{topics.map(({ name, id }) => (
					<li key={id}>
						<Link to={id}>{name}</Link>
					</li>
				))}
			</ul>
			<hr />
			<Outlet />
		</div>
	);
}