console.log("This is strings tutorials")
let a ="Shini"
console.log(a)
console.log(a[0]) // want to access particular element
console.log(a[6])
console.log(a.length) // find string length
let real_name = "shini"
let friend  = "Santa"
console.log("His name is "+ real_name+ "and his friend name is "+friend)
console.log(`His name is ${real_name} and his friend name is ${friend}`)// template literal syntax

let b = "Ramkumar"
console.log(b.toUpperCase()) // to make string upperCase
console.log(b.toLowerCase()) // to make string lowerCase
console.log(b.slice(1,4)) // to access string index 1 to 4 , not including [4]
console.log(b.slice(2)) // to access the remaining string from index [2]
console.log(b.concat(a, "Pro")) // concat 2 or more than two strings