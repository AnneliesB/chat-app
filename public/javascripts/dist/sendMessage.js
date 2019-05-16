"use strict";

var input = document.querySelector("#message");
input.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    var message = input.value;
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
      console.log(json);
      /*
      let todo = `<div class="todo">
          <input type="checkbox" class="todo__state">
          <div class="todo__text">${json.data.todo.text}</div>
          <a class="todo__delete" href="#" data-id="${json.data.todo._id}">delete</a>
      </div>`; 
      document.querySelector(".todo__new").insertAdjacentHTML('afterend', todo);
      */
    })["catch"](function (err) {
      console.log(err);
    });
  }

  e.preventDefault();
});