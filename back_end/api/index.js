import express from 'express';
import cors from 'cors';

const app = express();

// Enable CORS for all routes with all options
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'API is working' });
});

// Simple techniques route - for testing
app.get('/techniques', (req, res) => {
  res.json([
    { id: 1, name: 'Box Breathing', description: 'Equal inhale, hold, exhale, hold pattern' },
    { id: 2, name: '4-7-8 Breathing', description: 'Inhale for 4, hold for 7, exhale for 8' }
  ]);
});

// Handle 404 errors
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

// Handle errors
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Server error' });
});

export default app;