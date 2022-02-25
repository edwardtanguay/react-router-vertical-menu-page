import { useParams, NavLink, Outlet } from 'react-router-dom';
import { getTopic } from '../data/siteData';

export function PageTopic() {
	const { topicId } = useParams();
	const topic = getTopic(topicId);

	return (
		<div>
			<h2>{topic.name}</h2>
			<p>{topic.description}</p>

			<ul>
				{topic.resources.map((sub) => (
					<li key={sub.id}>
						<NavLink to={sub.id}>{sub.name}</NavLink>
					</li>
				))}
			</ul>

			<hr />

			<Outlet />
		</div>
	);
}