import express from 'express';
import cors from 'cors';
import apiRoutes from './routes/api.routes';
import { initDb } from './config/db';

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Health Check Endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'KarboNova MSME Backend API', timestamp: new Date() });
});

// API Routes
app.use('/api', apiRoutes);

app.listen(PORT, async () => {
  console.log(`🚀 KarboNova Backend Server running on http://localhost:${PORT}`);
  await initDb();
});
