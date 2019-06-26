import projects from '../models/Project';

class TaskController {
	store(request, response) {
		const { title, index } = request.body;

		projects[index].tasks.push(title);

		return response.json(projects[index]);
	}
}

export default new TaskController();
