// name display 
let nickName= document.querySelector('.player');
nickName.textContent = localStorage.getItem('nickname')

// background sound
let sound = new Audio("./assets/kung fu panda.mp3");
sound.loop = true;
sound.play();
sound.volume = 0.3;

const images = [
    "😀",
    "😀",
    "😨",  
    "😨", 
   "🤭",
   "🤭",
   " 😈",
   " 😈",
   "😮",
   "😮",
    "😭",
    "😭",
    "🙂",
    "🙂",
    "😎",
    "😎",
];


let balanceMove = document.querySelector('.remaining')
let Score = document.querySelector('.score');
let scoreCard = 0;
let moves = 16;
let change = images.sort(() => (Math.random() > 0.5) ? 1 : -1);
let cardsOpen = [];
let clicksDisabled = false;

function startScore(){
    localStorage.setItem("score", 0);
    Score.textContent = 0;
}

function countMoves(){
balanceMove.textContent = moves;
}

startScore();
countMoves();

for (let i = 0; i < images.length; i++) {
    let chat = document.createElement('div');
    chat.className = 'cards';
    chat.innerHTML = change[i];

    chat.onclick = function () {
        if (!clicksDisabled && cardsOpen.length < 2 && !this.classList.contains('cardsOpen')) {
            this.classList.add('cardsOpen');
            cardsOpen.push(this);

            if (cardsOpen.length === 2) {
                clicksDisabled = true; // Disable further clicks

                setTimeout(function () {
                    if (cardsOpen[0].innerHTML === cardsOpen[1].innerHTML) {

                        cardsOpen[0].classList.add('cardlevel');
                        cardsOpen[1].classList.add('cardlevel');

                        scoreCard = scoreCard + 1;
                        localStorage.setItem("score", scoreCard);
                        Score.textContent = scoreCard; // Update the score in the HTML

                        if (scoreCard === 8){
                            location.href = "end.html";
                        }

                    } else {
                        cardsOpen[0].classList.remove('cardsOpen');
                        cardsOpen[1].classList.remove('cardsOpen');
                    }

                    cardsOpen = []; 
                    clicksDisabled = false; // Enable clicks again
                }, 500);
               
            //    decreasing the total moves
                moves = moves - 1;
                countMoves();
                
            }
            if (moves === 0){
                location.href = "end.html";
            }
            
        }
    };

    document.querySelector('.image').appendChild(chat);
}

Score.textContent = localStorage.getItem("score") ;


// getting timer id 

let Timer = document.getElementById('timer');
let time = 60;

// timer function

function minutes(){
    let seconds = setInterval(function () {
        time = time - 1 ;

        if (time === 0){
            clearInterval(seconds);
            location.href = "end.html";
        }
        Timer.innerText = time;
    },1000);
}
minutes();