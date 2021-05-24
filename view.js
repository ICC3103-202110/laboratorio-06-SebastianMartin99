const figlet = require("figlet")
const chalk = require("chalk")
const inquirer = require("inquirer")

function getTitle(){
    return chalk.blue(
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
        {leftValue: leftValue,
        leftUnit: leftUnit,
        rightValue: rightValue,
        rightUnit: rightUnit}    
    ]
}

function inputForm(){
    const {yesOrNo, valueToConvert} = 0
    const message = "Left temperature is source?(yes/no)"
    const tmpMessage = "Temperature value to convert?"
    return inquirer.prompt([
        {
            name: "yesOrNo",
            type: "input",
            message: message,
            default: yesOrNo,
            validate: function(value){
                if (value === "yes") {
                    return true
                }else if(value === "no") {
                    return true
                }else{
                    return "Please, erase and enter yes or no."
                }
            }
        },
        {
            name: "valueToConvert",
            type: "input",
            message: tmpMessage,
            default: valueToConvert,
            validate: function(value){
                if (isNaN(value)){
                    return "Please, erase and enter a number."
                }else{
                    return true
                }
            }
        }
    ])
}
function listForm(){
    const {firstUnit, secondUnit} = 0
    const firstMessage = 'From?'
    const secondMessage = "To?"
    const choices = ['Celcius', 'Fahrenheit', "Kelvin"]
    return inquirer.prompt([
        {
            name: 'firstUnit',
            type: 'list',
            message: firstMessage,
            default: firstUnit,
            choices: choices
        },
        {
            name: 'secondUnit',
            type: 'list',
            message: secondMessage,
            default: secondUnit,
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