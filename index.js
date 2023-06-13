const fs = require('fs');
const inquirer = require('inquirer');
const { Square, Triangle, Circle } = require("./lib/shapes.js");

inquirer
    .prompt ([
        {
            type: 'input',
            message: 'Please enter up to Three characters',
            name: 'text',
            validate: textInput => {
                if (textInput.length <= 3) {
                    return true;
                } return ('Please enter up to three characters');
            }
        },
        {
            type: 'input',
            message: 'Please input a color.',
            name: 'colors',
        },
        {
            type: 'list',
            message: 'Please select a shape.',
            name: 'shape',
            choices: ['Square', 'Circle', 'Triangle'],
        },

    ])

    // .then((file) => {
    //     const content = generateShapes(file)
    //     fs.writeFile("logos.svg", content, (error) => error ? console.log("Something went wrong!", error) : console.log("Logo file created successfully!"))
    // });