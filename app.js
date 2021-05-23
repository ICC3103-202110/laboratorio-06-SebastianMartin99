const {inputForm} = require("./view")
const {printTable} = require("console-table-printer")


async function app(state, update, view){
    while (true){
        const {model, currentView} = state
        const {title, table} = currentView
        console.clear()
        console.log(title)
        printTable(table)
        const {Bill, Percentage} = await inputForm(model)
        console.log(Bill, Percentage)
        const updatedModel = update(Bill, Percentage, model)
        state = {
            ...state,
            model: updatedModel,
            currentView: view(updatedModel)
        }
    }
}

module.exports = {
    app
}
