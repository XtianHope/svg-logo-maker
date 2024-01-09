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
.then((answers) => {
    const { text, textColor, shapeChoice, shapeColor } = answers;
    // Creating SVG based on user input.
    const svgContent = `<svg width="300" height="200">
                          <text x="20" y="100" fill="${textColor}">${text}</text>
                          ${generateShape(shapeChoice, shapeColor)}
                       </svg>`;
    // Saving generated SVG to 'logo.svg'.
    fs.writeFileSync('logo.svg', svgContent);
    console.log('Generated logo.svg');
})
//Error handling
.catch((error) => {
    console.error(error);
  });
}

// Initiating logo creation process.
createLogo();