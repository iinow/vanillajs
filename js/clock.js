const clockContainer = document.querySelector(".js-clock")
const clockTitle = clockContainer.querySelector("h1")

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes() / 10 < 1 ? "0" + date.getMinutes() : date.getMinutes();
    const hours = date.getHours() / 10 < 1 ? "0" + date.getHours().toString() : date.getHours();
    const seconds = date.getSeconds() / 10 < 1 ? "0" + date.getSeconds().toString() : date.getSeconds();
    clockTitle.innerText = `${hours}:${minutes}:${seconds}`
}

function init() {
    setInterval(getTime, 1000);
}

init()