const log = document.querySelector("log");
const state = document.querySelector("state");
const start = document.querySelector("start");
const stop = document.querySelector("stop");

start.addEventListener("click",()=>{
    document.addEventListener("keydown",down) 
    document.addEventListener("keyup",up);
}) 

stop.addEventListener("click",()=>{
    document.removeEventListener("keydown",down);
    document.removeEventListener("keyup",up);
    log.textContent = "";
    state.textContent = "";
})

function down(e){
    log.textContent =`Key ${e.key} pressed down`;
    state.textContent ="Key is down"
}

function up(e){
    log.textContent =`Key ${e.key} pressed up`;
    state.textContent ="Key is up"
}