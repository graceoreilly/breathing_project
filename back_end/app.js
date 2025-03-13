import express from 'express';
import breathingRoutes from './routes/breathingRoutes.js'; 
import cors from 'cors';

const app = express(); 

app.use(cors({
  origin: ['http://localhost:5173'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true
}));


const PORT = 3000;


app.use(express.json());

// A test route
app.get('/', (req, res) => {
    res.json({ message: 'API is working' });
  });

app.use('/techniques', breathingRoutes); 

export default app;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
