//detecting a button press

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML; // innerHTML = uske andar ka content.


    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  });

}
//detecting keyboard press
document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);

});

//Here we are declaring the fucntions
//Calling and using those functions in the code above

function makeSound(key) {

  switch (key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;

    case "a":
      var audio = new Audio("sounds/tom-2.mp3")
      audio.play();
      break;

    case "s":
      var audio = new Audio("sounds/tom-3.mp3")
      audio.play();
      break;

    case "d":
      var audio = new Audio("sounds/tom-4.mp3")
      audio.play();
      break;


    case "j":
      var audio = new Audio("sounds/kick-bass.mp3")
      audio.play();
      break;


    case "k":
      var audio = new Audio("sounds/crash.mp3")
      audio.play();
      break;

    case "l":
      var audio = new Audio("sounds/snare.mp3")
      audio.play();
      break;

    default:

  }

}

function buttonAnimation(currentKey){
      var activeButton = document.querySelector("." + currentKey); //button elemt called using key named classes
      activeButton.classList.add("pressed");

      setTimeout(function(){   //timer which is used to remove the animation classes
        activeButton.classList.remove("pressed");
      }, 100);

}
