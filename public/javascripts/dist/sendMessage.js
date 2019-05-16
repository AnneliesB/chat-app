"use strict";

var sendMessage = function sendMessage(e) {
  var message = input.value;
  console.log(message);
  fetch('http://localhost:3000/api/v1/messages', {
    method: "post",
    "headers": {
      "Content-Type": 'application/json',
      "Authorization": "Bearer " + localStorage.getItem('token')
    },
    body: JSON.stringify({
      "message": message
    })
  }).then(function (result) {
    return result.json();
  }).then(function (json) {
    //console.log(json);

    /*let message = `<ul class="message__container message--sent">
    <li class="message__avatar"></li>
    <li class="message__user"></li>
    </ul> `;*/

    /*
    let todo = `<div class="todo">
        <input type="checkbox" class="todo__state">
        <div class="todo__text">${json.data.todo.text}</div>
        <a class="todo__delete" href="#" data-id="${json.data.todo._id}">delete</a>
    </div>`; 
    document.querySelector(".todo__new").insertAdjacentHTML('afterend', todo);
    */
    input.value = "";
  })["catch"](function (err) {
    console.log(err);
  });
};

var input = document.querySelector("#message");
var sendMessageButton = document.querySelector("#messageSend");
sendMessageButton.addEventListener("click", sendMessage);
input.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    sendMessage();
  }

  e.preventDefault();
});