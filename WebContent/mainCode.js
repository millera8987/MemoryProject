
var game = new Phaser.Game(800, 480, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });
/*
var MySprite = function(x,y,dx,dy,width,height,color,isDragable){
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.width = width;
	this.height = height;
	//this.image = game.add.sprite(x, y, who);
	//this.image.scale.setTo(width/this.image.width, height/this.image.height);
	//this.bounceAmount = dy;
	//this.y = y - this.image.height;
	this.drawing = game.add.graphics(this.x,this.y);
	this.drawing.beginFill(color);
	this.drawing.drawCircle(0,0,this.width);
	this.drawing.endFill();
	if(isDragable){
		this.drawing.inputEnabled = true;
		this.drawing.input.enableDrag(true);
	}
	this.move = function(lb,rb,tb,bb){
		this.drawing.x = this.x;
		this.drawing.y = this.y;
		
		if(this.x + this.dx - this.width/2 >= lb && this.x + this.dx + this.width/2 <= rb){			
			this.x += this.dx;
		}
		if(this.y + this.dy - this.height/2 >= tb && this.y + this.dy + this.height/2 <= bb){
			this.y += this.dy;
		}
		
		
	};
	
	this.setDx = function(anydx){
		this.dx = anydx;
	};
	this.setDy = function(anydy){
		this.dy = anydy;
	};
	
	this.toString = function(){
		return "" + this.x + ", " + this.y + "--" + this.dx + ", " + this.dy + " - " ;
	};
};

*/




function preload() {

    //  You can fill the preloader with as many assets as your game requires

    //  Here we are loading an image. The first parameter is the unique
    //  string by which we'll identify the image later in our code.

    //  The second parameter is the URL of the image (relative)

    game.load.image('ackbarCard', 'assets/pics/ackbarCard.jpg');
    game.load.image('C3POCard', 'assets/pics/C3POCard.jpg');
    game.load.image('ChewyCard', 'assets/pics/ChewyCard.jpg');
    game.load.image('hanSoloCard', 'assets/pics/hanSoloCard.jpg');
    game.load.image('jarjarCard', 'assets/pics/JarJarCard.jpg');
    game.load.image('obiCard', 'assets/pics/obiCard.jpg');
    game.load.image('darthCard', 'assets/pics/darthCard.jpg');
    game.load.image('YodaCard', 'assets/pics/YodaCard.jpg');
    
    game.load.image('ackbar', 'assets/pics/ackbar.jpg');
    game.load.image('c3po', 'assets/pics/c3po.jpg');
    game.load.image('chewy', 'assets/pics/chewy.jpg');
    game.load.image('han', 'assets/pics/han.jpg');
    game.load.image('jarjar', 'assets/pics/jarjar.jpg');
    game.load.image('obi', 'assets/pics/obi.jpg');
    game.load.image('vader', 'assets/pics/vader.jpg');
    game.load.image('yoda', 'assets/pics/yoda.jpg');
    
    game.load.image('backofcard', 'assets/pics/backOfCard.jpg');
    
    game.load.image('background', 'assets/pics/Tatooine.jpg');
    game.load.image('gameover', 'assets/pics/game-over.jpg');
    game.load.image('intro', 'assets/pics/intro.jpg');
    
}
var text2;
var background;
var gameOver;
var intro;
var score = 0;
var count = 0;
var showMatched = false;
var showMissed = false;
var cardValue1,cardValue2;
var cardState = 0;
//int mx, my;

var cardGame;

//var cardState = "first";
var isOnBackground = false;

var isMatched = false;
var isMissing = false;
var gameState = 0;
var timerText;
var isTiming = false;
var timeStart = 0;
var time = 0;

var timer = 0;
var timerObject;
var matchCount = 0;




