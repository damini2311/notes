// let a = 10;
// let b = 5;
// // let ans = a + b;
// console.log(ans);

// function sum(p, q) {
//   let r = p + q;
//   return r;
// }
// console.log(sum(a, b));

// let a = "damini";
// let b = "saini";

// let c = a + " " + b;
// console.log(typeof c);

// let d = c.split(" ");
// console.log(d);

// let e = d.join();
// console.log(e);
// console.log("hello beginner");

// /* .....Javascript -> it is single threaded, synchronous, multi-paradigm and dynamic programming language.
//   ! code of execution will be line by line.
// */

// //....How javascript runs the code...

// let a = 10; //9

// console.log(a); //11 -- printing the output

// function sum(){  //13
//     let b = 20;   //14
//     console.log(a+b)  //15
// }
// sum(); //function invokation //function call //17

// #1. Execution Context -- >  anonymous(Global execution context).
// variable takes memory or memory allocation

//     Execution Context

//memory -> variable environment
//code -> thread of execution

/*        memory    code
        |        |         |
        | a: unde|   ..    |
        |        |   ..    |memory   code  |
        | console.log(a);  | a: 10; ans       |         |
        |        |         |
        |  sum:{..}| b:undefine        |
        |___sum() 
                  | b:20
                  console.log(a+b) execution context |a+b: 30 ans|
                  |          |
        
        _____|_________|
*/

/*#1. Variables and Data Types*/

// how many types of variables exist in javascript

//there are total three types of variables in javascript as mentions below.

//1. var. (es5)(global scope)   //before es5, es6 - EcmaScript - javascript update(2015 developers majorly worked with var).

//2. let. (es6)(block scope)

//3. const. (es6)(block scope)

//Global Scope.

// var a = 10; //complete variable

// //{} // Block Scope

// {console.log(a)}; //damini house

// function foo(){     // dev house //functional scope
//     console.log(a);
// }
// foo();

// console.log(a); // global scope

//expectected output  - 10
//                      10

// var a = "damini";  // global scope --> uttar pradesh  update

// {
//     let a = "dev";   // block scope  --> shamli ..limited
//     console.log(a);
// }

// console.log(a);

// output ->  dev, damini

// var - it can be re-assing and re-declare
//let - it can re assign but not re- declare

//# Hoisting

// console.log(name);
// sum();

// function sum(){
//     console.log("damini")
// }
// var name = "damini"

//const // neither re-declare nor re-assign

// when you to do some api calls then declare the call with this const variable

//............................Data Types....................

/* 1. Primitive datatype -

      a. string
      b. symbol()
      c. number.
      d. null.
      e. undefined.
      f. BigInt()
*/

/*  2. non-primitive datatypes
      
      a. object --> {...} curly brackets
      b. array  --> [...] square brackets
      c. functions(){...}
*/

// 2.  parameters and arguments

// let a = 1;
// let b = 2;

// function Sum(num1, num2, callback){ //num1 and num2 are parameters
//     // console.log(`Sum = ${num1+num2}`);

//     return `Sum is = ${num1+num2}`
// }

// Sum(a, b, function(cbcontainer){
//     console.log(cbcontainer);  // print
// });  //  Here 'a' and 'b' both are the Arguments --> reference argument // direct invoke

// When we need to declare a function?
//  jab bhi koi kaam jaadu se karwana ho to function ke andar logic likh kar daal do

////////////                 Session 2                               /////////

// #2.   Expressions and Operators.

/*1. Arithematic operator
         
                    +  -  addition
                    -  -  subtraction 
                    /  -  division
                    *  -  multiplication
                    %  -  reminder
            */

/*2. Assignment operator

                    *=
                    +=
                    -=
                    /=
            */

/*3.  Relational Operator/ Comparision operator
                    
                    >=
                    <=
                    ==    -   equal to - only value should be equal
                    ===   -  strict equality - typeof and value both should be equal
                    >==
                    <==
            */

