let input = document.getElementById('input');
let btn = document.getElementById('btn');
let wrng = document.querySelector('.wrng');
let guess = document.getElementById('guess');

let answer = Math.floor(Math.random()*100)+1;
console.log(answer);
let numguess = 0;

btn.addEventListener('click',()=>{
    guessnum();
})

function guessnum(){
    if(input.value<1 || input.value>100 || isNaN(input.value)){
        wrng.innerHTML = "Enter between 1 to 100";
    }
    else{
        numguess++;
        guess.innerHTML = `No of Guess : ${numguess}`;

        if (input.value > answer) {
            wrng.innerHTML = `You guessed too High`;
        }
        else if(input.value < answer){
            wrng.innerHTML = `You guessed too Low`;
        }
        else{
            wrng.innerHTML = "Your guess is correct";
            btn.disabled = true;
            setTimeout(()=>{
                resetGame();
            },5000)
        }
    }
}

function resetGame(){
    numguess = 0;
    answer = Math.floor(Math.random()*100)+1;
    input.value="";
    btn.disabled = false;
    guess.innerHTML = `No of Guess : 0`;
}