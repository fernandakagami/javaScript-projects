let numberOfKeys = document.querySelectorAll(".key").length;

for (let i = 0; i < numberOfKeys; i++) {
    document.querySelectorAll('.key')[i].addEventListener("click", function () {

        makeSound(this.classList[0]);

        buttonAnimation(this.classList[0]);
    });
}

document.addEventListener("keypress", function(event) {

    makeSound(event.key);

    buttonAnimation(event.key);
})

function buttonAnimation (key) {
    var active = document.querySelector("." + key);    
    active.classList.add('playing');

    setTimeout(function() {
        active.classList.remove("playing");
    }, 100);
}

function makeSound(key) {
    switch (key) {
        case "a":
                var audio = new Audio('sounds/clap.wav');
                audio.play();
            break;
        case "s":
                var audio = new Audio('sounds/hihat.wav');
                audio.play();
            break;
        case "d":
                var audio = new Audio('sounds/kick.wav');
                audio.play();
            break;
        case "f":
                var audio = new Audio('sounds/openhat.wav');
                audio.play();
            break;
        case "g":
                var audio = new Audio('sounds/boom.wav');
                audio.play();
            break;
        case "h":
                var audio = new Audio('sounds/ride.wav');
                audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/snare.wav');
            audio.play();
        break;
        case "k":
            var audio = new Audio('sounds/tom.wav');
            audio.play();
        break;
        case "l":
            var audio = new Audio('sounds/tink.wav');
            audio.play();
        break;
        default: console.log(key.classList);
    }
}

    