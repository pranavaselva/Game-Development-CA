// start game button

let start = document.querySelector('.start-btn')

start.addEventListener('click', function(){
    location.href = "game.html"
})


// background sound

let sound = new Audio("./assets/kung fu panda.mp3");
sound.loop = true;
sound.play();
sound.volume = 0.3;