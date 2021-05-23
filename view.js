const figlet = require("figlet")
const chalk = require("chalk")
const inquirer = require("inquirer")

function getTitle(){
    return chalk.green(
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
    const billMessage = "Bill Amount?"
    const tipMessage = "Tip(%)?"
    return inquirer.prompt([
        {
            name: "Bill",
            type: "input",
            billmessage: billMessage,
            default: Bill,
            validate: function(value){
                if (isNaN(value)){
                    return "Erase and enter a number"
                }else{
                    return true
                }
            }
        },
        {
            name: "Percentage",
            type: "input",
            tipMessage: tipMessage,
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


function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}

module.exports = {
    view,
    inputForm,
}