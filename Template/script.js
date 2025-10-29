/*
 * IDB Programming: Code Playground
 *
 */
//creating a tower and pellets
import * as Util from "./util.js";
let Big=Util.createThing("moon");//tower
let Mini=Util.createThing("sun");//pellets
let Star =Util.createThing("star");//star
let line = Util.createThing("line");//line

const Sun ={//object of the sun/ aka the bunker
  hue:122,
  saturation:100,
  lightness:50,
  alpha:1,
 pixelx:50,
 pixely:500,
};
const Moon ={
hue:20,
};
const star ={
hue:60,
pixely:1,
pixelx:100,

};
const lineofdeath ={
hue:90,
 x:0,
 y: 500,
stopp:false,
};

function StarEnemies(){
// Star enemeies
if(star.stopp) return; 
Util.setColour(star.hue,Sun.saturation,Sun.lightness,Sun.alpha,Star);
Util.setSize(80,70,Star);
Util.setRoundedness(1,Star);
Util.setPositionPixels(star.pixelx,star.pixely,Star); 
star.pixely+=1;
if (star.pixely > lineofdeath.y) { // 500 is where the green line is
    Util.setPositionPixels(star.pixelx, star.pixely, Star);
    star.stopp=true;
  }
  };

function bigSun(){  
// Big Sun aka the bunker
Util.setColour(Sun.hue,Sun.saturation,Sun.lightness,Sun.alpha,Big);
Util.setRoundedness(0,Big);
Util.setPositionPixels(Sun.pixelx,Sun.pixely,Big);


};
//big sun function end

// line which represents the line of death the yellow stuff shouldn't c
function lineOfDeath(){


Util.setColour(lineofdeath.hue,50,50,1,line)
Util.setSize(700,10,line);
Util.setPositionPixels(lineofdeath.x,lineofdeath.y,line);
Util.setRoundedness(0,line);
line.style.position = "absolute";//figure out how to make it stay at the bottom
line.style.width = "100%";

};
function box(){
  window.alert("box")
}
box();  





//line of death function end
// ...existing code...
// pallets function start
function Pallets(){
// Pallets/ bullets
Util.setPositionPixels(50,100,Mini )  
Util.setSize(20,20,Mini);
Util.setColour(Moon.hue,Sun.saturation,Sun.lightness,Sun.alpha,Mini);//using the differnt hue but the same sat light and alpha as the sun

  
};
// pallets function end
 
bigSun();
Pallets();
lineOfDeath();
// ...existing code...?
function handleKeyPress(event) {
    console.log("Key pressed:", event.key);
    // Add your key handling logic here

    if (event.key === "f") {
      
    }
  }

// Remove the old Keypresessed function and replace with:
document.addEventListener("keydown", handleKeyPress);
// Remove the old Keypresessed function and replace with:







// function Keypresessed(){
// window.addEventListener("keydown",listener) 

// console.log("keydown","the key has been pressed")
// if (event.key ==="f"){
// }
// Keypresessed()

// }




// State variables are the parts of your program that change over time.

// Settings variables should contain all of the "fixed" parts of your programs

// Code that runs over and over again
function loop() {
StarEnemies(); 
  window.requestAnimationFrame(loop);
}

// Setup is run once, at the start of the program. It sets everything up for us!
function setup() {
  // Put your event listener code here

  window.requestAnimationFrame(loop);
}

setup(); // Always remember to call setup()!
let x = 1
console.log(x) 