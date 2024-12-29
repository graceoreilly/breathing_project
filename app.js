import express from 'express'; //imports the express module from the express package
const app = express(); //initialises an express application, the app variable can now be used to define routes and middleware for handling HTTP requests
const port = 3000; //sets the port number

import {
    getAllTechniques,
    getTechniqueById,
    addTechnique,
    updateTechnique,
    deleteTechnique,
} from "./breathingController.js"

app.use(express.json()); // Middleware to parse JSON request bodies

//here code will go for the CRUD requests

//Start the web server and listen for incoming connections on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});