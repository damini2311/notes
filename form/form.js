// const body = document.body;

// const inp1 = document.createElement("input");
// console.log(inp1);

// body.append(inp1);

// inp1.placeholder = "Enter the Name...";
// inp1.type = "text";
// // inp1.onchange = console.log((e) => e.target.value);

// const inp2 = document.createElement("input");
// body.append(inp2);
// inp2.placeholder = "Enter Email...";
// inp2.type = "email";

// const inp3 = document.createElement("input");
// body.append(inp3);
// inp3.placeholder = "Password...";

// const submitBtn = document.createElement("button");

// body.append(submitBtn);
// submitBtn.append("Dev");

// function getData() {
//   console.log("submitted");
// }
// // function change1() {
// //   console.log((e) => e.target.value);
// // }
// // inp1.addEventListener("change", function () {
// //   change1();
// // });

// submitBtn.addEventListener("click", function () {
//   getData();
// });

// const form = document.getElementById("form-submit");
// console.log(form);

function handleOnSubmit(event) {
  // alert("kuch bhi");
  event.preventDefault();

  const passSpan = document.getElementById("err-password");

  const emailSpan = document.getElementById("err-email");

  const name = document.form.name.value;
  const nameSpan = document.getElementById("err-name");
  let status = false;

  console.log(name);
  if (name == "") {
    nameSpan.innerHTML = "enter correct name.......";
    status = true;
  } else {
    nameSpan.innerHTML = "correct...";
    status = false;
  }

  const password = document.forms.password.value;
  // password.value;
  // console.log(password.value);

  if (password.length < 8) {
    passSpan.textContent = "Password must be at least 8 characters long.";
    console.log(false);
  } else {
    passSpan.textContent = "";
    console.log(true);
  }

  const email = document.getElementById("email");
  email.value;
  console.log(email.value);
}
