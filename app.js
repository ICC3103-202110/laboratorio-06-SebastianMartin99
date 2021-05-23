const {inputForm, listForm} = require("./view")
const {printTable} = require("console-table-printer")


async function app(state, update, view){
    while (true){
        const {model, currentView} = state
        const {title, table} = currentView
        console.clear()
        console.log(title)
        printTable(table)
        const {yesOrNo, valueToConvert} = await inputForm()
        const {firstUnit, secondUnit} = await listForm()
        const updatedModel = update(yesOrNo, valueToConvert, firstUnit, secondUnit, model)
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
