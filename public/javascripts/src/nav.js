let usersIcon = document.getElementById('users');
let secondaryNav = document.querySelector(".nav__secondary");
let messages = document.querySelector(".messages");
let profile = document.querySelector(".profile__container");
let toggled = false;

usersIcon.addEventListener('click', (e) => {
    e.preventDefault;
    if(!toggled){
        secondaryNav.style.display = "block";
        messages.style.display = "none";
        profile.style.display = "none";
        toggled = true;
    } else{
        secondaryNav.style.display = "none";
        messages.style.display = "block";
        profile.style.display = "grid";
        toggled = false;
    }

});
