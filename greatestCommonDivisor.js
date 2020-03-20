let greatestCommonDivisor = (firstNum, secondNum) => {  
    if (firstNum < 0){
        firstNum = -firstNum
    }

    if (secondNum < 0){
        secondNum = -secondNum
    }

    if (Number.isInteger(firstNum) && Number.isInteger(secondNum) && !(firstNum===0 && secondNum===0)){

        // this base case stops the recursion once secondNum hits zero (falsey)
        if (!secondNum) {  
            return firstNum 
        }  
        // recursively call greatestCommonDivisor function with params secondnum & firstNum modulo secondNum
        return greatestCommonDivisor(secondNum, firstNum % secondNum)
    }
    return "Please enter two integers which are not both zero"  
 }  

 module.exports = greatestCommonDivisor