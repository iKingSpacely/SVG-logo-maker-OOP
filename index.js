const fs = require('fs');
const inquirer = require('inquirer');
const { Square, Triangle, Circle } = require('./Develop/lib/shapes');
const SVG = require('./Develop/lib/svg');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Please enter up to Three characters',
            name: 'characters',
            validate: textInput => {
                if (textInput.length <= 3) {
                    return true;
                } return ('Please enter up to three characters');
            }
        },
        {
            type: 'input',
            message: 'Please input a color for the shape.',
            name: 'colors',
        },
        {
            type: 'list',
            message: 'Please select a shape.',
            name: 'shape',
            choices: ['Square', 'Circle', 'Triangle'],
        },
        {
            type: 'input',
            message: 'Please input a color for the text.',
            name: 'text_color',
        },

    ])
    
    .then(({ characters, colors, shape, text_color }) => {
        const content = generateShapes(characters, colors, shape, text_color)
        return content
    })

    .then((content) => {
        fs.writeFile("logos.svg", content, (error) => error ? console.log("Something went wrong!", error) : console.log("Logo file created successfully!"))
    })

function generateShapes(characters, colors, shape, text_color) {
    var userShape;
    if (shape === 'Triangle') {
        userShape = new Triangle();
    } else if (shape === 'Square') {
        userShape = new Square();
    } else if (shape === 'Circle') {
        userShape = new Circle();
    } else {
        alert('Please restart the prompts!');
        return 0
    } 

    // console.table({"characters": characters, "colors": colors, "shape": shape, "text_color": text_color})
    userShape.setColor(colors)
    return generateSVG(characters, text_color, userShape)
}

function generateSVG(characters, text_color, userShape) {
    let svg = new SVG()
    // console.log(characters, text_color);
    svg.setText(characters, text_color)
    svg.setShape(userShape)
    return svg.render()
}
