const typingText = document.
querySelector(".typing-text p");
const input = document.
querySelector(".input");
const time = document.
querySelector(".time span b");
const mistakes = document.
querySelector(".mistakes span");
const wpm = document.
querySelector(".wpm span");
const cpm = document.
querySelector(".cpm span");
const btn = document.
querySelector(".button");

let timer;
let maxTime = 60;
let timeLeft = maxTime;
let charIndex = 0;
let mistake = 0;
let isTyping = false;

function loadParagraph(){
    const paragraph = ["She had been warned time and again, but she had refused to believe her.","So when the promotion was given to her main rival, it not only stung, it threw her belief system into disarray.","Frank knew there was a correct time and place to reveal his secret and this wasn't it.","At this point, it was out of his control and completely dependant on those around him who also knew the secret.","He looked down at the ground knowing that she wouldn't like his answer."];

    const randomIndex = Math.floor(Math.random()*paragraph.length);
    typingText.innerHTML = "";
    for(const char of paragraph[randomIndex]){
        typingText.innerHTML += `<span>${char}</span>`;
    }
    typingText.querySelectorAll('span')[0].classList.add('active'); 
    document.addEventListener('keydown',()=>input.focus());
    typingText.addEventListener('click',()=>input.focus());
}

function initTyping(){
    const char = typingText.querySelectorAll('span');
    const typedChar = input.value.charAt(charIndex);
    if(charIndex < char.length && timeLeft > 0){
        if(!isTyping){
            timer = setInterval(initTime,1000);
            isTyping = true;
        }

        if(char[charIndex].innerText === typedChar){
            char[charIndex].classList.add('correct');
            
        }
        else{
            mistake++;
            char[charIndex].classList.add('incorrect');
        }      
        charIndex++;
        char[charIndex].classList.add('active');
        mistakes.innerText = mistake; 
        cpm.innerText = charIndex - mistake;
    }
    else{
        clearInterval(timer);
        input.value = '';
    }
}

function initTime(){
    if(timeLeft>0){
        timeLeft--;
        time.innerText = timeLeft;
    }
    else{
        clearInterval(timer);
        let wpmVal = Math.round(((charIndex - mistake)/5)/ (maxTime - timeLeft) * 60);
        wpm.innerText = wpmVal;
    }
}

function reset(){
    loadParagraph();
    clearInterval(timer);
    timeLeft = maxTime;
    time.innerText = maxTime;
    isTyping = false;
    wpm.innerText = 0;
    cpm.innerText = 0;
    mistakes.innerText = 0;
    input.value = '';
}

input.addEventListener("input",initTyping);
btn.addEventListener("click",reset)
loadParagraph();