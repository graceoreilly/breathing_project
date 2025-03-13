import express from 'express'; //imports the express module from the express package
import breathingRoutes from './routes/breathingRoutes.js'; // Imports breathing routes
import cors from 'cors';

const app = express(); //initialises an express application, the app variable can now be used to define routes and middleware for handling HTTP requests

// Configure CORS to allow your frontend domain
app.use(cors({
  origin: ['https://breathing-project-o2xg.vercel.app', 'http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true
}));

// And add this to ensure OPTIONS requests are handled correctly
app.options('*', cors());


app.use(express.json()); // Middleware to parse JSON request bodies

// A test route
app.get('/', (req, res) => {
    res.json({ message: 'API is working' });
  });

app.use('/techniques', breathingRoutes); //uses the breathingRoutes router for requests to the /techniques endpoint

// Error handling
app.use((err, req, res, next) => {
    console.error('Express error handler:', err);
    res.status(500).json({ error: err.message || 'Internal Server Error' });
  });

// Export the app instance so it can be used in other files
export default app;

//Start the web server and listen for incoming connections on the specified port
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

// Only listen on a port when not in production (not in Vercel)
if (process.env.NODE_ENV !== 'production') {
    const PORT = 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  }

