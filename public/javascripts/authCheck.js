fetch('http://localhost:3000/api/v1/messages', {
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