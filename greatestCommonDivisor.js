let greatestCommonDivisor = (firstNum, secondNum) => { 
    // test for negative nums 
    if (firstNum < 0){
        firstNum = -firstNum
    }

    if (secondNum < 0){
        secondNum = -secondNum
    }

    // if provided params are both integers which are not both zero
    if (Number.isInteger(firstNum) && Number.isInteger(secondNum) && !(firstNum===0 && secondNum===0)){

        // this base case stops the recursion once secondNum hits zero (falsey)
        if (!secondNum) {  
            return firstNum 
        }  
        // recursively call greatestCommonDivisor function with params secondnum & firstNum modulo secondNum
        return greatestCommonDivisor(secondNum, firstNum % secondNum)
    }
    // error message in case of incorrect parameters
    return "Please enter two integers which are not both zero"  
 }  

 module.exports = greatestCommonDivisor