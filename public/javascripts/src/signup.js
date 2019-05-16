document.querySelector("#signup").addEventListener("click", (e) => {
    let email = document.querySelector("#signup_email").value;
    let username = document.querySelector("#signup_username").value;
    let password = document.querySelector("#signup_password").value;

    fetch("https://secret-savannah-51030.herokuapp.com/api/v1/messages", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "username": username,
            "password": password,
            "email": email
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