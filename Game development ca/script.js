let sound = new Audio("./assets/kung fu panda.mp3");
sound.loop = true;
sound.play();
sound.volume = 0.3;


let startGame = document.getElementById('start')

startGame.addEventListener('click', function startGame() {
    
    var nickname = document.getElementById('nickname').value;
  
    // Check if the user entered a nickname
    if (nickname.trim() !== "") {

        localStorage.setItem('nickname',nickname )

        window.location.href = "ins.html";
    
    } else {

        alert("Please enter a nickname to start the game!");
    }
});




