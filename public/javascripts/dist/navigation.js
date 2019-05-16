"use strict";

var registerBtn = document.querySelector(".button--mobile--register");
var loginBtn = document.querySelector(".button--mobile--login");
var login = document.querySelector(".login");
var register = document.querySelector(".register");
loginBtn.addEventListener('click', function (e) {
  login.style.display = "block";
  register.style.display = "none";
  loginBtn.style.backgroundColor = '#F2F4F8';
  registerBtn.style.backgroundColor = '#EAECF1';
});
registerBtn.addEventListener('click', function (e) {
  login.style.display = "none";
  register.style.display = "block";
  loginBtn.style.backgroundColor = '#EAECF1';
  registerBtn.style.backgroundColor = '#F2F4F8';
});