import express from "express"; //imports the express module from the express package
const router = express.Router(); //initialises an express router, the router variable can now be used to define routes and middleware for handling HTTP requests
import {
  getAllTechniques,
  getTechniqueByID,
  addNewTechnique,
  updateTechniquebyID,
  deleteTechnique,
} from "../controllers/breathingController.js";

// Routes
//1. GET reqeust to get all breathing techniques
router.get("/", async function (req, res) {
  const returnedData = await getAllTechniques();
  const allTechniques = {
    success: true,
    data: returnedData,
  };
  //respond to the client with all techniques
  res.json(allTechniques);
});
//GET request to the /breathing endpoint, calls the getAllTechniques function from the breathingController

//2. GET request to get a breathing technique by ID
//create a get request for a unique id using an async func
router.get("/:id", async function (req, res) {
  //use getTechniqueByID function to get the specific id
  //specify that the id parameters are in the URI and data type is a number
  let returnedData = await getTechniqueByID(Number(req.params["id"]));
  //follow response specification
  const idTechnique = {
    success: true,
    data: returnedData,
  };
  //respond to the client technique with corresponding id
  res.json(idTechnique);
});

//3. POST request to add a new breathing technique
//create a POST request using an async function
router.post("/", async function (req,res) {
  //specify that a body will be required when the client makes a request via the addNewTechnique function
  let returnedData = await addNewTechnique(req.body);
  //follow response specification
  const newTechnique = {
    success: true,
    data: returnedData,
  };
  //respond to the client with the newly created breathing technique and status 201
  res.status(201).json(newTechnique);
})

//4. PUT request to update a breathing technique
router.put("/:id", async function (req,res) {
  //specify an id is required in URI
  const techniqueID = Number(req.params.id);
  //specify a body is required for the update
  const techniqueUpdates = req.body;
  //update the breathing technique by id and let the client know a body is required
  let returnedData = await updateTechniquebyID(techniqueID, techniqueUpdates);
  //return the updated technique following res spec
  const updatedTechnique = {
    success: true,
    data: returnedData,
  };
  //respond to client
  res.json(updatedTechnique);
})

//5. DELETE request to delete a breathing technique
router.delete("/:id", async function (req,res) {
  //let client know id is req in params to be deleted
  const techniqueID = Number(req.params.id);
  //update the array to delete the technique
  let returnedData = await deleteTechnique(techniqueID);
  //return the deleted technique following res spec
  const deletedTechnique = {
    success: true,
    data: returnedData,
  };
  //respond to client
  res.json(deletedTechnique);
})

export default router; //exports the router object
