
const sendMessage = (e) =>  {
    let message = input.value;
    console.log(message);
    fetch('https://secret-savannah-51030.herokuapp.com/api/v1/messages', {
        method: "post",
        "headers": {
            "Content-Type": 'application/json',
            "Authorization": "Bearer " + localStorage.getItem('token')
        },
        body: JSON.stringify({
            "message": message
        })
    })
    .then(result =>{
        return result.json();
    })
    .then(json=>{
        //console.log(json);

        /*let message = `<ul class="message__container message--sent">
        <li class="message__avatar"></li>
        <li class="message__user"></li>
        </ul> `;*/
        /*
        let todo = `<div class="todo">
            <input type="checkbox" class="todo__state">
            <div class="todo__text">${json.data.todo.text}</div>
            <a class="todo__delete" href="#" data-id="${json.data.todo._id}">delete</a>
        </div>`; 
        document.querySelector(".todo__new").insertAdjacentHTML('afterend', todo);
        */
       input.value = "";
    })
    .catch(err =>{
        console.log(err);
    });
}
let input = document.querySelector("#message");
let sendMessageButton = document.querySelector("#messageSend");

sendMessageButton.addEventListener("click", sendMessage);
input.addEventListener("keyup", e =>{
    if(e.keyCode === 13){
        sendMessage();
    }
    e.preventDefault();
})
