

const appendUser = (user) => {
    let userHtml = 
    `<li class="user user--online">
        <div class="user__avatar"></div>
        <h3 class="user__name">${user.username}</h3>
        <h5 class="user__motto">Geef vis</h5>
    </li>`;
    
    const userMenu = document.querySelector("ul.users");
    userMenu.insertAdjacentHTML("beforeend", userHtml);
}
const getUsers = () => {
    fetch(url + "users", {
        method: "get",
        "headers": {
            "Content-Type": 'application/json'
        }
    })
    .then(result => {
        return result.json();
    })
    .then(json => {
        let userArray = json.data.users;
        userArray.forEach((user)=>{
            appendUser(user);
        })
    })
    .catch(err => {
        console.log(err);
    });
}
getUsers();