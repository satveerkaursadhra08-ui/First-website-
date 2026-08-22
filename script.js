let name = "Satveer";
alert(name);
name = "Satveer kaur";
alert(name);
console.log("Hello Satveer");
function showMessage(){
    document.getElementById("message").innerText =
    "Thank you for visiting my portfolio!";
}
document.getElementById("message").style.color = "green";
document.getElementById("message").style.fontSize = "24px";
document.getElementById("message").style.fontWeight = "bold";
document.getElementById("message").style.backgroundColor = "lightblue";
document.getElementById("message").style.textAlign = "center";
document.getElementById("message").style.borderRadius = "10px";
function darkMode(){
    document.body.classList.toggle("dark");
}
function darkMode(){
    document.body.classList.toggle("dark");

    let btn = document.getElementById("darkBtn");

    if(document.body.classList.contains("dark")){
        btn.innerText = "☀️ Light Mode";
    } else {
        btn.innerText = "🌙 Dark Mode";
    }
}
function changeText(){
    document.getElementById("message").innerText =
    "Welcome to Satveer's Portfolio!";
}
function sendMessage(){
    alert("Thank you for contacting me!");
}
function openPortfolio(){
    alert("Portfolio Website Project");
}
function sendMessage(){
    alert("Thank you for contacting me! 📩");
}
