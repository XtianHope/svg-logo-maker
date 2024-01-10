// Import necessary modules
const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

// Function to initiate logo creation based on user response
function createLogo() {
  inquirer
    .prompt([
      { type: 'input', name: 'text', message: 'Enter up to three characters for the text:' },
      { type: 'input', name: 'textColor', message: 'Enter text color:' },
      { type: 'list', name: 'shapeChoice', message: 'Choose a shape:', choices: ['circle', 'triangle', 'square'] }, 
      { type: 'input', name: 'shapeColor', message: 'Enter shape color:' }, 
    ])
    .then(answers => {
      const shape = getShape(answers.shapeChoice, answers.shapeColor);
      const svgContent = generateLogoSvg(answers.text, answers.textColor, shape);
      saveSvgToFile(svgContent);
    })
    .catch(handleError);
}

// Function to handle and display errors
function handleError(error) {
  console.error(error);
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
                          <text x="${textPosition.x}" y="${textPosition.y}" fill="${textColor}" font-family="Arial, sans-serif" font-weight="bold">${text}</text>
                        </svg>`;
    return svgContent;
  }


// Function to try to get text to render on top of shape, rather than behind or underneath.
function calculateTextPosition(shapeChoice, text) {
    let textX = 0;
    let textY = 0;
  
    if (shapeChoice === 'circle') {
      textX = 150 - text.length * 10;
      textY = 100;
    } else if (shapeChoice === 'triangle') {
      textX = 70;
      textY = 100;
    } else if (shapeChoice === 'square') {
      textX = 65;
      textY = 120;
    }
  
    return { x: textX, y: textY };
  }

  
// Function to save SVG to file.
function saveSvgToFile(svgContent) {
    fs.writeFileSync('logo.svg', svgContent);
    console.log('Generated logo.svg');
  }

// Initiating logo creation process.
createLogo();