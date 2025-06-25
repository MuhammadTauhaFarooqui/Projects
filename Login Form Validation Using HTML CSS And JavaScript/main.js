function validate(){
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    if (username == "Soul Kiddnaper" && password == "1234"){
        alert("Login Successfully")
    }
    else{
        alert("Invalid Credentials")
    }
}