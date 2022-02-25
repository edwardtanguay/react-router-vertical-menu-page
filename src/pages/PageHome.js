import { NavLink } from 'react-router-dom';

export function PageHome() {
	return (
		<div className="areaHome">
			<p>
				Welcome to our content index. Head over to <NavLink to="/topics">topics</NavLink> to see our catalog.
			</p>
		</div>
	);
}
