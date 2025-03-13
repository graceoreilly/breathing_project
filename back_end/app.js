import express from 'express'; //imports the express module from the express package
import breathingRoutes from './routes/breathingRoutes.js'; // Imports breathing routes
import cors from 'cors';

const app = express(); //initialises an express application, the app variable can now be used to define routes and middleware for handling HTTP requests

//enable CORS for all routes
// app.use(cors());
// const PORT = 3000; //sets the port number

app.use(cors({
    origin: ['https://breathing-project-o2xg.vercel.app/', 'http://localhost:3000']
  }));


app.use(express.json()); // Middleware to parse JSON request bodies

app.use('/techniques', breathingRoutes); //uses the breathingRoutes router for requests to the /techniques endpoint

// Export the app instance so it can be used in other files
export default app;

//Start the web server and listen for incoming connections on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});