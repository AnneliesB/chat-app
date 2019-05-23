"use strict";

var deleteMessage = function deleteMessage(data) {
  fetch(url + "api/v1/messages/" + data.dataset.messageId, {
    method: "delete",
    "headers": {
      "Content-Type": 'application/json',
      "Authorization": "Bearer " + localStorage.getItem('token')
    }
  }).then(function (result) {
    return result.json();
  }).then(function (json) {
    primus.write({
      "action": "reload"
    });
  });
};