let previous = "lol";
const addMessage = (element, json) => {
console.log(element);

if (json.currentUser == element.user) {
    // user is current user
    // message--sent class
    // check if previous element exists
    // check if previous element is the same as the current one
        if (previous === element.user) {
            // the previous message was sent by the same current user
            let message = `<li>
            <p>${element.message}</p>
            </li>`;
            document.querySelector(".messages__flex").lastChild.insertAdjacentHTML('beforeend', message);
        } else {
            // the previous message was sent by a different user
            let message = `<ul class="message__container message--sent">
            <li class="message__avatar"></li>
            <li class="message__user">${element.username}</li>
            <li>
            <p>${element.message}</p>
            </li>
            </ul>`;
            document.querySelector(".messages__flex").insertAdjacentHTML('beforeend', message);
        }        
} else {
    // user is other user
    // message-received class

    // check if previous message was sent by the same other user
    if (previous === element.user) {
        // the previous message was sent by the same current user
        let message = `<li>
        <p>${element.message}</p>
        </li>`;
        document.querySelector(".messages__flex").lastChild.insertAdjacentHTML('beforeend', message);
    } else {
        // the previous message was sent by a different user
        let message = `<ul class="message__container message--received">
        <li class="message__avatar"></li>
        <li class="message__user">${element.username}</li>
        <li>
        <p>${element.message}</p>
        </li>
        </ul>`;
        document.querySelector(".messages__flex").insertAdjacentHTML('beforeend', message);
    }
}
previous = element.user;
    console.log(previous + "nieuwe vorige");
    var objDiv = document.querySelector(".messages__flex");
    objDiv.scrollTop = objDiv.scrollHeight;
}


const startUp = () => {
    fetch(apiURL, {
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
        //console.log(json);
        //console.log(json.data.messages.length);
        //console.log(json.data.messages[0].user);
        //let user = req.user._id;
        //console.log(req);
        json.data.messages.forEach(element => {
            addMessage(element, json);
        });
    })
    .catch(err => {
        console.log(err);
    });
}

startUp()




