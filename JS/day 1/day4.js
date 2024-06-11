

// let is one of three ways instantiate a variable

// let arr = ["hello", "world", "this", "is", "an", "array"]

// console.log("arr", arr);
// console.log("arr(2)(2)", arr[2][2])

// let arr = [["hello"], ["world"], ["this", "is", "an", "array"]]

// console.log("arr(2)", arr[2][0][2])


// the first two gets you to the "this is an array" string, the 0 gets you to this, the 2 gets you to i in the this."




let myStr = "Hello World"

let split = myStr.split("")

console.log("split", split)

// if you have just quotes and no white space split at every individual letter

// if you have a white space between quotes can split between the words

// if you split at a letter like "o" it gets rid of o because o is the boundary

// same reason you don't have an indices for the white space--if split at (" ")


let join = split.join()
console.log("join", join)


function findArea(l, w){
    console.log("len:", l, "width:", w)

// let area = l * w
// return area

// this is called a pure function ^

return l * w



}

console.log(findArea(10,100))