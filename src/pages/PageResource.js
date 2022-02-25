import { useParams } from 'react-router-dom';
import { getResource } from '../tools/dataManager';

export function PageResource() {
	const { topicId, resourceId } = useParams();
	const { name, description, id } = getResource({ topicId, resourceId });

	return (
		<div className="areaResource">
			<h3>{name}</h3>
			<p>{description}</p>
			<div className="link">
				&gt;&gt;&gt; <a target="_blank" href={`https://edwardtanguay.netlify.app/howtos?id=${id}`} rel="noreferrer">Go to Howto</a>
			</div>
		</div>
	);
}