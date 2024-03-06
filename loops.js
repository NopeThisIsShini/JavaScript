console.log("I am the tutorial on loops")
let a =1;
for (let i = 0; i < 5; i++) {
    console.log(a+i);
    
}
let obj ={
    name: "Shini",
    role: "Programmer",
    company: "NopeThisIsShini"
}
for (const key in obj){ // if we want to print key of object we use for-in loop
    const element = obj[key];
    console.log(key,element);
}
for ( const c of "Shini"){ // for-of loop is used for iterable data-structure like array and string
    console.log(c)
}
let b=0;
while(b<6){ // while loop structure
    console.log(b);
    b++;
}
let i =10;
do{ // do while loop
    console.log(i)
    i++;
}while(i<4);
