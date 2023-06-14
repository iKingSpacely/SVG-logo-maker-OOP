class SVG {
    constructor (){
        this.text = '';
        this.shape2 = '';
    }

    render() {
        return (`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.text}${this.shape2}</svg>`)
    }
    setText(characters, text_color) {
        this.text = `<text x="100" y="100" font-size="20" fill="${text_color}">${characters}</text>`
    }
    setShape(userShape) {
        this.shape2 = userShape.render()
    }
};


module.exports = SVG;