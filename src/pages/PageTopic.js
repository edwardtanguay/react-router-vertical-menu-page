import { useParams, Link, Outlet } from 'react-router-dom';
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
						<Link to={sub.id}>{sub.name}</Link>
					</li>
				))}
			</ul>

			<hr />

			<Outlet />
		</div>
	);
}