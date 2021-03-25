let myInput = document.getElementById("myinput");
placeholderr = myInput.getAttribute("placeholder");
console.log(placeholderr);

myInput.onfocus = function () {
  "use strict";
  this.setAttribute("dataPlaceHolder", this.getAttribute("placeholder"));
  this.setAttribute("placeholder", "");
};
myInput.onblur = function () {
  this.setAttribute("placeholder", this.getAttribute("dataPlaceHolder"));
};
