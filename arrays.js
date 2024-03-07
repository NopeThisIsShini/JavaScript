// arrays are mutable
let arr = [1,2,4,5,7]
//  index  0,1,2,3,4
console.log(arr)
arr[0]=343 //we can change as array is mutable
console.log(arr)
console.log(arr.length)
console.log(arr[2])
console.log(arr, typeof arr) // array is an object in JS
console.log(arr.join(" and "))// join all the array elements with a separator 

a =[2,45,72,32,3]
console.log(a.pop()) // remove the last element
console.log(a)
console.log(a.push("Shinigami")) // push element in last
console.log(a)
console.log(a.shift(), a); // remove the first element
console.log(a.unshift("Yoo!"), a) // push element in first position
console.log(delete a[4], a) // delete a particular element

// concat() used to join arrays to the given array

let c=[1,2]
let d=[3,5]
let e=[6,8]
console.log(c.concat(d,e)) // it returns a new array, does not change existing array
console.log(c)// array does not change

 // sort() is used to sort an array alphabetically.
 let p=[7,1,6]
 console.log(p.sort()) // p changes to [1,6,7] modifies the original array

 // splice() can be used to add new items or remove a number of items form a particular index to an array
 num=[1,2,3,4,5,6]
 console.log(num.splice(1,2), `now array is ${num}`)// splice(1,2) means 2 item is removed from the index 1
 console.log(num.splice(2,3,345,232), `new array is ${num}`)// splice(2,3,345,232) means 345,232 is added in the 2,3 index

 //slice() slices out a piece from an array, It creates a new array
 // slice returns a new array
 n=[1,46,76,343,22,1,134]
 console.log(n.slice(2))// it divide the array form index 2, o/p will be 76,343,22,1,134
 console.log(n.slice(0,3)) // it slices array in range 0 to 3 (index), it returns 1,46,76


 /* Loops in Array */
 let l = [1,43,75,23,64]
 // forEach loop
 l.forEach((value,index,arr) => {
    console.log(value, index, arr)
// o/p will be eg.  1,    0,  [1,43,75,23,64]
 });

 // forIn loop
 let obj = {
    a:1,
    b:3,
    c:2
 }
 for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(element)
        
    }
 }

 // map() creates a new array by performing some operation on each array element.
 let Arr =[2,4,16,6,25,22]
  
 let newArr = Arr.map((e)=>{
    return e**2
 })
 console.log(newArr)

 // filter() an array with values that passed a test create a new array
 const greaterThanSeven = (e)=>{ //greaterThanSeven is user-defined function which calculates element is greater than 7 or not
    if (e>7){
        return true         
    }
    return false
 }
 console.log(Arr.filter(greaterThanSeven))

 // reduce() method-> Reduces an array to a single value

 let arr2 =[1,2,3,4,5,6]
 const red=(a,b)=>{ // red is a function which add two numbers
    return a*b
 }
 console.log(arr2.reduce(red))
 // here reduce do, 1*2=2*3=6*4=24*5=120*6=720...




