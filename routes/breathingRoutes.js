import express from 'express'; //imports the express module from the express package
const router = express.Router(); //initialises an express router, the router variable can now be used to define routes and middleware for handling HTTP requests
import { getAllTechniques, getTechniqueByID } from '../controllers/breathingController.js';

// Routes 
//1. GET reqeust to get all breathing techniques
router.get('/', async function (req,res) {
    const returnedData = await getAllTechniques();
    const allTechniques = {
        "success": true,
        "data": returnedData,
      }
      //respond to the client with all techniques
      res.json(allTechniques);
    } )
     //GET request to the /breathing endpoint, calls the getAllTechniques function from the breathingController
  
  //2. GET request to get a breathing technique by ID
  //create a get request for a unique id using an async func
  router.get("/:id", async function (req, res) {
  //use getTechniqueByID function to get the specific id
  //specify that the id parameters are in the URI and data type is a number
  let returnedData = await getTechniqueByID(Number(req.params["id"]));
  //follow response specification
  const idTechnique = {
    "success": true,
    "data": returnedData
  }
  console.log(idTechnique)
  //respond to the client technique with corresponding id
  res.json(idTechnique);
  })

export default router; //exports the router object