let text = document.querySelector("p");
let main = document.querySelector(".operations");
let equal_btn = document.querySelector("#equal");
let arr = [];
let number = "";
const range_num = "1234567890.";
main.addEventListener("click", (event) => {
  button = event.target;
  if (button.tagName == "BUTTON") {
    type(button.value);
    console.log(arr);
  }
});
function type(value) {
  if (range_num.includes(value)) {
    if (!(number == "")) {
      arr.pop();
    }
    console.log(number);

    number = number.concat(value);
    arr.push(number);
    console.log(arr);
  } else {
    if (number == "" || value == "=") {
      return;
    }
    number = "";
    arr.push(value);
  }
}

equal_btn.addEventListener("click", () => {
  if (!(arr.length == 0)) {
    operations(arr);
  }
});
let b = [4, 6, 67];
c = b.slice(1, 2);
c;
if (b) {
  console.log(b.slice(-1));
}
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
  }
  console.log(total);
}
function shift(total) {
  arr.shift();
  arr.shift();
  arr.shift();
  arr.unshift(total);
}
