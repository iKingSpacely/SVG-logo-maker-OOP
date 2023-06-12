class Shape {
    constructor (color) {
        this.color = color;

    }
};

class Square extends Shape {
    render() {
        return ('<rect x="90" y="40" width="120" height="120" fill="dodgerblue" />')
    }
};

class Circle extends Shape {
    render() {
        return ('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>')
    }
};

class Triangle extends Shape {
    render() {
        return ('<polygon points="150, 18 244, 182 56, 182" fill="bisque" />')
    }
};

module.exports = { Square, Triangle, Circle };