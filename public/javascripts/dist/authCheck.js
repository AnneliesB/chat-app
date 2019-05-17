"use strict";

var apiURL = "http://localhost:3000/api/v1/messages";
fetch(apiURL, {
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