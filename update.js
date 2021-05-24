function temperatureConverter(x, y, z){
    if (y === "Fahrenheit" && z === "Fahrenheit"){
        return parseInt(x)
    }if (y === "Fahrenheit" && z === "Celcius"){
        return (parseInt(x)-32)/1.8
    }if (y === "Fahrenheit" && z === "Kelvin"){
        return (5/9)*(parseInt(x)-32) + 273.15
    }if (y === "Celcius" && z === "Celcius"){
        return parseInt(x)
    }if (y === "Celcius" && z === "Fahrenheit"){
        return parseInt(x)*1.8 + 32
    }if (y === "Celcius" && z === "Kelvin"){
        return parseInt(x) + 273.15
    }if (y === "Kelvin" && z === "Kelvin"){
        return parseInt(x)  
    }if (y === "Kelvin" && z === "Celcius"){
        return parseInt(x) - 273.15 
    }if (y === "Kelvin" && z === "Fahrenheit"){
        return 1.8*(parseInt(x) - 273.15) + 32
    }           
}

function update(yesOrNo, valueToConvert, firstUnit, secondUnit, model){
    if (yesOrNo === "y"){
        const newLeftUnit = firstUnit
        const newRightUnit = secondUnit
        const newLeftValue = valueToConvert
        const newRightValue = temperatureConverter(valueToConvert, firstUnit, secondUnit)
        return {
            ...model,
            leftValue: newLeftValue,
            leftUnit: newLeftUnit,
            rightValue: newRightValue,
            rightUnit: newRightUnit,
        }
    }else{
        const newLeftUnit = secondUnit
        const newRightUnit = firstUnit
        const newLeftValue = temperatureConverter(valueToConvert, firstUnit, secondUnit)
        const newRightValue = valueToConvert
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