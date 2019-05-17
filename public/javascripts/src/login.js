document.querySelector("#login").addEventListener("click", (e) => {
    let username = document.querySelector("#login_username").value;
    let password = document.querySelector("#login_password").value;

    fetch(url + "login", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "username": username,
            "password": password,
        })
    }).then( response => {
        return response.json();
    }).then(json => {
        if(json.status === "succes"){
            let token = json.data.token;
            localStorage.setItem("token", token);
            window.location.href = "/app";
        } else {
            alert = document.querySelector(".alert");
            alert.textContent = json.message;
            alert.classList.remove("hidden");
        }
    });
});