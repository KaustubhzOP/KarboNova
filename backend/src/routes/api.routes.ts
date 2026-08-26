import { Router } from 'express';
import { ApiController } from '../controllers/apiController';

const router = Router();

router.get('/dashboard/summary', ApiController.getDashboardSummary);
router.get('/projects', ApiController.getProjects);
router.post('/projects/create', ApiController.createProject);
router.get('/evidence', ApiController.getEvidence);
router.post('/evidence/upload', ApiController.uploadEvidence);
router.delete('/evidence/:id', ApiController.deleteEvidence);
router.post('/opportunity/calculate', ApiController.calculateOpportunity);

export default router;
