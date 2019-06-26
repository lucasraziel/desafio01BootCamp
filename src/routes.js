import { Router } from 'express';
import ProjectController from './controllers/ProjectController';
import TaskController from './controllers/TaskController';
import checkProjectExists from './middlewares/checkProjectExists';

const routes = new Router();

routes.get('/projects', ProjectController.index);
routes.post('/projects', ProjectController.store);
routes.put('/projects/:id', checkProjectExists, ProjectController.update);
routes.delete('/projects/:id', checkProjectExists, ProjectController.delete);
routes.post('/projects/:id/tasks', checkProjectExists, TaskController.store);
export default routes;
