$(".drum").on("click",function(){
  var letter=this.innerHTML;
  //console.log(letter);
  makeSound(letter);
  //effect(letter);
});
$(document).on("keypress",function(event){
  makeSound(event.key);
  effect(event.key);
})

function makeSound(key){
  switch(key){
    case "w":
     var tom1= new Audio("sounds/tom-1.mp3");
     tom1.play();
     console.log("heloo");
     break;
     case "a":
       var tom2= new Audio("sounds/tom-2.mp3");
       tom2.play();
       break;
     case "s":
        var tom3= new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
      case "d":
       var tom4= new Audio("sounds/tom-4.mp3");
       tom4.play();
       break;
       case "j":
     var crash= new Audio("sounds/crash.mp3");
       crash.play();
       break;
       case "k":
       var kick= new Audio("sounds/crash.mp3");
       kick.play();
       break;
       case "l":
      var snare= new Audio("sounds/crash.mp3");
       snare.play();
       break;
       default:console.log("invaild key");
  }
}


$("button").on("click", function() {
  var button = $(this);
  button.addClass("pressed"); 
  setTimeout(function() {
    button.removeClass("pressed");
  }, 100); 
});




