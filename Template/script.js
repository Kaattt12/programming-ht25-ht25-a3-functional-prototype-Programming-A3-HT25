/*
 * IDB Programming: Code Playground
 *
 */
//creating a tower and pellets
import * as Util from "./util.js";
//this probobly could be done better with arrays/ object but im lazy and or uneducated :P
let Big=Util.createThing("moon");//tower
let Mini=Util.createThing("sun");//pellets
let Star =Util.createThing("star");//star
let line = Util.createThing("line");//line
let EnemyTwo =Util.createThing("star");//star
let id = 0;

let lastkeydownIdx=-1
const noneDirection =-1;
const leftDirection = 0;
const rightDirection =1;
const allKeys = ["KeyZ"  ,"KeyX"  ,"KeyC"  ,"KeyV"  ,"KeyB"  ,"KeyN"  ,"KeyM"];

function selectDirection(KeyCode){

  const KeyIndex = allKeys.indexOf(KeyCode);

if(KeyIndex===-1){
return noneDirection;  
}

if(lastkeydownIdx<0){
lastkeydownIdx=KeyIndex;
return noneDirection;
}

if(lastkeydownIdx>KeyIndex){
lastkeydownIdx=KeyIndex;
  return leftDirection;

}else if(lastkeydownIdx<KeyIndex){
  lastkeydownIdx=KeyIndex;
  return rightDirection;
}
else
{
return noneDirection;
}




}



const bunkerposition = [50,150,250,350,]






const Sun ={//object of the sun/ aka the bunker
hue:122,
saturation:100,
lightness:50,
alpha:1,
 pixelx:0, 
 pixely:500,
 pixelwidth:50,
 pixelheight:50,
 stopp:false,
moveleft(){
if(this.pixelx<0){
this.pixelx=0}
else{
this.pixelx-=5;
}},
moveright(){
if(this.pixelx+this.pixelwidth>=screen.width){
this.pixelx=screen.width-this.pixelwidth}
else{
this.pixelx+=5;
}},
};
let shoot=false;


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


const Moon ={//pallets
hue:20,
pixelx: 0,
pixely: 0,
};

const star ={//star enemies
hue:60,
pixely:1,
pixelx:200,

};
const starTwo ={//star enemies
hue:60,
pixely:1,
pixelx:100,

};
const lineofdeath ={//green line of death
hue:90,
 x:0,
 y: 500,
stopp:false,
};





function StarEnemies(){// Star enemeies
if(star.stopp) return; 
Util.setColour(star.hue,Sun.saturation,Sun.lightness,Sun.alpha,Star);
Util.setSize(80,70,Star);
Util.setRoundedness(1,Star);
Util.setPositionPixels(star.pixelx,star.pixely,Star); 
star.pixely+=1;
if (star.pixely > lineofdeath.y) { // 500 is where the green line is
    star.stopp=true;
    Util.setColour(250,50,50,1,Star)
  }; 
  //game over box if you want it. 
  //if (star.pixely> lineofdeath.y){ window.alert("game over")} // somehow it is made;when the ball crosses the green line it shows alert  
setTimeout(() => {
 
  window.requestAnimationFrame(StarEnemies);
 
}, 15);;
};

function StarEnemeytwo(){
if(starTwo.stopp) return;
Util.setColour(star.hue,Sun.saturation,Sun.lightness,Sun.alpha,EnemyTwo);
Util.setRoundedness(1,EnemyTwo)
Util.setSize(80,70,EnemyTwo);
Util.setPositionPixels(starTwo.pixelx,starTwo.pixely,EnemyTwo);
starTwo.pixely+=1;
if (starTwo.pixely > lineofdeath.y) { // 500 is where the green line is
    starTwo.stopp=true;
    Util.setColour(250,50,50,1,EnemyTwo)//your lose
  }; 
  //game over box if you want it. 
  //if (star.pixely> lineofdeath.y){ window.alert("game over")} // somehow it is made;when the ball crosses the green line it shows alert  
setTimeout(() => {
 
  window.requestAnimationFrame(StarEnemeytwo);
 
}, 12);;
};





