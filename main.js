const canvas = new fabric.Canvas('myCanvas');

const playerWidth = 150;
const playerHeight = 140;

var blockImageWidth = 30;
var blockImageHeight = 30;

var playerX = 10;
var playerY = 10;

var playerObject = "";
var blockImageObject = "";

function playerUpdate() {
    fabric.Image.fromURL("player.png", function(Img){
        playerObject = Img;
        playerObject.scaleToWidth(playerWidth);
        playerObject.scaleToHeight(playerHeight);
        playerObject.set({
            top: playerY,
            left: playerX
        });
        canvas.add(playerObject);
    });
}

function newImage(getImage) {
    fabric.Image.fromURL(getImage, function(Img) {
        blockImageObject = Img;
        blockImageObject.scaleToWidth(blockImageWidth);
        blockImageObject.scaleToHeight(blockImageHeight);
        blockImageObject.set({
            top: playerY,
            left: playerX
        });
        canvas.add(blockImageObject)
    });
}

// Apagar na próxima aula
//playerUpdate();
//newImage("dirt.jpg");
function keyDown(e){
    const keyPressed = e.keyCode;
    console.log(keyPressed)

//variavel com o tamanho do bloco
    const passo = 10
    if (e.shiftKey) {
        if (keyPressed == 189 && (blockImageHeight > 10)) {
            console.log("Diminui o tamanho do bloco");
            chanceSize(-passo);
        }
    
        if (keyPressed == 187) {
            console.log("Aumenta o tamanho do bloco");
            changeSize(passo)   
        }
    }
    if (keyPressed == 66) {
        console.log(e.key);
        newImage("bricks.jpg")

    } else if (keyPressed == 89) {
        console.log(e.key);
        newImage("yellowBricks.png")

    } else if (keyPressed == 68) {
        console.log(e.key);
        newImage("dirt.png")
    }
    if (keyPressed == 66) {
        console.log(e.key);
        newImage("bricks.jpg");

    } else if (keyPressed == 89) {
        console.log(e.key);
        newImage("yellowBricks.png");

    } else if (keyPressed == 68) {
        console.log(e.key);
        newImage("dirt.png");
    } else if (keyPresses == 68) {
        console.log(e.key);
        newImage("dirt.png");

    } else if (keyPressed == 75) {
        console.log(e.key);
        newImage("darkGrass.png"); 
    } else if (keyPressed == 76) {
        console.log(e.key);
        newImage("lightGrass.png");
    } else if (keyPressed == 71) {
        console.log(e.key);
        newImage("glowstone.png");
    } else if (keyPressed == 78) {
        console.log(e.key);
        newImage("netherrack.jpg");
    } else if (keyPressed == 83) {
        console.log(e.key);
        newImage("stone.jpg");
    } else if (keyPressed == 87) {
        console.log(e.key);
        newImage("wood.jpg");


    }




    




}


function changeSize(size){
    blockImageHeight += size
    blockImageWidth += size
    document.getElementById("larguraAtual").innerHTML - blockImageWidth;
    document.getElementById("alturaAtual").innerHTML = blockImageHeight;
    
}
