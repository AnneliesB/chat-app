document.querySelector("#signup").addEventListener("click", (e) => {
    let email = document.querySelector("#signup_email").value;
    let username = document.querySelector("#signup_username").value;
    let password = document.querySelector("#signup_password").value;

    fetch("http://localhost:3000/users/signup", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "username": username,
            "password": password
        })
    }).then( response =>{
        return response.json();
    }).then(json => {
        if(json.status === "success"){
            alert("success");
        }
    });
});