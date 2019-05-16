"use strict";

var usersIcon = document.getElementById('users');
var secondaryNav = document.querySelector(".nav__secondary");
var messages = document.querySelector(".messages");
var profile = document.querySelector(".profile__container");
var toggled = false;
usersIcon.addEventListener('click', function (e) {
  e.preventDefault;

  if (!toggled) {
    secondaryNav.style.display = "block";
    messages.style.display = "none";
    profile.style.display = "none";
    toggled = true;
  } else {
    secondaryNav.style.display = "none";
    messages.style.display = "block";
    profile.style.display = "grid";
    toggled = false;
  }
});