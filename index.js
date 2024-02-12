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

// Returns an instance of the corresponding shape class based on the user's shape choice and color
function getShape(shapeChoice, shapeColor) {
    switch (shapeChoice) {
      case 'circle':
        return new Circle(shapeColor);
      case 'triangle':
        return new Triangle(shapeColor);
      case 'square':
        return new Square(shapeColor);
      default:
        throw new Error('Invalid shape choice');
    }
  }


// Function to create SVG logo with user's responses.
function generateLogoSvg(text, textColor, shape) {
    const shapeSvg = shape.render();
    const textPosition = calculateTextPosition(shape, text);
  
    return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    ${shapeSvg}
    <text x="${textPosition.x}" y="${textPosition.y}" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
  </svg>`;
  }


// Function to try to get text to render on top of shape, rather than behind or underneath.
function calculateTextPosition(shape, text) {
    let textX = 0;
    let textY = 0;
  
    if (shape instanceof Circle) {
      textX = 150 - text.length * 10;
      textY = 100;
    } else if (shape instanceof Triangle) {
      textX = 70;
      textY = 100;
    } else if (shape instanceof Square) {
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