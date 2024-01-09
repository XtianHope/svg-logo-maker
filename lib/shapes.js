// Function to generate SVG shapes based on user input.
function generateShape(shape, color) {
    // Determining shape and creating corresponding SVG markup.
    switch (shape) {
        case 'circle':
          return `<circle cx="150" cy="100" r="50" fill="${color}" />`;
        case 'triangle':
          return `<polygon points="100,20 40,180 190,180" fill="${color}" />`;
        case 'square':
          return `<rect x="50" y="50" width="100" height="100" fill="${color}" />`;
        default:
          return '';
      }
    }