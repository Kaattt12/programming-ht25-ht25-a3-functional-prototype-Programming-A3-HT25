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

let id = 0;


const allKeys = ["KeyZ"  ,"KeyX"  ,"KeyC"  ,"KeyV"  ,"KeyB"  ,"KeyN"  ,"KeyM"];
const currentKeys = []
let bunkerPositionIndex = 0;
const bunkerposition = [50,150,250,350,]
const Sun ={//object of the sun/ aka the bunker
  hue:122,
  saturation:100,
  lightness:50,
  alpha:1,
 pixelx:50, 
 pixely:500,
 pixelwidth:50,
 pixelheight:50,
 stopp:false,
moveleft(){
if(this.pixelx<50){
this.pixelx=50}
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
const Moon ={//pallets
hue:20,};

const star ={//star enemies
hue:60,
pixely:1,
pixelx:200,

};
const lineofdeath ={//green line of death
hue:90,
 x:0,
 y: 500,
stopp:false,
};



function compareKeys(key1,key2){
if (allKeys.indexOf(key1) - allKeys.indexOf(key2) === 1){
  console.log("were going left");
  return (1)
}else if (allKeys.indexOf(key1) - allKeys.indexOf(key2) === -1){
  console.log("were going right");
  return (-1)
}
};

compareKeys("KeyZ","KeyX")//argument

document.addEventListener("keydown", (event)=>{
  if (Math.abs(compareKeys(currentKeys[0],currentKeys[1]))===1){
    window.clearTimeout(id);
  }
})

document.addEventListener("keyup", (event)=>{
id = window.setTimeout(/stopscroll()/,1000);
});



function StarEnemies(){// Star enemeies
if(star.stopp) return; 
Util.setColour(star.hue,Sun.saturation,Sun.lightness,Sun.alpha,Star);
Util.setSize(80,70,Star);
Util.setRoundedness(1,Star);
Util.setPositionPixels(star.pixelx,star.pixely,Star); 
star.pixely+=1;
if (star.pixely > lineofdeath.y) { // 500 is where the green line is
    star.stopp=true;
  }; 
  //game over box if you want it. 
  //if (star.pixely> lineofdeath.y){ window.alert("game over")} // somehow it is made;when the ball crosses the green line it shows alert  
setTimeout(() => {
 
  window.requestAnimationFrame(StarEnemies);
 
}, 15);;







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
 return;
}
  if (Sun.pixely < 42) {
  Sun.pixely = 500;
  shoot=false; 
  Util.setPositionPixels(Sun.pixelx, Sun.pixely, Mini);
} 
  else{
    Sun.pixely-=42;
Util.setPositionPixels(Sun.pixelx, Sun.pixely, Mini) // Negative value moves up, positive moves down
  };
  setTimeout(() => {
 
  window.requestAnimationFrame(drawPallets);
 
}, 150);;
  
  
  
  
  
  //if(Sun.stopp) {Util.setPositionPixels(Sun.pixelx, Sun.pixely, Mini);}  
     //if(shoot===true){};
};

function drawBunker(){
bigSun();




  setTimeout(() => {
 
  requestAnimationFrame(drawBunker);
 
}, 150);;
};









// not working now 

// State variables are the parts of your program that change over time.

// Settings variables should contain all of the "fixed" parts of your programs

// Code that runs over and over again
function loop(){
StarEnemies(); 
drawPallets();  
//drawBunker();

console.log(shoot)
 

};

// Setup is run once, at the start of the program. It sets everything up for us!
function setup() {
  // Put your event listener code here
 
 
  window.addEventListener("keydown", (event)=>{
if(event.code==="KeyG"){
  shoot=true;
   drawPallets();
}else if(event.code==="KeyD"){
Sun.moveright()
bigSun();
}else if(event.code==="KeyA"){
Sun.moveleft()
bigSun();
}

})
 window.addEventListener("keyup", (event)=>{
 if(event.code==="KeyG"){
  //shoot=false;
 } 
 });//an anonymys function which takes the value the of the key as a parameter ~DANIEL
 window.requestAnimationFrame(loop);
};



























setup(); // Always remember to call setup()!
let x = 1
console.log(x) 




