function update(yesOrNo, valueToConvert, firstUnit, secondUnit, model){
    if (yesOrNo = "y"){
        const newLeftValue = 0;
        const newRightValue = 0;
        const newLeftUnit = firstUnit
        const newRightUnit = secondUnit
        return {
            ...model,
            leftValue: newLeftValue,
            leftUnit: newLeftUnit,
            rightValue: newRightValue,
            rightUnit: newRightUnit,
        }
    }else{
        const newLeftValue = 0;
        const newRightValue = 0;
        const newLeftUnit = secondUnit
        const newRightUnit = firstUnit
        return {
            ...model,
            leftValue: newLeftValue,
            leftUnit: newLeftUnit,
            rightValue: newRightValue,
            rightUnit: newRightUnit,
        }
    }
}

module.exports = {
    update
}