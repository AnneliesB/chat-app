
document.querySelector('#logout').addEventListener("click", (e)=> {
    e.preventDefault();
    localStorage.removeItem("token");
    window.location.href = "login";
});


