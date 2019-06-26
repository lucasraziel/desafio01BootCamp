import projects from '../models/Project';

function checkProjectExists(request, response, next) {
	const index = projects.findIndex(value => value.id === request.params.id);
	console.log(projects[0]);
	console.log(request.params.id);

	if (index < 0) {
		return response.status(400).json({ error: 'Project does not exist' });
	}

	request.body.index = index;
	console.log(request.body);

	return next();
}

export default checkProjectExists;
