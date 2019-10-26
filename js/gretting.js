const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greetings = document.querySelector(".js-greetings");
 
const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function paintGreeting(text){
    form.classList.remove(SHOWING_CN)
    greetings.classList.add(SHOWING_CN)
    greetings.innerHTML = `Hello ${text}`
}

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value
    saveName(currentValue);
    paintGreeting(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN)
    form.addEventListener("submit", handleSubmit);
}

function init(){
    loadName()
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS)
    if(currentUser){
        paintGreeting(currentUser)
    }else{
        askForName()
    }
}

init()