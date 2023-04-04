class SVG {
    constructor() {
    this.text= "";
    this.shape= "";

    
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`;
    }
    setText(text,color) {
        if(text.length>4){
            throw new Error("Text must be less than 4 characters");
        }
        this.text= `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">"${text}"></text>`;
    }
    setShape(shape) {
        this.shape= shape.render();
    }
    setColor(textColor) {
        this.textColor= `${textColor}`;
    }
}

module.exports = SVG;