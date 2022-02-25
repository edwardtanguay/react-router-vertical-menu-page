import { useParams } from 'react-router-dom';
import { getResource } from '../tools/dataManager';

export function PageResource() {
	const { topicId, resourceId } = useParams();
	const { name, description, id } = getResource({ topicId, resourceId });

	return (
		<div>
			<h3>{name}</h3>
			<p>{description}</p>
			<a href={`https://edwardtanguay.netlify.app/howtos?id=${id}`}>Read Post</a>
		</div>
	);
}