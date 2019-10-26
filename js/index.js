// alert('hello world????')

/**
 * 타입 확인
 */
//typeof str === 'string'

// const title = document.getElementById("title")
//id 로 찾을 때는 #id
//class 로 찾을 때는 .id

// const name = prompt('야호')
// console.log(name)

const title = document.querySelector("#title")
title.innerText = "Hi Joon?"

// document.title = "testststs??"
// console.dir(title)

const BASE_COLOR = "rgb(55, 0, 179)";
const OTHER_COLOR = "#03DAC6";

const CLICKED_CLASS = "clicked";

// function handleResize() {
//     console.log('I have been resized')
// }

// window.addEventListener('resize', handleResize)

// function handleClick(event){
//     const currentColor = title.style.color;
//     if(currentColor == BASE_COLOR){
//         title.style.color = OTHER_COLOR;
//     }else{
//         title.style.color = BASE_COLOR;
//     }
//     console.log(`changed, ${currentColor}`)
// }

function handleTitleLeave(){
    // title.style.color = BASE_COLOR;
    // title.className = "";
    title.classList.remove(CLICKED_CLASS)
}

function handleTitleEnter(){
    // title.style.color = OTHER_COLOR;
    // title.className = CLICKED_CLASS;
    title.classList.add(CLICKED_CLASS)
}

function handleTitleOffline(){
    alert('offline')
    console.log('offline??')
}

function handleTitleOnline(){
    alert('online')
    console.log('online!!')
}

function handleTitleClick(){
    title.classList.toggle(CLICKED_CLASS)
}

function init(){
    // title.style.color = BASE_COLOR;
    
    title.addEventListener('click', handleTitleClick);
    // title.addEventListener('pointerleave', handleTitleLeave)
    // title.addEventListener('pointerenter', handleTitleEnter)
}

init();