function create() {
	//game.input.onDown.add(actionOnClick, this);
	
    //  This creates a simple sprite that is using our loaded image and
    //  displays it on-screen
    //  and assign it to a variable
   // var image = game.add.sprite(0, 0, 'einstein');

    //game.physics.enable(image, Phaser.Physics.ARCADE);

    //image.body.velocity.x=150;
	//var background = new MySprite(0,0,0,0,game.width,game.height,'background');
	
	
	background = game.add.sprite(0, 0, 'background');
	background.scale.setTo(game.width/background.width, game.height/background.height);
	background.inputEnabled = true;
	cardGame = new CardGame(game);
	
	intro = game.add.sprite(0, 0, 'intro');
	intro.scale.setTo((game.width/3)/intro.width, (game.height/3)/intro.height);
	intro.x = game.width/2 - intro.width/2;
	intro.y = game.height/2 - intro.height/2;
	
	gameOver = game.add.sprite(0, 0, 'gameover');
	gameOver.scale.setTo((game.width/3)/gameOver.width, (game.height/3)/gameOver.height);
	gameOver.x = game.width/2 - gameOver.width/2;
	gameOver.y = game.height/2 - gameOver.height/2;
	gameOver.visible = false;

	
	 
	var style1 = { font: "bold 32px Arial", fill: "#000", boundsAlignH: "center", boundsAlignV: "middle" };
    //  The Text is positioned at 0, 100
	game.add.text(0, game.height-35, "10 points for a match", style);
	game.add.text(5*game.width/8, game.height-35, "-2 points for a miss", style);
	
	var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
	timerText = game.add.text(game.width - 200, 50, "Time = 0.0", style);
    text = game.add.text(0, 50, "Arrow keys move the yello circle", style);
    //text2 = game.add.text(game.width - 200, 50, "Missed", style);
    var style = { font: "bold 32px Arial", fill: "#f00", boundsAlignH: "center", boundsAlignV: "middle" };
    text2 = game.add.text(game.width/2-50, game.height - 35, "Missed", style);
    text2.visible = false;
    
    game.input.onDown.add(actionOnClick, this);
    background.events.onInputDown.add(downListener, this);    
    background.events.onInputUp.add(upListener, this);
    
    initTimer();

}

function initTimer(){
	timerText.text = "Time: 0.0";
	timerObject = game.time.events;
    timerObject.loop(100, updateCounter, this);   
    timerObject.pause();
}

function updateCounter() {

    timer++;

    timerText.text = "Time: " + timer/10;

}


function downListener(){
	isOnBackground = true;
}
function upListener(){
	isOnBackground = false;
}

function actionOnClick () {
	
	if(gameState == 0){
		intro.visible = false;
		timerObject.resume();
		gameState = 1;
	}
	else if(gameState == 1){
		//console.log(""+cardState);
		if(cardState == 0){
			
			var data = cardGame.cardClick(game.input.mousePointer.x,game.input.mousePointer.y);
			if(data >= 0){
				cardValue1 = data;
				cardState++;
			} 
		}
		else if(cardState == 1){
			
			var data = cardGame.cardClick(game.input.mousePointer.x,game.input.mousePointer.y);
			if(data >= 0){
				cardValue2 = data;
				if(Math.abs(cardValue1-cardValue2)==8){
					//keep score
					isMatched = true;
					score+=10;
					matchCount++;
					if(matchCount >= 8){
						gameState = 2;
						gameOver.visible = true;
						 timerObject.pause();
					}
				}
				else{
					isMissing = true;
					console.log("reset" + isMissing);
					score-=2;
				}
				if(isMatched){
					text2.text = "Match";
				}
				else{
					text2.text = "Missed";
				}
				text2.visible = true;
				cardState++;
			} 
		}
		else if(cardState == 2){
			
			if(isMissing){
				
				cardGame.setNotShowing(cardValue1);
				cardGame.setNotShowing(cardValue2);
			}
			cardState = 0;
			isMatched = false;
			isMissing = false;
			text2.visible = false;
			
		}
	}
	else if(gameState == 2){
		//ending
		score = 0;
		cardGame = new CardGame(game);
		intro.visible = true;
		intro.bringToTop();
		gameOver.visible = false;
		gameOver.bringToTop();
		
		cardState = 0;
		isMatched = false;
		isMissing = false;
		text2.visible = false;
		gameState = 0;
		//timerObject.destroy();
		timer=0;
		timerText.text = "Time: 0.0";
		matchCount = 0;
		
	}
	
	//if(!isOnBackground){
		//text.text = isOnBackground + "hi" + cardGame.cardClick(game.input.mousePointer.x,game.input.mousePointer.y);
	//}
		//text2.text = "" + isOnBackground + " " + count;
		//count++;
		
}

function update() {
	//empty
	//
	//timerText.text = "Time= " + timer;
	text.text = "Score " + score;
	cardGame.show();
	
	
}


