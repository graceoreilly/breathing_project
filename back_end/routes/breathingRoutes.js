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
  try {
    const returnedData = await getAllTechniques();
    const allTechniques = {
      success: true,
      data: returnedData,
    };
    //respond to the client with all techniques
    res.json(allTechniques);
  } catch (error) {
    console.error("Error getting all techniques", error);
  res.status(500).send("Failed to get all techniques.");
  }
});
//GET request to the /breathing endpoint, calls the getAllTechniques function from the breathingController

//2. GET request to get a breathing technique by ID
//create a get request for a unique id using an async func
router.get("/:id", async function (req, res) {
  try {
  //use getTechniqueByID function to get the specific id
  //specify that the id parameters are in the URI and data type is a number
  const techniqueID = Number(req.params["id"]);
  let returnedData = await getTechniqueByID(techniqueID);
  // If the technique does not exist, return a 404 error
if (!returnedData) {
  return res.status(404).json({
    success: false,
    message: `Technique with ID ${techniqueID} not found.`,
  });
}
  //follow response specification
  const idTechnique = {
    success: true,
    data: returnedData,
  };
  //respond to the client technique with corresponding id
  res.json(idTechnique);
}
catch(error){
  console.error("Error getting technique by id", error);
  res.status(500).send("Failed to get the technique by id.");
}
});

//3. POST request to add a new breathing technique
//create a POST request using an async function
router.post("/", async function (req, res) {
  try {
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({
        success: false,
        message: "New data is required in body.",
      });
    }
      //specify that a body will be required when the client makes a request via the addNewTechnique function
    let returnedData = await addNewTechnique(req.body);
  // follow response specification
  const newTechnique = {
    success: true,
    data: returnedData,
  };
  //respond to the client with the newly created breathing technique and status 201
  res.status(201).json(newTechnique);
  }
catch(error) {
  console.error("Error adding breathing technique", error);
  res.status(500).send("Failed to add the technique.");
}
});

//4. PUT request to update a breathing technique
router.put("/:id", async function (req, res) {
  try {
  //specify an id is required in URI
  const techniqueID = Number(req.params.id);
  //specify a body is required for the update
  const techniqueUpdates = req.body;
  // Validate that updates are provided
  if (!techniqueUpdates || Object.keys(techniqueUpdates).length === 0) {
   return res.status(400).json({
     success: false,
     message: "Update data is required in body.",
   });
 }
  //update the breathing technique by id and let the client know a body is required
  const returnedData = await updateTechniquebyID(techniqueID, techniqueUpdates);

// If the technique does not exist, return a 404 error
if (!returnedData) {
  return res.status(404).json({
    success: false,
    message: `Technique with ID ${techniqueID} not found.`,
  });
}
  //return the updated technique following res spec
  const updatedTechnique = {
    success: true,
    data: returnedData,
  };
  //respond to client
  res.json(updatedTechnique);
} catch (error) {
  console.error("Error updating breathing technique", error);
  res.status(500).send("Failed to update the technique.");
}
});

//5. DELETE request to delete a breathing technique
router.delete("/:id", async function (req, res) {
  try {
    //let client know id is req in params to be deleted
    const techniqueID = Number(req.params.id);
    //update the array to delete the technique
    let returnedData = await deleteTechnique(techniqueID);

    // Check if the returnedData is null or undefined (indicating no deletion occurred)
    if (!returnedData) {
      // Send a 404 Not Found status if the ID doesn't exist
      return res.status(404).json({
        success: false,
        message: `Technique with ID ${techniqueID} not found.`,
      });
    }

    //return the sucess resonse for deleted technique following res spec
    const deletedTechnique = {
      success: true,
      data: returnedData,
    };
    //respond to client
    res.json(deletedTechnique);
  } catch (error) {
    console.error("Error deleting breathing technique", error);
    res.status(500).send("Failed to delete the code.");
  }
});

export default router; //exports the router object
