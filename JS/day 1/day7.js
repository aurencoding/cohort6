// Basic 0 - 150


// for (initialization ; condition ; inc/dec){
//     do stuff
// }

function basic() {

    for (let i = 0; i <= 150; i++) {
        console.log(i)
    }
}
// console.log(basic())







// Even only 0 - 256 

function even() {
    for (let i = 0; i <= 256; i += 2) {
        console.log(i)
    }

}
// console.log(even())







// Odd Only 0 - 256
// //  ???? is this best practice or should I have started at i=1 and had a different solution

function odd() {
    for (let i = 1; i < 256; i += 2) {
        console.log(i)
    }


}
// console.log(odd())

function odd() {
    for (let i = 0; i <= 256; i++) {
        if (i % 2 !== 0) {
            console.log(i)
        }
    }
}
// console.log(odd())







// Multiples of 5   0 - 256

function multiple() {
    for (let i = 0; i < 256; i += 5) {
        console.log(i)
    }
}
// // console.log(multiple())

function multiple() {

    for (let i = 0; i <= 256; i++) {
        if (i % 5 == 0)
            console.log(i)
    }
}
// // console.log(multiple())

// remember the modulus operator 





// perserve now counting   0  - 256
//         mult 5 print "Persevere"    
//         mult 5 && 10 print "Persevere Now"
//             else print value / #

// ?????? I don't know how to get Perservere to be printed on every fifth number or else print value / #

function counting(str) {
    for (let i = 0; i <= 256; i += 5) {
        console.log(i, str[i])
    }
    if ("Perservere")
}

// console.log(counting("Perservere"))



function counting() {
    for (let i = 0; i <= 256; i++) {
        if (i % 5 == 0 && i % 10 == 0) {
            console.log(i, "Perservere Now")
        }
        else if (i % 5 == 0) {
            console.log(i, "Perservere")
        }
        else { console.log(i) }
    }
}

// console.log(counting())







// Big sum - Return summ of every # from 0 - 50,000

function bigSum() {
    let count = 0
    for (let i = 0; i <= 50000; i++) {
        count = count + i
        console.log(i, count)
    }
    return count


}

// console.log(bigSum())

// Countdown by 4's (startnum, endNum) countdown from start by 4 at a time until reach endNum, print all value as countdown

function countdown() {
    for (let i = 400; i >= 2; i -= 4) {
        console.log(i)
    }


}

// console.log(countdown(400, 2))




function countdown(startNum, endNum) {
    for (let i = startNum; i >= endNum; i -= 4) {
        console.log(i)
    }
}

// console.log(countdown(400, 2))

// Flexible counter (startNum, endNum, mult)
//         count up  to value of multi, print each value until reach / surpass endNum
//         ie totalValue(6, 1500, 8)

function totalValue(startNum, endNum, multi) {
    for (let i = startNum; i >= multi; i++) {
        if (i >= endNum) {
            console.log(i)
        }
    }
}

// console.log(totalValue(6, 1500, 80))