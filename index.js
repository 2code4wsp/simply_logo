//include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Triangle, Square } = require("./lib/shapes.js");
const SVG = require("./lib/svg.js");

// array of questions for user input
const questions = [
    {
        name: "text",
        message: "Choose up to 3 characters to enter",
        type: "input",
    },
    {
        name: "color",
        message: "Choose a shape color",
        type: "input",
    },
    {
        name: "textColor",
        message: "Choose a text color",
        type: "input",
    },
    {
        name: "shape",
        message: "Choose a shape",
        type: "list",
        choices: ["circle", "square", "triangle"],
    },
]

function askQuestions() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
        let shape;
        if (answers.shape === "circle") {
            shape = new Circle()
        }
        if (answers.shape === "square") {
            shape = new Square()
        }
        if (answers.shape === "triangle") {
            shape = new Triangle()
        }
        shape.setColor(answers.color)
        const svg = new SVG()
    })
}
askQuestions()
call 

