/*
 * IDB Programming: Code Playground
 *to play the game you use the keys from z to m to move
 hold g to shoot and shoot at the yellow balls. 
 if blue balls u lost 
 if black or darker color that means u won.
 */
//creating a tower and pellets
import * as Util from "./util.js";

let Wall = Util.createThing("wall")
let hammer = Util.createThing("hammer")
let Wallmount={
  x:300,
  y:0,
  roundedness:0,
  
  
  pixelwidth:50,
  pixelheight:innerWidth,
};
let hammeObjects={
  x:0,
  y:0,
  roundedness:1,
  Hue:350,
  saturation:50,
  lightness:50,
  opacity:1,

  
  pixelwidth:50,
  pixelheight:innerWidth,
};

Util.setPositionPixels(Wallmount.x,Wallmount.y,Wall)
Util.setRoundedness(Wallmount.roundedness,Wall)
Util.setSize(Wallmount.pixelwidth,Wallmount.pixelheight,Wall) 

function Hammerobj(){
const{x,y,roundedness,Hue,saturation,lightness,opacity}=hammeObjects
Util.setPosition(x,y,hammer);
Util.setRoundedness(roundedness,hammer);
Util.setColour(Hue,saturation,lightness,opacity,hammer);

}

Hammerobj();



/*
let Big = Util.createThing("moon");//tower
let Mini = Util.createThing("sun");//pellets
let Star = Util.createThing("star");//star
let line = Util.createThing("line");//line
let EnemyTwo = Util.createThing("star");//star

let lastkeydownIdx = -1
const noneDirection = -1;
const leftDirection = 0;
const rightDirection = 1;
const allKeys = [ "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM" ];

function selectDirection(KeyCode) {
  function indexof(theArr, KeyCode) {
    // for loop or while loop or their functional equivalent (i.e. the forEach() Links to an external site. method call)
    for (let i = 0; i < theArr.length; i++) {
      if (theArr[ i ] === KeyCode) {
        return i;
      } else {
        continue;
      }
    }
    return -1;
  }

  //const KeyIndex = allKeys.indexOf(KeyCode);

  const KeyIndex = indexof(allKeys, KeyCode);
  if (KeyIndex === -1) {
    return noneDirection;
  }

  if (lastkeydownIdx < 0) {
    lastkeydownIdx = KeyIndex;
    return noneDirection;
  }

  if (lastkeydownIdx > KeyIndex) {
    lastkeydownIdx = KeyIndex;
    return leftDirection;

  } else if (lastkeydownIdx < KeyIndex) {
    lastkeydownIdx = KeyIndex;
    return rightDirection;
  }
  else {
    return noneDirection;
  }




}







const Sun = {//object of the sun/ aka the bunker
  hue: 122,
  saturation: 100,
  lightness: 50,
  alpha: 1,
  pixelx: 0,
  pixely: 500,
  pixelwidth: 50,
  pixelheight: 50,
  stopp: false,
  moveleft() {
    if (this.pixelx < 0) {
      this.pixelx = 0
    }
    else {
      this.pixelx -= 20;
    }
  },
  moveright() {
    if (this.pixelx + this.pixelwidth >= screen.width) {
      this.pixelx = screen.width - this.pixelwidth
    }
    else {
      this.pixelx += 20;
    }
  },
};
let shoot = false;


function checkCollision(domElement1, domElement2) {
  const rect1 = domElement1.getBoundingClientRect();
  const rect2 = domElement2.getBoundingClientRect();

  // Check for overlap on all four sides
  return !(
    rect1.bottom < rect2.top || // 1 is above 2
    rect1.top > rect2.bottom || // 1 is below 2
    rect1.right < rect2.left || // 1 is left of 2
    rect1.left > rect2.right    // 1 is right of 2
  );
}


const Moon = {//pallets
  hue: 20,
  pixelx: 0,
  pixely: 0,
  px: 20,
  py: 20,
  deltaSize: 10,
};

const star = {//star enemies
  hue: 60,
  pixely: 1,
  pixelx: 200,
  px: 80,
  py: 70,
};
const starTwo = {//star enemies
  hue: 60,
  pixely: 1,
  pixelx: 100,

};
const lineofdeath = {//green line of death
  hue: 90,
  x: 0,
  y: 500,
  stopp: false,
};



function StarEnemies() {// Star enemeies
  if (star.stopp) return;
  Util.setColour(star.hue, Sun.saturation, Sun.lightness, Sun.alpha, Star);
  Util.setSize(80, 70, Star);
  Util.setRoundedness(1, Star);
  Util.setPositionPixels(star.pixelx, star.pixely, Star);
  star.pixely += 1;
  if (star.pixely > lineofdeath.y) { // 500 is where the green line is
    star.stopp = true;
    Util.setColour(250, 50, 50, 1, Star)
  };

  //if (star.pixely> lineofdeath.y){ window.alert("game over")} // somehow it is made;when the ball crosses the green line it shows alert  
  setTimeout(() => {

    window.requestAnimationFrame(StarEnemies);

  }, 15);;
};

function StarEnemeytwo() {
  if (starTwo.stopp) return;
  Util.setColour(star.hue, Sun.saturation, Sun.lightness, Sun.alpha, EnemyTwo);
  Util.setRoundedness(1, EnemyTwo)
  Util.setSize(star.px, star.py, EnemyTwo);
  Util.setPositionPixels(starTwo.pixelx, starTwo.pixely, EnemyTwo);
  starTwo.pixely += 1;
  if (starTwo.pixely > lineofdeath.y) { // 500 is where the green line is
    starTwo.stopp = true;
    Util.setColour(250, 50, 50, 1, EnemyTwo)//your lose
  };

  //if (star.pixely> lineofdeath.y){ window.alert("game over")} // somehow it is made;when the ball crosses the green line it shows alert  
  setTimeout(() => {

    window.requestAnimationFrame(StarEnemeytwo);

  }, 12);;
};





function bigSun() {// Big Sun aka the bunker
  Util.setColour(Sun.hue, Sun.saturation, Sun.lightness, Sun.alpha, Big);
  Util.setRoundedness(0, Big);
  Util.setPositionPixels(Sun.pixelx, Sun.pixely, Big);
  Util.setSize(Sun.pixelwidth, Sun.pixelheight, Big)
};

function lineOfDeath() {
  Util.setColour(lineofdeath.hue, 50, 50, 1, line)
  Util.setSize(screen.width - lineofdeath.x, 10, line);
  Util.setPositionPixels(lineofdeath.x, lineofdeath.y, line);
  Util.setRoundedness(0, line);
  line.style.position = "absolute";//figure out how to make it stay at the bottom
  line.style.width = "100%";
};

function Pallets() {// Pallets/ bullets  
  Util.setSize(Moon.px, Moon.py, Mini);
  Util.setColour(Moon.hue, Sun.saturation, Sun.lightness, Sun.alpha, Mini);//using the differnt hue but the same sat light and alpha as the sun


};
bigSun();
Pallets();
lineOfDeath();
StarEnemeytwo();

function drawPallets() {//drawPallets
  if (shoot == false) {
    return;
  }
  if (checkCollision(Mini, Star,)) {
    console.log("HIT! Stopping Star and Bullet.");
    star.stopp = true;
    Util.setColour(0, 20, 20, 1, Star)
  }
  if (Moon.pixely < 42) {
    Moon.pixely = 500;
    shoot = false;
    Util.setPositionPixels(Moon.pixelx, Moon.pixely, Mini);
  }

  if (checkCollision(Mini, EnemyTwo)) {
    console.log("HIT! EnemyTwo and Bullet.");
    starTwo.stopp = true; // Stop the movement of the enemy
    // Set color to black/dark gray to make it "disappear"
    Util.setColour(0, 0, 10, 1, EnemyTwo);

    // Reset the bullet
    Moon.pixely = 500;
    shoot = false;
    Util.setPositionPixels(Moon.pixelx, Moon.pixely, Mini);
    return; // Stop bullet movement and exit this frame
  } else {
    Moon.pixely -= 42;
    Util.setPositionPixels(Moon.pixelx, Moon.pixely, Mini) // Negative value moves up, positive moves down
  };

  setTimeout(() => {

    window.requestAnimationFrame(drawPallets);

  }, 150);;





  //if(Sun.stopp) {Util.setPositionPixels(Sun.pixelx, Sun.pixely, Mini);}  
  //if(shoot===true){};
};
*/


function loop() {
  StarEnemies();
  drawPallets();
  //console.log(shoot)
  StarEnemeytwo();

};

/* 

let repeatedKeyG = false;
function keyupHandler(event) {
  if (event.code === "KeyG" && shoot === false) {
    shoot = true;
    if (repeatedKeyG) {

      Util.setSize(Moon.px + Moon.deltaSize, Moon.py + Moon.deltaSize, Mini);
    } else {
      Util.setSize(Moon.px, Moon.py, Mini);

    }

    Moon.pixelx = Sun.pixelx + (Sun.pixelwidth / 2) - 10;
    Moon.pixely = Sun.pixely;

    drawPallets();
  }

}
*/
function setup() {
  window.addEventListener("keydown", (event) => {
    if (event.code === "KeyG") {
      repeatedKeyG = event.repeat;


    } else {

      const direction = selectDirection(event.code)

      if (direction === rightDirection) {
        Sun.moveright()
        bigSun();
      } else if (direction === leftDirection) {
        Sun.moveleft()
        bigSun();
      }



    }

    //console.log(event.repeat);
  })

  window.addEventListener("keyup", keyupHandler);

  window.requestAnimationFrame(loop);
};

setup(); // Always remember to call setup()!





