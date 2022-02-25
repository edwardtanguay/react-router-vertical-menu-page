import { Link } from 'react-router-dom';

export function PageHome() {
	return (
		<>
			<h1>Home</h1>
			<p>
				Welcome to our content index. Head over to <Link to="/topics">topics</Link> to see our catalog.
			</p>
		</>
	);
}
