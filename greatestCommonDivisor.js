let greatestCommonDivisor = (firstNum, secondNum) => {  
    // this base case stops the recursion once secondNum hits zero (falsey)
    if (!secondNum) {  
        return firstNum;  
    }  
    // recursively call greatestCommonDivisor function with params secondnum & firstNum modulo secondNum
    return greatestCommonDivisor(secondNum, firstNum % secondNum);  
 };  

 module.exports = greatestCommonDivisor