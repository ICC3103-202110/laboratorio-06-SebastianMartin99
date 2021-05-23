function calculateTip(billAmount, percentage){
    return parseInt(billAmount)*parseInt(percentage)/100
}

function sum(billAmount, percentage){
    const x = parseInt(billAmount)*parseInt(percentage)/100
    return parseInt(billAmount)+x
}

function update(Bill, Percentage, model){
    const newBillAmount = Bill
    const newPercentage = Percentage
    const newTip = calculateTip(Bill, Percentage)
    const newTotal = sum(Bill, Percentage)
    return {
        ...model,
        billAmount: newBillAmount,
        percentage: newPercentage,
        tip: newTip,
        total: newTotal,
    }

}

module.exports = {
    update
}