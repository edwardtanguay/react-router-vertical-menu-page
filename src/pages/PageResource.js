import { useParams } from 'react-router-dom';
import { getResource } from '../tools/dataManager';

export function PageResource() {
	const { topicId, resourceId } = useParams();
	const { name, description, id } = getResource({ topicId, resourceId });
	console.log(name);
	console.log(description);
	console.log(id);

	return (
		<div>
			<h3>{name}</h3>
			<p>{description}</p>
			<a href={`https://ui.dev/${id}`}>Read Post</a>
		</div>
	);
}