/*4   Logical Operator/ Conditional operator 

                    && - AND operator
                    || - OR operator
                    !  - not equal to
                    ?  - when the particular value is true
              */

/*5. Ternary Operator
               
                 {condition ? "hello" : "damini"};
            */

// #3.   Conditional Statements.

//1. if else
//2. if else if
//3. switch cases.

// #4.   Loops.

//1. for loop.

// for(initialization; condition; updation){
//     //code
// }

//2. while loop.

// initialization
// while(condition){
//     //code
// }

//3. do while loop.

// do{
//     //code
//     // updation
// }while(condition)

// #5.   Strings and String methods(damini).

//strings are mutable which means once we assign the value it could never be changed.
//A string is a sequence of characters and can contain letters, numbers, symbols and even spaces.

//# string methods

// 1. toString() - it changes the array to string
// let arr = [1,2,3,4];

// let val = arr.toString();
// console.log(typeof val);

//2. toUpperCase(); - it changes small character to upper case.

//     let str = "damini";

//     let name =  str.toUpperCase();
//     console.log(name);

//3. toLowerCase(); - it changes the upper characters to lower case

// let str = "DAMINI";

// let val = str.toLowerCase();

// console.log(val);

//4.  concat()/+ - it adds to strings

// fname = "damini",
// lname = "saini"

// printFullName = fname.concat(" ",lname);

// console.log(printFullName);

//5. slice()/substring().

// let nam = "damini";

// let val=nam.slice(1,4);

// console.log(val);

//6. indexOf() and lastIndexOf() -- first index finds

// let name = "damini saini";

// let val = name.indexOf("saini");

// console.log(name.lastIndexOf("saini"));

// #6.   Arrays and Array method(dev).

//arrays are immutable which means once  we assign some values it could be change

//  Array Methods

// 1. push() method. - it adds element inside the array from last.

//     let arr = [1, 2, 3];

//     arr.push(4, 5);

// console.log(arr);

//  2. pop() method - it removes element from the last.

// arr.pop();

// console.log(arr);

// arr.pop();

// console.log(arr)

// arr.pop()

// console.log(arr);

// arr.pop()

// console.log(arr);

// 3.   shift() method - it removes element from starting.

// arr.shift();

// console.log(arr);

// arr.shift();

// console.log(arr)

// 4. unshift() - it add element from starting

//         arr.unshift(1,2);

//         console.log(arr);

// // 5. slice() --

//   let val = arr.slice(0,3);

//   console.log(arr);

// 6. splice method

// arr.splice(startingInde, DeleteItems, AddItems)

// arr.splice(1, 3, 10, 22, 15);

// console.log(arr);

// #7.   forEach(), map(), filter() and reduce().

//..........Advance Javascript

// #1.  call.

// let name = {
//     fname:"damini",
//     lname:"saini",
//     // printFullName: function(){
//     //     console.log("fullname is", this.fname + " " + this.lname);
//     // }
// }

// //***   this - this is the keyword in javascript which is used to access the properties of object.

// let name2 = {
//     fname:"dev",
//     lname:"kumar",
//     // printFullName:function(){
//     //     console.log("fullname is", this.fname + " " + this.lname);
//     // }
// }

// const printFullName = function(username, city){
//     console.log("fullname is", this.fname + " " + this.lname + " " + username + " she lives in" + city);
// }

//call method

// printFullName.call(name, "damini1234", "shamli");
// printFullName.call(name2, "damini1234", "shamli");

// apply method

// let arr = ["shamli", "damini1223", "unmarried", "software engineer"];

// printFullName.apply(name, "damini","shamli");

//bind method

// const result = printFullName.bind(name, "damini", "shamli");

// result();

// name2.printFullName();

// 2.  Closures..

// function damini(){

//     let a = 10;  //scope of a depends on lexical environment.
//                 // lexical environment created when whenever execution context is created

//              //LEXICAL ENVIRONMENT/heart of damini OF FUNCTION 'X'

