// import data from "../breathingDataset.json" assert { type: "json" };

import fs from "fs"; // importing File system module
import path from "path"; // importing path module - helps manage and work with file paths

// Dynamically load the JSON file
const __dirname = path.resolve(); // __dirname: A variable that holds this path, representing the current directory //Returns the absolute path of the directory where the script is running.
const filePath = path.join(__dirname, "breathingDataset.json");
//path.join(): Combines multiple path segments into a single path string.
// __dirname: The base path
// "breathingDataset.json": The filename to access.
const data = JSON.parse(fs.readFileSync(filePath, "utf8")); //Reads the file and returns the content as a string //data stores the parsed JSON object or array, which can now be worked with

//the code for the functions for each request will go here

export async function getAllTechniques() {
    return [...data];
}