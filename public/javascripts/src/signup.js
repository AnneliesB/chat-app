
document.querySelector("#signup").addEventListener("click", (e) => {
    let email = document.querySelector("#signup_email").value;
    let username = document.querySelector("#signup_username").value;
    let password = document.querySelector("#signup_password").value;
    let pokeId = Math.floor(Math.random() * 154);
    let avatar = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`;

    fetch(url + "users/signup", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "username": username,
            "password": password,
            "email": email,
            "avatar": avatar
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