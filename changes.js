let text = document.querySelector("p");
let main = document.querySelector(".operations");
let equal_btn = document.querySelector("#equal");
let clear = document.querySelector("#clear");
let backSpace = document.querySelector("#back");
let display;
let arr = [];
let number = "";
const range_num = "1234567890.";
main.addEventListener("click", (event) => {
  button = event.target;
  if (button.tagName == "BUTTON") {
    type(button.value);
  }
});
function type(value) {
  if (arr.length === 0 && value != "=") {
    text.textContent = "";
  }
  if (range_num.includes(value)) {
    if (!(number == "")) {
      arr.pop();
    }

    number = number.concat(value);
    text.textContent += value;
    arr.push(number);
  } else {
    if (number == "" || !"/*-+%".includes(value)) {
      //to avoid duplication of symbol and to prevent clear, equal, backspace to trigger
      return;
    }
    number = "";
    arr.push(value);
    text.textContent += value;
  }
}

equal_btn.addEventListener("click", () => {
  if (!(arr.length == 0)) {
    operations(arr);
  }
});

function operations(arr) {
  if (!range_num.includes(arr.slice(-1))) {
    return;
  }
  let i = 1;
  let total = 0;
  while (i < arr.length) {
    if (arr[i] == "+") {
      total = +arr[0] + +arr[2];
      shift(total);
    }
    if (arr[i] == "*") {
      total = +arr[0] * +arr[2];
      shift(total);
    }
    if (arr[i] == "-") {
      total = +arr[0] - +arr[2];
      shift(total);
    }
    if (arr[i] == "%") {
      total = +arr[0] % +arr[2];
      shift(total);
    }
    if (arr[i] == "/") {
      total = +arr[0] / +arr[2];
      shift(total);
    }
    console.log(arr);
  }
  console.log(total);
  console.log(arr);
  text.textContent = "";
  text.textContent = total;
  number = "";
  arr.splice(0);
}
function shift(total) {
  arr.shift();
  arr.shift();
  arr.shift();
  arr.unshift(total);
}
clear.addEventListener("click", () => {
  number = "";
  arr = [];
  text.textContent = "";
});
backSpace.addEventListener("click", () => {
  if ("/*-+%".includes(arr.slice(-1))) {
    arr.pop();
    delete_last();
  } else {
    arr.pop();
    number = number.slice(0, -1);
    if (!number === "") {
      arr.push(number);
      delete_last();
    }
  }
});
function delete_last() {
  display = text.textContent;
  text.textContent = display.slice(0, -1);
}
