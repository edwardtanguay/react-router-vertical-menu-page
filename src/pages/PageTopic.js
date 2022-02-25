import { useParams, NavLink, Outlet } from 'react-router-dom';
import { getTopic } from '../tools/dataManager';

export function PageTopic() {
	const { topicId } = useParams();
	const topic = getTopic(topicId);

	return (
		<div className="areaTopic">
			<h2>{topic.name} Howtos</h2>
			<p>{topic.name}: {topic.description}</p>
			<ul>
				{topic.resources.map((sub) => (
					<li key={sub.id}>
						<NavLink to={sub.id}>{sub.name}</NavLink>
					</li>
				))}
			</ul>
			<Outlet />
		</div>
	);
}