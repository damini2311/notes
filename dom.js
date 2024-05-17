// different ways to select the elements inside the dom

// const html = document.createElement("html");
// document.append(html);

// const head = document.createElement("head");
// html.appendChild(head);

// const body = document.createElement("body");
// html.appendChild(body);

// console.log(html);

// const body = document.body;
// const div = document.createElement("div");

// div.className = "parent";
// div.id = "parent-id";

// const span = document.createElement("span");

// function uni() {
//   console.log("Universe");
//   let a = "Universe";
//   return a;
// }

// div.getElementById("parent-id");

// function addition() {
//   let a = "damini";
//   let b = "dev";
//   console.log(a.concat(b));
//   return a.concat(b);
// }

// body.append(div);
// div.append(span);
// span.innerHTML = uni();
// div.append("Hello sir");
// div.innerHTML = addition();
// console.log(body);
// console.log(div);

////////////////////////////////////////////////////////////...................................///////////////////////////////////

// let body = document.body;

// const div = document.createElement("div");
// body.append(div);

// const ul = document.createElement("ul");
// div.append(ul);

// const data = ["movie1", "movie2", "movie3", "movie4", "movie5"];
// for (let i = 0; i <= 5; i++) {
//   var li = document.createElement("li");
//   data[5] = "movie6";
//   //   return li[i];
//   ul.append(li);
//   li.innerText = data[i];

//   console.log(li);
//}

// ul.addEventListener("click", () => {
//   alert("dev is mad");
// });
// console.log(data);

// console.log(ul);

/////////////////////////////////////////////////////////////////

// four types of increment and decrement operator

// preincrement ----> it will increment the value immidiately.
// let a = 1;
// console.log(++a);

// console.log(a++);
// predeccrement
// postincrement-----> it first print the current value of varaible then incremnt it.
// postdecrement

////........................................*//////////

//callbacks
//ex-
// function parent(a, b) {}

// parent(function callbackfun(result) {
//   console.log("name", result);
// });

//thread of execution
//varible envirment

//callstack
//------>The call stack is a data structure that keeps track of the order in which functions are called in a program.

//debounce and throttling
//scope
//lexical env
//async await
//array
//string

//.........................................................................
//diff between dynamic and static array
//------------>>>>>>static arrays have a fixed size allocated at compile time and cannot be resized,
//while dynamic arrays have a flexible size allocated at runtime and can be resized dynamically.
//The choice between static and dynamic arrays depends on the specific requirements of the program,
//such as whether the size of the array is known in advance or needs to change dynamically during program
//execution.
//.............................................................................

//ineraction of web page with browser
// how js code execute in browser
//promises
//closusers
//web api
//event loop
//url component
//database component
//how client and server connect
