//include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user input
const questions = [
    {
    name: "text",
    message: "Choose up to 3 characters to enter",
    type: "input",
    },
    {
    name: "color",
    message: "Choose a color",
    type: "input",
    },
    {
    name: "shape",
    message: "Choose a shape",
    type: "input",
    },
]