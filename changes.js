let text = document.querySelector("p");
let main = document.querySelector(".operations");
let a = [];
let number = "";
main.addEventListener("click", (event) => {
  button = event.target;
  if (button.tagName == "BUTTON") {
    type(button.value);
    console.log(a);
  }
});
function type(value) {
  if ("1234567890".includes(value)) {
    console.log(number);
    number = number.concat(value);
  } else {
    a.push(number);
    a.push(value);
  }
}
