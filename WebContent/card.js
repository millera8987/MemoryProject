//public class Card {
	/*
	int value = 0;
	int x,y;
	int width,height;

	boolean isMatched = false;
	boolean isShowing = false;
	
	Image image = null;
	Image backOfCard = null;*/
	
var Card = function(game, x, y, width,height,count,who,who1){
		this.x=x;
		this.y=y;
		this.width=width;
		this.height=height;
		this.value=count;
		this.cardImage = game.add.sprite(x, y, who);
		this.cardImage.scale.setTo(width/this.cardImage.width, height/this.cardImage.height);
		
		this.backOfCard = game.add.sprite(x, y, who1);
		this.backOfCard.scale.setTo(width/this.backOfCard.width, height/this.backOfCard.height);
		this.isMatched = false;
		this.isShowing = false;
		this.g = game.add.graphics(0,0);	
		this.g.lineStyle(2, 0xffff00, 1);
		this.g.drawRect(this.x,this.y,this.width,this.height);
		this.g.endFill();
	   
		
		
		this.isInside = function(mx, my){
			if(!this.isShowing && !this.isMatched){
				if(mx >= this.x && mx <= this.x + this.width && my >= this.y && my <= this.y + this.height){
					
					return this.value;
				}
			}
			
				
				return -1;
		
		};
//	
		this.getValue = function(){
			return this.value;
		};
		
		this.setShowing = function(isShowing1){
			this.isShowing = isShowing1;
		};
		
		this.drawing = function(){
			if(this.isShowing || this.isMatched){
				this.cardImage.visible = true;
				this.backOfCard.visible = false;
			}
			else{
				this.cardImage.visible = false;
				this.backOfCard.visible = true;
			}
			//this.g.x =this.x;
			//this.g.y = this.y;
			 //this.g.beginFill(0xFFFF00);
			
		};
	/*
	this.draw = function(){		
		if(this.isShowing || this.isMatched){
			g.drawImage(image,x,y,width,height,null);
		}
		else{
			g.drawImage(backOfCard,x,y,width, height,null);
		}
		g.setColor(Color.YELLOW);
		g.drawRect(x,y,width, height);	
	};
	
	this.isClickedInside = function(mouse){
		if(mouse.getX() < x){
			return false;
		}
		else if(mouse.getX() > x + width){
			return false;
		}
		if(mouse.getY() < y){
			return false;
		}
		else if(mouse.getY() > y + height){
			return false;
		}
		return true;
	};

	
	
	this.getValue = function() {
		return value;
	};
	this.setValue = function(value) {
		this.value = value;
	};
	this.isMatched = function() {
		return isMatched;
	};
	this.setMatched = function(isMatched1) {
		this.isMatched = isMatched1;
	};
	this.isShowing = function() {
		return isShowing;
	};
	this.setShowing = function(isShowing1) {
		this.isShowing = isShowing1;
	};
	
	this.getX = function() {
		return x;
	};
	this.setX = function(x1) {
		this.x = x1;
	};
	this.getY= function() {
		return y;
	};
	this.setY=function(y1) {
		this.y = y1;
	};
	this.getWidth=function() {
		return width;
	};
	this.setWidth=function(width1) {
		this.width = width1;
	};
	this.getHeight=function() {
		return height;
	};
	this.setHeight=function(height1) {
		this.height = height1;
	};*/
	
	
	/*
	this.getImage=function() {
		return image;
	};
	this.setImage = function(image) {
		this.image = image;
	};*/
	
};

function listener () {
	//this.isMatched = false;
	//this.isShowing = false;
	//if(!(this.isMatched || this.isShowing)){
		this.isShowing = true;
	//}
}