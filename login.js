function login(){

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    if(username === "Satveer" && password === "1234"){
        document.getElementById("loginMessage").innerText =
        "Login Successful!";
    }
    else{
        document.getElementById("loginMessage").innerText =
        "Invalid Username or Password";
    }
}