//     function dev(){
//         console.log(a);
//         //!to access variable 'a' which is not in the lexical exvironment of function 'y' so function y() is lexically inside the function x().
//         //! hence function y() takes reference to the lexical environment of its parent function which is x() and so on his parent takes reference to the grand parent

//         //LEXICAL ENVIRONMENT OF FUNCTION 'Y'/ heart of dev

//         // function sharddha(){
//         //     let a = "abhishek"
//         //     function kunal(){
//         //             console.log(a);
//         //     }
//         //     kunal()
//         // }
//         // sharddha()
//     }
//     dev();
// }
// damini();

// parent();
// function parent(){

//     function val(){
//         console.log(a);
//     }
//     var a = 10;

//     val()
// }

// console.log(a);

// let a = 10;

// let str = "damini and dev";

// console.log(str.replace("and","loves"));

// #6. Arrays

// let arr = [1, 2, 3, 4, 5];

// console.log(arr[3]);

// for(i=0;i<arr.length;i++){
//         console.log(arr[i]);
// }

//#p1. print the element greater than 2 and smaller and equal to 4 inside the array.

// for(i=0;i<arr.length;i++){
//         if(arr[i]>2 && arr[i]<=4){
//               console.log(arr[i]);
//         }
// }

// 6. Array Methods

// 1. Searching in Arrray

// let str = ["damini", "kajal", "khushboo", "pooja", "jaaneman", "sona", "akanksha"]

// arr[6]="komal";

// let isCheck = arr.includes("komal");

// console.log(arr);

// 2. String to Array method - split().

// let val = str.split(" ");

// 3  Array to String method - join()/toString().

// let val = str.join(" ");

// console.log(val);

//8. ............................Multidimensional Array ........................

// let arr = [1, 2, 3, 4, 5];  //  1D Array

// // console.log(arr);

// let arr2 = [[1, 2], [3], [4, 5]];  //2D Array
//      0, 1    0    0, 1

//      0       1     2

// console.log(arr2);

// let val = arr2[parentIndex][childIndex]

// let val = arr2[0][1]  //output --> 2

// console.log(val);

// let val2 = arr2[2][0]       //output --> 4

// console.log(val2);

// let arr3 = [1, 2, [3, 4, [5, [6, 8]]], [[7, 4], 9, 10], 3, [4, 5, [12, 15]]];  //3D Array

// // arr[0][0]  //output -> 1, 6
// let val =  arr3[2][2][1][1]   //4D Array
// console.log(val);

// 9. Objects in Javascript.

//* What is Object - object has a key: value pairs which also known as properties and it always written in curly brackets.

// let damini = {
//         eyes: "lotus",
//         hair: "clouds",
//         face: "moon",
//         hands: "rose"
// }

// // console.log(damini.eyes);
// console.log(damini);

//9. Advance Array Methods.

//1. forEach() --> it used to iterate the each elements inside the array and does'nt returns anything.

// let arr = ["damini", "dev", "komal", "shraddha"];

// arr.forEach((value,index)=>{ console.log(value,index)});

// 2. map() - map function is the advance method in array which takes old array and do some operation withs its elements and provide us completely new Array.

// const newArr = arr.map((value)=>{
//         return value;
// })
// console.log(newArr);

// add damini and dev in complete new Array using map() function

// let newArr = arr.map((value)=>{
//         return value
//     if(value=="damini"){
//         return value
//     }
//     else if(value=="dev"){
//         return value;
//     }
// })

// newArr.push("damini","dev");
// console.log(newArr);

// 3. filter() - > in filter method we print the element of array based on condition.

// let arr = [1,2,3,4,5]

// const newArr = arr.filter((val)=>{
//         return val<3 && val>1;
// })
// console.log(newArr);

// 4. reduce() -->

// let arr = [1,2,3,4];

// // find the factorial of 5

// let newArr = arr.reduce((prevVal, currVal, index, array)=>{
//         return prevVal*currVal;
// })
// console.log(newArr);

// 1. Web Api's.

// Our browser has javascript engine chrome has v8 engine, so to interact with 'web apis' in our javascript program we need javascript engine.

