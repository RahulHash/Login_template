var violet = document.getElementById("btn1");
var grape = document.getElementById("btn2");
var pink = document.getElementById("btn3");
var blue = document.getElementById("btn4");
var mainBackground = document.getElementById("main-container");
var btnContainer = document.getElementById("btn-container");
var loginBtn = document.getElementById("login-button")
var imgChange = document.getElementById("images")

violet.onclick = function () {
  mainBackground.className = "main-container";
  btnContainer.className = "btn-container";
  loginBtn.className = "login-button"
  imgChange.className = "images"
  mainBackground.classList.toggle("main-container-violet");
  btnContainer.classList.toggle("btn-container-violet");
  loginBtn.classList.toggle("login-button-violet");
  imgChange.classList.toggle("img-violet")
  
};

grape.onclick = function () {
  mainBackground.className = "main-container";
  mainBackground.classList.toggle("main-container-grape");
  btnContainer.className = "btn-container";
  btnContainer.classList.toggle("btn-container-grape");
  loginBtn.className = "login-button"
  loginBtn.classList.toggle("login-button-grape");
  imgChange.className = "images"
  imgChange.classList.toggle("img-grape")
};

pink.onclick = function () {
  mainBackground.className = "main-container";
  mainBackground.classList.toggle("main-container-pink");
  btnContainer.className = "btn-container";
  btnContainer.classList.toggle("btn-container-pink");
  loginBtn.className = "login-button"
  loginBtn.classList.toggle("login-button-pink");
  imgChange.className = "images"
  imgChange.classList.toggle("img-pink")
};

blue.onclick = function () {
  mainBackground.className = "main-container";
  mainBackground.classList.toggle("main-container-blue");
  btnContainer.className = "btn-container";
  btnContainer.classList.toggle("btn-container-blue");
  loginBtn.className = "login-button"
  loginBtn.classList.toggle("login-button-blue");
  imgChange.className = "images"
  imgChange.classList.toggle("img-blue")
};
