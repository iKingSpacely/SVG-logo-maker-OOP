const fs = require('fs');
const inquirer = require('inquirer');
const { Square, Triangle, Circle } = require('./Develop/lib/shapes');

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
    .then(({ characters, colors, shape, text_color }) => {createSVG(characters, colors, shape, text_color)

    })

    // .then((file) => {
    //     const content = generateShapes(file)
    //     fs.writeFile("logos.svg", content, (error) => error ? console.log("Something went wrong!", error) : console.log("Logo file created successfully!"))
    // })

function createSVG(characters, colors, shape, text_color) {
    let userShape;
    if (shape = 'Triangle') {
        userShape = new Triangle();
    } else if (shape = 'Square') {
        userShape = new Square();
    } else if (shape = 'Circle') {
        userShape = new Circle();
    } else {
        alert('Please restart the prompts!');
        return 0
    } 
    
    // console.table({"characters": characters, "colors": colors, "shape": shape, "text_color": text_color})

}
