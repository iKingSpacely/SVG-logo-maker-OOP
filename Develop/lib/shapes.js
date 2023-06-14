class Shape { //setColor needs to be appended somwhere in here based on the shapes.test.js
    constructor () {
        this.color = ''; //this is always going to be a string to catch the user input/choice of their colors
        
    } 
    setColor(color) {
        // console.log(color);
        this.color = color;
    }
};

//this should render each specific shape in the correct sizes
class Square extends Shape {
    render() {
        return (`<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`)
    }
};

class Circle extends Shape {
    render() {
        return (`<circle cx="150" cy="100" r="80" fill="${this.color}" />`)
    }
};

class Triangle extends Shape {
    render() {
        return (`<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`)
    }
};

//this links the sizes to the main index page
module.exports = { Square, Triangle, Circle };