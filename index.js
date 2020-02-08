// Your code here
function mapToNegativize(sourceArray) {
    const newArray = []
    for (const element of sourceArray) {
        newArray.push(element * -1)
    } 
    return newArray
}

function mapToNoChange(sourceArray) {
    const newArray = []
    for (const element of sourceArray) {
        newArray.push(element)
    } 
    return newArray
}

function mapToDouble(sourceArray) {
    const newArray = []
    for (const element of sourceArray) {
        newArray.push(element * 2)
    } 
    return newArray
}

function mapToSquare(sourceArray) {
    const newArray = []
    for (const element of sourceArray) {
        newArray.push(element ** 2)
    } 
    return newArray
}

function reduceToTotal(sourceArray, startingPoint = 0) {
    let total = startingPoint
    for (const element of sourceArray) {
        total += element 
    } 
    return total
}

function reduceToAllTrue(sourceArray) {
    for (const element of sourceArray) {
        if (element === false) {
            return false
        } 
    } 
    return true
}

function reduceToAnyTrue(sourceArray) {
    for (const element of sourceArray) {
        if (element === true) {
            return true
        } 
    } 
    return false
}