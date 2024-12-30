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

const techniques = data; //assigns techniques as the variable to store the data from the array
//the code for the functions for each request will go here

// 1. Function to get all breathing techniques
export async function getAllTechniques() {
    return [...data];
}

// 2. Function to get a single breathing technique
//create an async function to get a technique by ID, it will have one parameter
export async function getTechniqueByID(id) {
//find the technique with the matching id
return techniques.find(function(technique) {
//check if the id provided is equal to the id
return technique.id === id;
});
}
