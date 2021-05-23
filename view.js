const figlet = require("figlet")
const chalk = require("chalk")
const inquirer = require("inquirer")

function getTitle(){
    return chalk.red(
        figlet.textSync(
            "Unit Converter App" ,
            {
                horizontalLayout: "full",
                font: "Nancyj-Underlined"
            }
        )
    )    
}

function getTable(model){
    const{leftValue} = model
    const{leftUnit} = model
    const{rightValue} = model
    const{rightUnit} = model
    return[
        {"leftValue": leftValue,
        "leftUnit": leftUnit,
        "rightValue": rightValue,
        "rightUnit": rightUnit}    
    ]
}

function inputForm(model){
    const {Bill, Percentage} = model
    const message = "Left temperature is source?"
    const tmpMessage = "Temperature value to convert?"
    return inquirer.prompt([
        {
            name: "Left temperature is source?",
            type: "input",
            message: message,
            default: Bill,
            validate: function(value){
                if (value === "y") {
                    return true
                }else if(value === "n") {
                    return true
                }else{
                    return "enter y or n (yes or no)"
                }
            }
        },
        {
            name: "Temperature value to convert?",
            type: "input",
            message: tmpMessage,
            default: Percentage,
            validate: function(value){
                if (isNaN(value)){
                    return "Erase and enter a number"
                }else{
                    return true
                }
            }
        }
    ])
}
function listForm(model){
    const {leftUnit, rightUnit} = model
    const firstMessage = 'From?'
    const secondMessage = "To?"
    const choices = ['Celcius', 'Fahrenheit', "Kelvin"]
    return inquirer.prompt([
        {
            name: 'First Unit',
            type: 'list',
            message: firstMessage,
            default: leftUnit,
            choices: choices
        },
        {
            name: 'Second Unit',
            type: 'list',
            message: secondMessage,
            default: rightUnit,
            choices: choices
        }
    ])
}


function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}

module.exports = {
    view,
    inputForm,
    listForm,
}