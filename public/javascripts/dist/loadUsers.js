"use strict";

var appendUser = function appendUser(user) {
  var userHtml = "<li class=\"user user--online\">\n        <div class=\"user__avatar\"></div>\n        <h3 class=\"user__name\">".concat(user.username, "</h3>\n        <h5 class=\"user__motto\">").concat(user.motto, "</h5>\n    </li>");
  var userMenu = document.querySelector("ul.users");
  userMenu.insertAdjacentHTML("beforeend", userHtml);
};

var getUsers = function getUsers() {
  fetch(url + "users", {
    method: "get",
    "headers": {
      "Content-Type": 'application/json'
    }
  }).then(function (result) {
    return result.json();
  }).then(function (json) {
    var userArray = json.data.users;
    userArray.forEach(function (user) {
      appendUser(user);
    });
  })["catch"](function (err) {
    console.log(err);
  });
};

var loadProfile = function loadProfile() {
  fetch(url + "users/profile", {
    method: "get",
    "headers": {
      "Content-Type": 'application/json',
      "Authorization": "Bearer " + localStorage.getItem('token')
    }
  }).then(function (result) {
    return result.json();
  }).then(function (json) {
    var profileHTML = "<div class=\"profile__avatar\"></div>\n        <p class=\"profile__name\">".concat(json.user.username, "</p>\n        <p class=\"profile__motto\" onclick=\"editMotto(this);\">").concat(json.user.motto, "</p>");
    var profileMenu = document.querySelector(".profile__container");
    profileMenu.insertAdjacentHTML("beforeend", profileHTML);
  })["catch"](function (err) {
    console.log(err);
  });
};

var editMotto = function editMotto(data) {
  var mottoElement = document.querySelector(".profile__motto");
  var profileMenu = mottoElement.parentNode;
  var currentMotto = mottoElement.innerHTML;
  mottoElement.parentNode.removeChild(mottoElement);
  var textArea = "<input type=\"text\" class=\"profile__input\" value=\"".concat(currentMotto, "\">");
  profileMenu.insertAdjacentHTML("beforeend", textArea);
  var profileInput = document.querySelector(".profile__input");
  profileInput.addEventListener("keyup", function (e) {
    if (e.keyCode == 13) {
      saveMotto(profileInput.value);
    }
  });
  console.log(currentMotto);
};

var saveMotto = function saveMotto(motto) {
  fetch(url + "users/profile", {
    method: "put",
    "headers": {
      "Content-Type": 'application/json',
      "Authorization": "Bearer " + localStorage.getItem('token')
    },
    body: JSON.stringify({
      "motto": motto
    })
  }).then(function (result) {
    return result.json();
  }).then(function (json) {
    var mottoElement = document.querySelector(".profile__input");
    var profileMenu = mottoElement.parentNode;
    var currentMotto = json.motto;
    mottoElement.parentNode.removeChild(mottoElement);
    var mottoParagraph = "<p class=\"profile__motto\" onclick=\"editMotto(this);\">".concat(currentMotto, "</p>");
    profileMenu.insertAdjacentHTML("beforeend", mottoParagraph);
    primus.write({
      "action": "updateMotto"
    });
  })["catch"](function (err) {
    console.log(err);
  });
};

getUsers();
loadProfile();