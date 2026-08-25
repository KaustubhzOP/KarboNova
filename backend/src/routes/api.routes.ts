import { Router } from 'express';
import { ApiController } from '../controllers/apiController';

const router = Router();

router.get('/dashboard/summary', ApiController.getDashboardSummary);
router.get('/projects', ApiController.getProjects);
router.get('/evidence', ApiController.getEvidence);
router.post('/opportunity/calculate', ApiController.calculateOpportunity);

export default router;