function bigSun(){// Big Sun aka the bunker
Util.setColour(Sun.hue,Sun.saturation,Sun.lightness,Sun.alpha,Big);
Util.setRoundedness(0,Big);
Util.setPositionPixels(Sun.pixelx,Sun.pixely,Big);
Util.setSize(Sun.pixelwidth,Sun.pixelheight,Big)
};

function lineOfDeath(){//green line with a 
Util.setColour(lineofdeath.hue,50,50,1,line)
Util.setSize(screen.width-lineofdeath.x,10,line);
Util.setPositionPixels(lineofdeath.x,lineofdeath.y,line);
Util.setRoundedness(0,line);
line.style.position = "absolute";//figure out how to make it stay at the bottom
line.style.width = "100%";
};

function Pallets(){// Pallets/ bullets  
Util.setSize(20,20,Mini);
Util.setColour(Moon.hue,Sun.saturation,Sun.lightness,Sun.alpha,Mini);//using the differnt hue but the same sat light and alpha as the sun

  
};
// array for the movement/ pressing keys all of them to move through each position, shooting with a holding to make bigger and the small as samll damage.
bigSun();
Pallets();
lineOfDeath();
StarEnemeytwo();
// ...existing code...?

//shite
// function moveSun(){


//   document.addEventListener("keydown", (event) => {
//     if (event.code == "KeyB" && !event.repeat) {
//       console.log(`Key Down - Code ${event.code} | Keycode ${event.keyCode} | Key ${event.key} | Repeat ${event.repeat ? '' : 'not'}`);
      
      
//     }
//   });
// };
// moveSun();

function drawPallets(){//drawPallets
  if(shoot==false){
 return;} 
if (checkCollision(Mini, Star,)) {
    console.log("HIT! Stopping Star and Bullet.");
    star.stopp = true;
    Util.setColour(0,20,20,1,Star)
  }
  if (Moon.pixely < 42) {
  Moon.pixely = 500;
  shoot=false; 
  Util.setPositionPixels(Moon.pixelx, Moon.pixely, Mini);
}   
  
if (checkCollision(Mini, EnemyTwo)) {
    console.log("HIT! EnemyTwo and Bullet.");
    starTwo.stopp = true; // Stop the movement of the second enemy
    // Set color to black/dark gray to make it "disappear"
    Util.setColour(0, 0, 10, 1, EnemyTwo); 

    // Reset the bullet
    Moon.pixely = 500;
    shoot = false; 
    Util.setPositionPixels(Moon.pixelx, Moon.pixely, Mini);
    return; // Stop bullet movement and exit this frame
}else{
  Moon.pixely-=42;
Util.setPositionPixels(Moon.pixelx, Moon.pixely, Mini) // Negative value moves up, positive moves down
  };
 
  setTimeout(() => {
   
  window.requestAnimationFrame(drawPallets);
 
}, 150);;
  
  
  
  
  
  //if(Sun.stopp) {Util.setPositionPixels(Sun.pixelx, Sun.pixely, Mini);}  
     //if(shoot===true){};
};


// not working now 

// State variables are the parts of your program that change over time.

// Settings variables should contain all of the "fixed" parts of your programs

// Code that runs over and over again
function loop(){
StarEnemies(); 
drawPallets();  

swipeDirection()
console.log(shoot)//false or true :P
StarEnemeytwo();

};

// Setup is run once, at the start of the program. It sets everything up for us!
function setup() {
  window.addEventListener("keydown", (event)=>{
 if(event.code==="KeyG"&&shoot===false){
 
  
}else{

const direction=selectDirection(event.code)  

if(direction===rightDirection){
Sun.moveright()
bigSun();
}else if(direction===leftDirection){
Sun.moveleft()
bigSun();
}



}
  
 
})
 window.addEventListener("keyup", (event)=>{
 if(event.code==="KeyG" && shoot===false){
  shoot=true;
  Moon.pixelx = Sun.pixelx+ (Sun.pixelwidth / 2) - 10; 
  Moon.pixely = Sun.pixely; 
  
  drawPallets();
 } 
 });//an anonymys function which takes the value the of the key as a parameter ~DANIEL
 window.requestAnimationFrame(loop);
};

setup(); // Always remember to call setup()!
let x = 1
console.log(x) 




