import { Outlet, NavLink } from 'react-router-dom';
import { getTopics } from '../tools/dataManager';

export function PageTopics() {
	const topics = getTopics();

	return (
		<div className="areaTopics">
			<ul>
				{topics.map(({ name, id }) => (
					<li key={id}>
						<NavLink to={id}>{name}</NavLink>
					</li>
				))}
			</ul>
			<Outlet />
		</div>
	);
}