// Importing needed modules: 'inquirer' for user prompts, 'fs' for file handling.
const inquirer = require('inquirer');
const fs = require('fs');
const { generateShape } = require('./lib/shapes');


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
.then(handleUserInput)
.catch(handleError);
}

// Extract user inputs.
function handleUserInput(answers) {
const { text, textColor, shapeChoice, shapeColor } = answers;
const svgContent = generateLogoSvg(text, textColor, shapeChoice, shapeColor);
saveSvgToFile(svgContent);
}

// Error handling.
function handleError(error) {
console.error(error);
}


// Function to create SVG logo with user's responses.
function generateLogoSvg(text, textColor, shapeChoice, shapeColor) {
    const shapeSvg = generateShape(shapeChoice, shapeColor);
    const textPosition = calculateTextPosition(shapeChoice, text);
  
    const svgContent = `<svg width="300" height="200">
                          ${shapeSvg}
                          <text x="${textPosition.x}" y="${textPosition.y}" fill="${textColor}">${text}</text>
                        </svg>`;
    return svgContent;
  }

// Initiating logo creation process.
createLogo();