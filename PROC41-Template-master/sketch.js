
var batman;
var walkman;
var thunder;
var sky;

function preload(){
    walkman = loadImage('walking1.png');
   thunder = loadImage('1.png');
}
function setup(){
    createCanvas  (500,800);
 batman = createSprite (250,250,20,20);
 sky = createSprite (200,100,30,30);
batman.addImage(walkman)
sky.addImage(thunder)
    batman.scale= 0.5
    batman.y = 400
}

function draw(){
    background("black");
    
   drawSprites() ;

}   

