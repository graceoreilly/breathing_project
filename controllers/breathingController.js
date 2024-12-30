// import data from "../breathingDataset.json" assert { type: "json" }; //this should work so unsure why it has not? if this does not work, need the code below

import fs from "fs"; // importing File system module
import path from "path"; // importing path module - helps manage and work with file paths


// Dynamically load the JSON file
const __dirname = path.resolve(); // __dirname: A variable that holds this path, representing the current directory //Returns the absolute path of the directory where the script is running.
const filePath = path.join(__dirname, "./libs/breathingDataset.json");
//path.join(): Combines multiple path segments into a single path string.
// __dirname: The base path
// "breathingDataset.json": The filename to access.
const data = JSON.parse(fs.readFileSync(filePath, "utf8")); //Reads the file and returns the content as a string //data stores the parsed JSON object or array, which can now be worked with

//required when adding new techniques, initialises to ensure a new id is added when a new technique is added
let techniqueId = 1; // Start with an initial ID of 1
let techniques = data.map((technique) => ({ ...technique, id: techniqueId++ })); // Assign IDs to all techniques

// 1. Function to get all breathing techniques
export async function getAllTechniques() {
  return [...techniques];
}

// 2. Function to get a single breathing technique
//create an async function to get a technique by ID, it will have one parameter
export async function getTechniqueByID(id) {
  //find the technique with the matching id
  return techniques.find(function (technique) {
    //check if the id provided is equal to the id
    return technique.id === id;
  });
}

// 3. Function to add a new breathing technique
//create an async function called addNewTechnique, the newTechnique parameter will be the new data passed as an argument
export async function addNewTechnique(newTechnique) {
    //create a new variable to store the new technique info
    //it needs to update the id to the next id and add the new technique to the end of the array
    const created = 
    {...newTechnique,
        id: techniqueId++,
    };
    techniques = [...techniques, created];
    //return the newly created technique
    return created;
}