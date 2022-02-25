import { Outlet, NavLink } from 'react-router-dom';
import { getTopics } from "../data/siteData";

export function PageTopics() {
	const topics = getTopics();

	return (
		<div>
			<h1>Topics</h1>
			<ul>
				{topics.map(({ name, id }) => (
					<li key={id}>
						<NavLink to={id}>{name}</NavLink>
					</li>
				))}
			</ul>
			<hr />
			<Outlet />
		</div>
	);
}