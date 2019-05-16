fetch('https://secret-savannah-51030.herokuapp.com/api/v1/messages', {
    'headers': {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
}).then(result => {
    return result.json();
}).then(json => {
    console.log("Ingelogd");
}).catch(err => {
    window.location.href = "login";
});