// 1. setTimeout().
// 2. dom api's
// 3. console.log().
// 4. fetch() --> server connect
// 5. geolocation apis

// let arr = [1, 2, 3, 4, 5];

// var i = 0;

// for(var i = 0;i<5;i++){
// const val = function foo(){
//         setTimeout(function(){
//              console.log(i)
//             }, i*1000);
//      }
//      val();
// }

// var a = 10;

// {
//         var a = 100;

//         console.log(a);
// }

// console.log(a);

// {
// "state":[
//         "area":"",
//         "pincode":""
//         "city":"shamli"
// ]
// }

//.............................................
// createOrder(); //to create api for order

// promise is the promise of code of execution and it has two outcomes.

// 1. if the promise is fullfilled/if the code of execution is successful then it goes inside the fullfilled state.
// 2. if the promise is not fullfilled or rejected then it comes inside the Rejected state followed by error.
// basically promise is the object use to store data and manipulate the data.

//!Remark - Every Promise has 3 states

//* pending state..
//* fullfilled state...
//* rejected state.....

//    async await

// async function createOrder(){

//     let promise = new Promise((resolve, reject)=>{

//         let a = 10;

//         try{
//             if(a==10){
//                 resolve("promise is successfull resolved")  /// when the promise is resolved successfully
//             }
//         }

//         catch{
//             const err = new Error("Error 404!!!");

//             reject(err);    //  when the promise doesnot execute successfully.
//           }

//         finally{
//             console.log("Code is completed!!!!");
//         }

//         })

//     const p1 = await promise; //it await/ waits for the execution of promise inside the function.

//     return p1;     //then it returns the values.

// }

// const res = createOrder();

// res.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// }).finally((res)=>{
//     console.log(res);
// })

// Method of promise()

//1. .then().
//2. .catch().
//3. .finally().
//4. .allSettled()

// var name = "aman";

// function fun() {
//   var num = 10;
//   console.log(name);
// }

// operators-
// Arithmatic operator
// 1.addition +
// 2.subtraction -
// 3. multiplication *
// 4. division /
// 5.  remainder %
// 6. exponentional **;

// assignment operator
// +=
// -=
// /=
// *=

// relational operator
// 1. <=
// 2. >=
// 3. ===  it is known as strict equalility  -
// 4. ==  it is known as the loose equality -
// 5. <==
// 6. >==

// logical operators

// && and operator
// || or operator
// ! not equal

// let arr = [1, 2, 3, 4, 5];
// if (arr[0] === 1 || arr[2] !== 6) {
//   console.log(true);
//   return true;
// } else {
//   console.log(false);
//   return false;
// }

// for(initilization , condition , updation ){
//     //code
// }

// while loop
// initilization
// while (condition){
// //code
// //updation
// }

// do while
//  do{

//      // code
//      //updation
//  }while(condition)

// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 5);

// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }

// 1.if else
// 2.if else if
// 3.switch

// let i = 7;
// switch (i) {
//   case 0: {
//     console.log("qwer");
//     break;
//   }

//   case 1: {
//     console.log("myank");
//     break;
//   }
//   case 2: {
//     console.log("switch");
//     break;
//   }
//   default: {
//     console.log("dev");
//   }
// }

// let i = 2;

// function square(num) {
//   return num * num;
// }
// console.log(square(i));

// const j = 6;
// const arrowfun = (nums) => {
//   return nums * nums;
// };
// console.log(arrowfun(j));

// methods of strings

// let arr1 = [1, 3, 4, 5, 6];
// let arr2 = [2, 4, 2, 4, 3];
// let newarr = [...arr1, ...arr2];
// console.log(typeof arr);

// let j = {
//   name: "pawan",
//   age: 49,
// };
// console.log(typeof obj);

// console.log(Array.isArray(h));
// console.log(Array.isArray(j));

// console.log(h.includes(4, 2));

// const { name, age } = j;

// console.log(name, age);

// const [x, y, z, r, d] = h;

// console.log(arr1.push(arr2));

// console.log(newarr);
