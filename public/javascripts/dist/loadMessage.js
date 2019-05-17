"use strict";

var previous = "lol";

var addMessage = function addMessage(element, json) {
  if (currentUser == element.user) {
    // user is current user
    // message--sent class
    // check if previous element exists
    // check if previous element is the same as the current one
    if (previous === element.user) {
      // the previous message was sent by the same current user
      var message = "<li>\n            <p>".concat(element.message, "</p>\n            </li>");
      document.querySelector(".messages__flex").lastChild.insertAdjacentHTML('beforeend', message);
    } else {
      // the previous message was sent by a different user
      var _message = "<ul class=\"message__container message--sent\">\n            <li class=\"message__avatar\"></li>\n            <li class=\"message__user\">".concat(element.username, "</li>\n            <li>\n            <p>").concat(element.message, "</p>\n            </li>\n            </ul>");

      document.querySelector(".messages__flex").insertAdjacentHTML('beforeend', _message);
    }
  } else {
    // user is other user
    // message-received class
    // check if previous message was sent by the same other user
    if (previous === element.user) {
      // the previous message was sent by the same current user
      var _message2 = "<li>\n        <p>".concat(element.message, "</p>\n        </li>");

      document.querySelector(".messages__flex").lastChild.insertAdjacentHTML('beforeend', _message2);
    } else {
      // the previous message was sent by a different user
      var _message3 = "<ul class=\"message__container message--received\">\n        <li class=\"message__avatar\"></li>\n        <li class=\"message__user\">".concat(element.username, "</li>\n        <li>\n        <p>").concat(element.message, "</p>\n        </li>\n        </ul>");

      document.querySelector(".messages__flex").insertAdjacentHTML('beforeend', _message3);
    }
  }

  previous = element.user;
  var objDiv = document.querySelector(".messages__flex");
  objDiv.scrollTop = objDiv.scrollHeight;
};

var currentUser = " ";

var startUp = function startUp() {
  fetch(apiURL, {
    method: "get",
    "headers": {
      "Content-Type": 'application/json',
      "Authorization": "Bearer " + localStorage.getItem('token')
    }
  }).then(function (result) {
    return result.json();
  }).then(function (json) {
    currentUser = json.currentUser; //console.log(json);
    //console.log(json.data.messages.length);
    //console.log(json.data.messages[0].user);
    //let user = req.user._id;
    //console.log(req);

    json.data.messages.forEach(function (element) {
      addMessage(element, json);
    });
  })["catch"](function (err) {
    console.log(err);
  });
};

startUp();