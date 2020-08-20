var parent = document.querySelector(".modal-parent"),
  btn = document.querySelector("button"),
  X = document.querySelector(".X"),
  section = document.querySelector("section");



function appear() {
  parent.style.display = "block";
  // to display block
  section.style.filter = "blur(10px)"
  // to display background("section")
}

btn.addEventListener("click", appear);

function disappearX() {
  parent.style.display = "none";
  section.style.filter = "blur(0px)"
}

X.addEventListener("click", disappearX);


// click anywhere and hide the block, 
// here e is event variable and targetting "modal-parent"
function disappearParent(e) {
  if (e.target.className == "modal-parent") {
    parent.style.display = "none";
    section.style.filter = "blur(0px)"
  }

}

parent.addEventListener("click", disappearParent)
