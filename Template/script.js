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

};
const Moon ={
hue:20,
};
const star ={
hue:60,
};
const lineofdeath ={
hue:90,

}


function bigSun(){  
  
// Pallets/ bullets
Util.setPositionPixels(50,100,Mini )  
Util.setSize(30,30,Mini);
Util.setColour(Moon.hue,Sun.saturation,Sun.lightness,Sun.alpha,Mini);//using the differnt hue but the same sat light and alpha as the sun

  
// Big Sun aka the bunker
Util.setColour(Sun.hue,Sun.saturation,Sun.lightness,Sun.alpha,Big);
Util.setRoundedness(0,Big);
Util.setPositionPixels(50,500,Big);

// Star enemeies 
Util.setColour(star.hue,Sun.saturation,Sun.lightness,Sun.alpha,Star);
Util.setSize(89,10,Star);

}
bigSun();


// line which represents the line of death the yellow stuff shouldn't c
function lineOfDeath(){
Util.setColour(lineofdeath.hue,50,50,1,line)
Util.setSize(800,10,line);
Util.setPositionPixels(0,400,line);
Util.setRoundedness(0,line)
};

lineOfDeath();
// ...existing code...




function handleKeyPress(event) {
    console.log("Key pressed:", event.key);
    // Add your key handling logic here

    }


// Remove the old Keypresessed function and replace with:
document.addEventListener("keydown", handleKeyPress);
// Remove the old Keypresessed function and replace with:







// function Keypresessed(){
//  addEventListener("keydown",listener) 
// console.log("keydown","the key has been pressed")
// }
// Keypresessed()


// State variables are the parts of your program that change over time.

// Settings variables should contain all of the "fixed" parts of your programs

// Code that runs over and over again
function loop() {

  window.requestAnimationFrame(loop);
}

// Setup is run once, at the start of the program. It sets everything up for us!
function setup() {
  // Put your event listener code here

  window.requestAnimationFrame(loop);
}

setup(); // Always remember to call setup()!
x = 1
console.log(x) 