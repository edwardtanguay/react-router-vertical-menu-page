import { useParams } from 'react-router-dom';
import { getResource } from '../data/siteData';

export function PageResource() {
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