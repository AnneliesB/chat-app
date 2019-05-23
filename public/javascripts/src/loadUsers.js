const appendUser = (user) => {
    let userHtml = 
    `<li class="user user--online">
        <div class="user__avatar" style="background: url(${user.avatar}) center center;"></div>
        <h3 class="user__name">${user.username}</h3>
        <h5 class="user__motto">${user.motto}</h5>
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
const loadProfile = () => {
    fetch(url + "users/profile", {
        method: "get",
        "headers": {
            "Content-Type": 'application/json',
            "Authorization": "Bearer " + localStorage.getItem('token')
        }
    })
    .then(result => {
        return result.json();
    })
    .then(json => {
        let profileHTML = 
        `<div class="profile__avatar" style="background: url(${json.user.avatar}) center center;"></div>
        <p class="profile__name">${json.user.username}</p>
        <p class="profile__motto" onclick="editMotto(this);">${json.user.motto}</p>`
        const profileMenu = document.querySelector(".profile__container");
        profileMenu.insertAdjacentHTML("beforeend", profileHTML);
    })
    .catch(err => {
        console.log(err);
    });
}

const editMotto = (data) => {
    const mottoElement = document.querySelector(".profile__motto");
    const profileMenu = mottoElement.parentNode;
    let currentMotto = mottoElement.innerHTML;
    mottoElement.parentNode.removeChild(mottoElement);
    let textArea = `<input type="text" class="profile__input" value="${currentMotto}">`;
    profileMenu.insertAdjacentHTML("beforeend", textArea);
    let profileInput = document.querySelector(".profile__input");
    profileInput.addEventListener("keyup", (e) => {
        if(e.keyCode == 13){
            saveMotto(profileInput.value);
        }
    });

}
const saveMotto = (motto)=>{
    fetch(url + "users/profile", {
        method: "put",
        "headers": {
            "Content-Type": 'application/json',
            "Authorization": "Bearer " + localStorage.getItem('token')
        },
        body: JSON.stringify({
            "motto": motto
        })
    })
    .then(result => {
        return result.json();
    })
    .then(json => {
        const mottoElement = document.querySelector(".profile__input");
        const profileMenu = mottoElement.parentNode;
        let currentMotto = json.motto;
        mottoElement.parentNode.removeChild(mottoElement);
        let mottoParagraph = `<p class="profile__motto" onclick="editMotto(this);">${currentMotto}</p>`;
        profileMenu.insertAdjacentHTML("beforeend", mottoParagraph);
        primus.write({
            "action": "updateMotto"
        });
    })
    .catch(err => {
        console.log(err);
    });
}
getUsers();
loadProfile();