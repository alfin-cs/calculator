let text = document.querySelector("p");
let main = document.querySelector(".operations");
let equal_btn = document.querySelector("#equal");
let clear = document.querySelector("#clear");
let backSpace = document.querySelector("#back");
let textScreen = document.querySelector(".output");
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
    if ((number.includes(".") || number === "") && value == ".") {
      return;
    }
    if (!(number == "")) {
      arr.pop();
    }

    number = number.concat(value);
    text.textContent += value;

    arr.push(number);
  } else if (
    number !== "" &&
    "/*-+%".includes(value) &&
    number.slice(-1) !== "."
  ) {
    number = "";
    arr.push(value);
    text.textContent += value;
  }
}

equal_btn.addEventListener("click", operations);

function operations() {
  if ("/*-+%".includes(arr.slice(-1)) || arr.length == 0) {
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
backSpace.addEventListener("click", delete_last);
function delete_last() {
  if ("/*-+%".includes(arr.slice(-1))) {
    arr.pop();
    display = text.textContent;
    text.textContent = display.slice(0, -1);
  } else {
    arr.pop();
    number = number.slice(0, -1);
    if (number !== "") {
      arr.push(number);
      display = text.textContent;
      text.textContent = display.slice(0, -1);
    }
  }
}
textScreen.addEventListener("keydown", (event) => {
  value = event.key;
  type(value);
  if (value == "Backspace") {
    delete_last();
  } else if (value == "Enter") {
    operations();
  }
});
