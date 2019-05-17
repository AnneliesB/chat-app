"use strict";

document.querySelector("#login").addEventListener("click", function (e) {
  var username = document.querySelector("#login_username").value;
  var password = document.querySelector("#login_password").value;
  fetch(loginURL + "login", {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "username": username,
      "password": password
    })
  }).then(function (response) {
    return response.json();
  }).then(function (json) {
    if (json.status === "succes") {
      var token = json.data.token;
      localStorage.setItem("token", token);
      window.location.href = "/app";
    } else {
      alert = document.querySelector(".alert");
      alert.textContent = json.message;
      alert.classList.remove("hidden");
    }
  });
});