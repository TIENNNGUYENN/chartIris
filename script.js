import classOne from './dataClassOne.js';
import classTwo from './dataClassTwo.js';
import classThree from './dataClassThree.js';
let canvas =  document.getElementById("myCanvas");
let context =  canvas.getContext('2d');

let height = 1000;

function drawClassOy(){
    for(let j=0; j<=10; j++){
       context.moveTo(0,j*100);
       context.lineTo(1000, j*100);
       context.stroke();
       
    }
 ;
 
}
function drawClassOx(){
    for(let k=0; k<=10; k++){
       context.moveTo(k*100,0);
       context.lineTo(k*100,1000);
       context.stroke();
       
    }
}
function drawClass(){
    for(let i=0; i<=classOne.length; i++){
        context.fillRect(classOne[i].feature3*100,height-classOne[i].feature4*100, 10, 10);
        context.fillStyle="red";
        context.fillRect(classTwo[i].feature3*100,height-classTwo[i].feature4*100, 10, 10);
        context.fillStyle="blue"; 
        context.fillRect(classThree[i].feature3*100,height-classThree[i].feature4*100, 10, 10);
        context.fillStyle="green";
    }

}

drawClassOx();
drawClassOy()
drawClass();

