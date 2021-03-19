var alien, alienImg, fruit1, fruit2, fruit3, fruit4, fruit
var sword, swordImg
var gameOver, gameOverImg
var enemyGroup, fruitGroup
var score
var gameState = "play"
var gameOverSound,knifeSound
function preload() {
  alienImg = loadAnimation("alien1.png", "alien2.png")
  fruit1 = loadImage("fruit1.png")
  fruit2 = loadImage("fruit2.png")
  fruit3 = loadImage("fruit3.png")
  fruit4 = loadImage("fruit4.png")
  swordImg = loadImage("sword.png")
  gameOverImg = loadImage("gameover.png")
  gameOverSound=loadSound("gameover.mp3")
  knifeSound=loadSound("knifeSwooshSound.mp3")
}

function setup() {
  sword = createSprite(10, 10, 100, 100)
  sword.addImage("swordImg", swordImg)
  sword.scale = 0.5
  sword.debug = true


  enemyGroup = new Group()
  fruitGroup = new Group()


  score = 0
}

function Fruit() {
  fruit = createSprite(100, 100, 100, 100)




}

function draw() {
  background("BLUE");
  
  
  
  
  if (gameState === "play") {
    Fruit();
    sword.y = mouseY
    sword.x = mouseX



    enemy()
    

    if (fruitGroup.isTouching(sword)) {
      fruitGroup.destroyEach()
      score = score + 1
      knifeSound.play()
      
    }
    if (enemyGroup.isTouching(sword)) {
      gameState = "end"
sword.addImage( "gameImg",gameOverImg)
gameOverSound.play()

    }

  } else if (gameState === "end") {
    enemyGroup.destroyEach()
    fruitGroup.destroyEach()

sword.x=200
    sword.y=200


  }
  text("score= " + score, 300, 30)
  drawSprites();
}



function Fruit() {
  if (frameCount % 80 === 0) {
    fruit = createSprite(0, 200, 20, 20)
    
    fruit.lifetime = 600
    fruit.y = Math.round(random(10, 380))
    var r = Math.round(random(1, 4))
    if (r === 1) {
      fruit.addImage(fruit1)
    } else
    if (r === 2) {
      fruit.addImage(fruit2)
    } else if (r === 3) {
      fruit.addImage(fruit3)
    } else

    if (r === 4) {
      fruit.addImage(fruit4)
    }
    fruit.scale = 0.25
    fruitGroup.add(fruit)

  var Position=Math.round(random(1,2))
    if (Position===1){
      fruit.x=400
      fruit.velocityX=-(7+(score/5))
    }else if (Position===2){
      fruit.x=0
      fruit.velocityX=7+(score/5)
      
    }


  }


}

function enemy() {
  if (frameCount % 190 === 0) {
    alien = createSprite(200, 10, 10, 10)
    alien.addAnimation("alien", alienImg)
    alien.velocityY = 2+(score/10)
    alien.x = Math.round(random(10, 380))
    alien.lifetime = 600
    enemyGroup.add(alien)
    

  }




}