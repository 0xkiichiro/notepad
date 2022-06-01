const input = document.getElementById("input");
const enterBtn = document.getElementById("enter");
const deleteBtn = document.getElementById("delete");

const list = document.querySelector("#list");
const ul = document.createElement("ul");
list.appendChild(ul);

enterBtn.onclick = function () {
  !input.value
    ? alert("enter something first")
    : (ul.innerHTML += `<li>${input.value}</li>`);
  check();
  input.value = "";
};

deleteBtn.onclick = function () {
  ul.childElementCount > 0
    ? ul.removeChild(ul.lastChild)
    : alert("calm down buddy, nothing to delete here");
};

input.addEventListener("keydown", (key) => {
  if (key.keyCode === 13) {
    enterBtn.click();
  }

  if (key.keyCode === 46) {
    deleteBtn.click();
  }
});

function check() {
  js = input.value.toLowerCase();
  // console.log(js);
  if (js === "javascript") {
    ul.lastChild.style.color = "red";
  }
}
check();

window.onload = () => {
  input.focus();
};
