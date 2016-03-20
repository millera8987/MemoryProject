
var CardGame = function(game){

    this.NUMBER_OF_CARDS = 16;
	
    this.CARD_WIDTH = 180 * 50 / 100;
    this.CARD_HEIGHT = 206* 50 / 100;
	
	//var FIRST_CARD = 1;
	//var SECOND_CARD = 2;
	//var RESULTS = 3;
    
    
	
    this.gameX = game.width/2 - 220;
    this.gameY = game.height/2 - 236;
    this.spacing = 10;
    this.firstCard = null;
    this.secondCard = null;
	this.cards = new Array();
		
	this.cardValues = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
	
	this.num = 0;
	
	for(var i=0;i<this.NUMBER_OF_CARDS;i++){
		//this.cardValues[i]=i;
		
		do{
			this.num = game.rnd.integerInRange(0, this.cardValues.length-1);
		}
		while(this.cardValues[this.num]!=0);
		this.cardValues[this.num] = i;
	}	
	
	this.getImage=function(number){

		switch(number){
		case 1:
			return "ackbar";
		case 2:
			return "c3po";
		case 3:
			return "chewy";
		case 4:
			return "han";
		case 5:
			return "jarjar";
		case 6:
			return "obi";
		case 7:	
			return "vader";
		case 8:
			return "yoda";
		case 9:
			return "ackbarCard";
		case 10:		
			return "C3POCard";
		case 11:			
			return "ChewyCard";
		case 12:			
			return "hanSoloCard";
		case 13:			
			return "jarjarCard";
		case 14:
			return "obiCard";
		case 15:			
			return "darthCard";
		default:
			return "YodaCard";
		}
	};
	
	
	for(var i=0;i<this.NUMBER_OF_CARDS;i++){        
			var x = this.cardValues[i]%4*(this.CARD_WIDTH + this.spacing) + this.gameX;//MyMethods.getRandomInt(gameX,gameWidth - CARD_WIDTH);
	        var y = Math.floor(this.cardValues[i]/4)*(this.CARD_HEIGHT + this.spacing) + this.gameY;//MyMethods.getRandomInt(gameY,gameHeight - CARD_HEIGHT);
	        var width = this.CARD_WIDTH;
	        var height = this.CARD_HEIGHT;
	        
	        this.cards[i] = new Card(game, x,y,width,height,(i+1),this.getImage(i+1),"backofcard");    
	}	  
	
	
	this.show = function(){
		for(var i=0;i<this.cards.length;i++){
			this.cards[i].drawing();	
		}
	};
	
	this.setNotShowing = function(value){
		for(var i=0;i<this.cards.length;i++){
			if(value == this.cards[i].getValue()){
				this.cards[i].setShowing(false);
			}
		}
	};
	
	/*
	this.draw = function(){
		//g.setColor(Color.YELLOW);
		//g.drawRect(gameX, gameY, gameWidth, gameHeight);
		for(var i=0;i<this.cards.length;i++){
			this.cards[i].draw();	
		}
	};
	
	this.getCardClicked = function(m){
		for(var i=0;i<this.cards.length;i++){
			if(this.cards[i].isClickedInside(m)){
				return cards[i];
			}			
		}
		return null;

	};*/
	this.cardClick = function(mx,my){
		/*
		var col = Math.floor((mx - this.gameX)/(this.CARD_WIDTH + this.spacing));
		var row = Math.floor((my - this.gameY)/(this.CARD_HEIGHT + this.spacing));
		return row * 4 + col;
		*/
		
		for(var i=0;i<this.NUMBER_OF_CARDS;i++){
			var answer = this.cards[i].isInside(mx,my); 
			if(answer >0){
				//console.log("found " + answer);
				this.cards[i].setShowing(true);
				return answer;		
			}
		}
		//console.log("not");
		return -1;
	};
	
	
	
	//this.dealCards = function(){
		 
		//cards = new Card[NUMBER_OF_CARDS];
		
		//int[] cardValues = new int[NUMBER_OF_CARDS];
		   	     
	//};
	
	
	/*
	this.isMatched = function(){
		return Math.abs(this.firstCard.getValue()-this.secondCard.getValue()) == 8;
	};
	
	this.isMissed = function(){
		return !this.isMatched();
	};
	
	this.resetTwoCards = function(){
		if(this.isMatched()){
			this.firstCard.setMatched(true);
			this.secondCard.setMatched(true);			
		}
		else{
			this.firstCard.setShowing(false);
			this.secondCard.setShowing(false);
		}
	};

	
	this.getFirstCard = function() {
		return firstCard;
	};

	this.setFirstCard = function(firstCard1) {
		this.firstCard = firstCard1;
	};

	this.getSecondCard = function() {
		return secondCard;
	};

	this.setSecondCard = function(secondCard1) {
		this.secondCard = secondCard1;
	};*/
};