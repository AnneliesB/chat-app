"use strict";

fetch('http://localhost:3000/api/v1/messages', {
  'headers': {
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  }
}).then(function (result) {
  return result.json();
}).then(function (json) {
  console.log("Ingelogd");
})["catch"](function (err) {
  window.location.href = "login";
});