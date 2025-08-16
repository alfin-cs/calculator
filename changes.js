let text = document.querySelector("p");
let main = document.querySelector(".operations");
let equal_btn = document.querySelector("#equal");
let arr = [];
let number = "";
main.addEventListener("click", (event) => {
  button = event.target;
  if (button.tagName == "BUTTON") {
    type(button.value);
    console.log(arr);
  }
});
function type(value) {
  if ("1234567890".includes(value)) {
    console.log(number);
    number = number.concat(value);
  } else {
    if (number == "") {
      return;
    }
    arr.push(number);
    number = "";
    arr.push(value);
  }
}

equal_btn.addEventListener("click", () => {
  if (!(arr.length == 0)) {

  }
});
let b = [4];
if (b) {
  console.log(b);
}
function operators(arr){
  let i=1
  let total=0
  while (i<arr.length)
}