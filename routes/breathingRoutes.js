import express from 'express'; //imports the express module from the express package
import { getAllTechniques } from '../controllers/breathingController.js';
const router = express.Router(); //initialises an express router, the router variable can now be used to define routes and middleware for handling HTTP requests

// Routes - 
router.get('/', async function (req,res) {
    const returnedData = await getAllTechniques();
    const allTechniques = {
        "success": true,
        "payload": returnedData,
      }
      //respond to the client with all techniques
      res.json(allTechniques);
    } )
     //GET request to the /breathing endpoint, calls the getAllTechniques function from the breathingController

export default router; //exports the router object