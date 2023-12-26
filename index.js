
var currentSound = null;

function makeSound(key) {
  if (currentSound !== null && !currentSound.paused) {
    currentSound.pause();
    return;
  }

  if (currentSound !== null) {
    currentSound.pause();
  }

  switch (key) {
    case "a":
      currentSound = new Audio("sounds/air.mp3");
      break;

    case "b":
      currentSound = new Audio("sounds/bees.mp3");
      break;

    case "c":
      currentSound = new Audio("sounds/chipping.mp3");
      break;

    case "d":
      currentSound = new Audio("sounds/dropwater.mp3");
      break;

    case "e":
      currentSound = new Audio("sounds/expresstrain.mp3");
      break;

    case "f":
      currentSound = new Audio("sounds/fly.mp3");
      break;

    case "g":
      currentSound = new Audio("sounds/goats.mp3");
      break;

    case "h":
      currentSound = new Audio("sounds/heartbeat.mp3");
      break;

    case "i":
      currentSound = new Audio("sounds/insect.mp3");
      break;

    case "j":
      currentSound = new Audio("sounds/jungle.mp3");
      break;

    case "k":
      currentSound = new Audio("sounds/kitty.mp3");
      break;

    case "l":
      currentSound = new Audio("sounds/lighting.mp3");
      break;

    case "m":
      currentSound = new Audio("sounds/morning.mp3");
      break;

    case "n":
      currentSound = new Audio("sounds/night.mp3");
      break;

    case "o":
      currentSound = new Audio("sounds/ocean.mp3");
      break;

    case "p":
      currentSound = new Audio("sounds/puppy.mp3");
      break;

    case "q":
      currentSound = new Audio("sounds/quiet.mp3");
      break;

    case "r":
      currentSound = new Audio("sounds/Rain.mp3");
      break;

    case "s":
      currentSound = new Audio("sounds/seagull.mp3");
      break;

    case "t":
      currentSound =new Audio("sounds/tickingclock.mp3");
      break;

    case "u":
      currentSound =new Audio("sounds/Underwater.mp3");
      break;

    case "v":
      currentSound = new Audio("sounds/village.mp3");
      break;

    case "w":
      currentSound =new Audio("sounds/waterfalls.mp3");
      break; 

    case "x":
      currentSound = new Audio("sounds/xerox.mp3");
      break;

    case "y":
      currentSound = new Audio("sounds/year.mp3");
      break;

    case "z":
      currentSound = new Audio("sounds/zigzag.mp3");
      break;
   




    default:
      console.log(key);
      return;
    }
    currentSound.play();
  
  setTimeout(function() {
    if (currentSound !== null) {
      currentSound.pause();
    }
  }, 300000);
}
var btns = document.querySelectorAll(".btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var shotName = this.innerHTML;
    var type = shotName.toLowerCase().slice(0, 1);
    makeSound.call(this, type);
    buttonPressed(type);
  });
}

document.addEventListener("keypress", function(e) {
  var key = e.key.toLowerCase();
  if (/[a-z]/.test(key)) {
    makeSound(key);
    buttonPressed(key);
  }
});

function buttonPressed(btn) {
  var press = document.querySelector("." + btn);
  press.classList.add("pressed");
  setTimeout(function() {
    press.classList.remove("pressed");
  }, 200);
}
// <button class="CITY btn">City</button>
// <button class="VILLAGE btn">Village</button>
// <button class="TOWN btn">Town</button>
// <button class="MARKET btn">Market</button>
// <button class="FOREST btn">Forest</button>
// <button class="STROM btn">Strom</button>
// <button class="BEACH WAVES btn">Beach Waves</button>
// <button class="RAIN btn">Rain</button>
// <button class="WATER FALLS btn">Water Falls</button>
