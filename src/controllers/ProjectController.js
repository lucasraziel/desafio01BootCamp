import projects from '../models/Project';

class ProjectController {
	store(request, response) {
		const { id, title, tasks } = request.body;

		projects.push({
			id,
			title,
			tasks
		});

		return response.json({
			id,
			title,
			tasks
		});
	}

	index(request, response) {
		return response.json(projects);
	}

	update(request, response) {
		const { title, tasks, id, index } = request.body;
		console.log(request.body);

		projects[index] = { id, title, tasks };

		return response.json({ id, title, tasks });
	}

	delete(request, response) {
		const { index } = request.body;

		projects.splice(index, 1);

		return response.json(projects);
	}
}

export default new ProjectController();
