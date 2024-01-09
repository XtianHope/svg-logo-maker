// Importing needed modules: 'inquirer' for user prompts, 'fs' for file handling.
const inquirer = require('inquirer');
const fs = require('fs');


// Function to create a logo based on user input.
function createLogo() {
// Prompt for users for text, text color, shape choice, and shape color.
inquirer
.prompt([
  { type: 'input', name: 'text', message: 'Enter up to three characters for the text:' },
  { type: 'input', name: 'textColor', message: 'Enter text color:' },
  { type: 'list', name: 'shapeChoice', message: 'Choose a shape:', choices: ['circle', 'triangle', 'square'] },
  { type: 'input', name: 'shapeColor', message: 'Enter shape color:' },
])

}