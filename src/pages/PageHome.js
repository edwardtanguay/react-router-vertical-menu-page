import { NavLink } from 'react-router-dom';

export function PageHome() {
	return (
		<>
			<h1>Home</h1>
			<p>
				Welcome to our content index. Head over to <NavLink to="/topics">topics</NavLink> to see our catalog.
			</p>
		</>
	);
}
