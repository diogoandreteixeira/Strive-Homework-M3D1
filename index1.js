/*

1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/

function summed (x, y) {
    if(x===y) {
        return (x + y) * 3
    } else {
        return x + y
    }
}
console.log("EXERCICE 1")

console.log(summed(3, 3))
console.log(summed(5,8))


/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/

function checkFifty (x, y) {
    if(x===50 || y===50 || x+y ===50){
        return true
    } else {
        return false
    }
}

console.log("EXERCICE 2")

console.log(checkFifty(25, 25))
console.log(checkFifty(50, 25))

/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/

function deleteMe (string, position) {
    return string.slice(0, position) + string.slice(position + 1) // Concatenating both strings
}

console.log("EXERCICE 3")

console.log(deleteMe("MotorBike", 4))
/*

4)
 Create a function to find the largest of three given integers.
*/
function bigBiggest (x,y,z) {
    if(x >= y && z) {
        return x
    } else if (y >= x && z) {
        return y
    } else {
        return z
    }
}

console.log("EXERCICE 4")

console.log(bigBiggest(10, 23, 15))
/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/
function inRange (x, y) {
    if(((x && y >= 40) && (x && y <= 60)) || ((x && y >= 70) && (x && y <= 100))) {
        return true
    } else {
        return false
    }
}

console.log("EXERCICE 5")
console.log(inRange(45, 99))
/*
6) 

Create a function to create a new string of specified copies (positive number) of a given string.
*/

function copies (string, number) {
    if (number <= 0) {
        return undefined
    } else {
        let otherStr = ""
        for(let i = 0; i < number; i++) {
            otherStr = otherStr + " " + string
        }
        return otherStr
    }
}

console.log ("EXERCICE 6")

console.log(copies("school", 5))

/*

7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/

function displayCity (string) {
    if(string.startsWith("Los") || string.startsWith("New")) {
        return string
    } else {
        return "Try Again !"
    }
}

console.log("EXERCICE 7")

console.log(displayCity("Los Angeles"))
console.log(displayCity("Las Vegas"))

// 8)
// Create a function to calculate the sum of three elements of a given array of integers of length 3.

console.log("EXERCICE 8")

const totalSum = (...args) => {
    let sum = 0
    for(let i=0; i < args.length; i++) {
        sum = sum + args[i]
    }
    return sum
}

console.log(totalSum(6, 7, 9))


// 9)
// Create a function to test whether an array of integers of length 2 contains 1 or a 3. 

console.log("EXERCICE 9")

let arrayEx = [1, 2]
function testInt() {
    if((arrayEx.includes(1)) || (arrayEx.includes(3))) {
        return true 
    } else {
        return false
    }
}
console.log(testInt())

// 10)
// Create a function to test whether an array of integers of length 2 does not contain 1 or a 3

console.log("EXERCICE 10")

let array = [5, 2]
function testInt2() {
    if((array.includes(1)) || (array.includes(3))) {
        return false 
    } else {
        return true
    }
}
console.log(testInt2())

// 11)
// Create a function to find the longest string from a given array of strings.

function longestStr (x, y, z) {
    if(x.length >= y.length  && z.length ) {
        return x
    } else if (y.length  >= x.length  && z.length ) {
        return y
    } else if (z.length  >= x.length  && y.length ) {
        return z
    }
}

console.log("EXERCICE 11")

console.log(longestStr("pb", "bol", "ball"))

// 12)
// Create a function to find the types of a given angle.
//  Types of angles:
//    Acute angle: An angle between 0 and 90 degrees.
//    Right angle: An 90 degree angle.
//    btuse angle: An angle between 90 and 180 degrees.
//    Straight angle: A 180 degree angle.

console.log("EXERCICE 12")

function angle(angleValue) {
    if (angleValue < 90 && angleValue > 0) {
        return "acute angle"
    } else if (angleValue === 90) {
        return "right angle"
    } else if (angleValue < 180 && angleValue > 90) {
        return "Obtuse angle"
    } else {
        return "ooooooppppsss"
    }
}

console.log (angle(179))

// 13)
// Create a function to find the index of the greatest element of a given array of integers

console.log("EXERCICE 13")

function findAndReturnIndex(numbers){
    let greatestElement = numbers[0]
    let greatestElementIndex = 0

    for (let i=1; i < numbers.length; i++) {
        if (numbers[i] > greatestElement){
            greatestElement = numbers[i]
            greatestElementIndex = i
        }
    }
    return greatestElementIndex
}


console.log(findAndReturnIndex([3, 6, 2])) // Never forget the Square brackets if you want to pass an array

// 14)
// Create a function to get the largest even number from an array of integers.

console.log("EXERCICE 14")

const findLargestEvenNumber = function (arr) {
    const evenNums = arr.filter((n) => n % 2 === 0);
    return evenNums.sort((a, b) => a - b)[evenNums.length - 1];
  };
  
  console.log(findLargestEvenNumber([23, 65, 2, 13]))

// 15)
// Create a function to check from two given integers, whether one is positive and another one is negative.

console.log("EXERCICE 15")

const checkSign = function (a, b){ 
    if((a < 0 && b > 0) || (a > 0 && b < 0)) {
        return true 
    } else {
        return false
    }
}

console.log(checkSign(-1, -7))

// 16)
// Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case.

console.log("EXERCICE 16")

function newString (str) {
    if(str.length > 3) {
        return str.slice(0, 3).toUpperCase() + str.slice(2 + 1)
    } else {
        str.toUpperCase()
    }
}

console.log(newString("let there be Peace for Ukrain!"))

// 17)
// Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

console.log("EXERCICE 17")

function calcSum (x, y) {
    if ((x + y >= 50) && (x + y <= 80)) {
        return 65
    } else {
        return 80
    }
}

console.log(calcSum(30, 30))

 /* 18)
Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example: 
If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34". */

console.log("EXERCICE 18")

function convert(x) {
    if(x.includes(3)) {
        return "Diego"
    } else if (x.includes(5)) {
        return "Riccardo"
    } else if ( x.includes(7)) {
    return "Stefano"
    }
}

console.log(convert([0, 5, 1, 2]))
console.log(convert([0, 1, 1, 7]))


// 19)
// Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC

console.log("EXERCICE 19")

function returningStrings (str1, str2) {
    if(str1.typeof === str2.typeof) {
        return str1[0] + str2[0]
    } else {
        return "You're Fucked Buddy!"
    }
}

console.log(returningStrings("Fuck", "Umbilicus Motherless"))
