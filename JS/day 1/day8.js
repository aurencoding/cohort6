

let car = {
    // key : value
    make: "ford",
    model: "edge",
    color: "black",
    year: 2008, 
    mileage: 100000,
    friends: ["shawn", "andrew", "pat", "jonathan", "auren"],
    isOnline: true
}

// back tick is another way to make a string `whoa`

let ok = 23
let str = "hello 'ppl' how" + ok + "someMore"
let test = `another way to make a string`


console.log(car.model)

console.log(car.friends[1])

// car[0].model = "mustang"
// console.log(car[0].model)
// ^^ this is not working why


// console.log(str)

// template literals allow us to call things without concatinators
// template literal is back tick `
// within template literal: ${str}

// only backticks give you the power to use ${bling}

// console.log(String)

// console.log(Object)











// Michael's class notes:

reverse a String
// strings are immutable
// make function
// take in a string
// convert str to []
// make loop
// make a empty [] to hold the new values
// convert that back to a string
function reverseString(input) {
    // console.log(input)
    let result = []       //empty array to hold values from loop
    let split = input.split("")    // .split(") converts a string to a array
    // console.log("spilt", split)
    for (let i = 0; i < split.length; i++) {
        // console.log("i:", i, "split[i]", split[i])
                result.unshift(split[i])                         //unshift() puts item in front of array
        // console.log("result", result, "split[i]", split[i])
    }
// console.log("result", result.join(""))
return result.join("")    // .join("")  converts the array back to a string
}
console.log(reverseString("abcdefghijklmnopqrstuvwxyz"))