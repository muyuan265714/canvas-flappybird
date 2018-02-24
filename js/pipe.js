define(["tools"],function(t){
	function CreatePipe(ctx,imgDown,imgUp,x,space,speed){
		this.ctx = ctx;
		this.imgDown = imgDown;
		this.imgUp = imgUp;
		this.space = space;
		this.speed = speed;
		this.x = x + CreatePipe.num*this.imgDown.width*3.2;
		this.yUp = Math.floor(Math.random()*230+150);
		this.yDown = -this.yUp+imgDown.height+this.space;
		CreatePipe.num++;
	}
	CreatePipe.num = 0;
	t.extend(CreatePipe.prototype,{
		draw:function(){
			this.ctx.drawImage(this.imgDown,this.x,-this.yUp);
			this.ctx.drawImage(this.imgUp,this.x,this.yDown);
			this.path();
		},
		// 在管道移动时进行绘制，用于判断小鸟时候触碰管道
		path:function(){
			this.ctx.rect(this.x,-this.yUp,this.imgDown.width,this.imgDown.height);
			this.ctx.rect(this.x,this.yDown,this.imgDown.width,this.imgDown.height);
		},
		update:function(){
			this.x-=this.speed;
			if(this.x<-this.imgDown.width){
				this.yUp = Math.floor(Math.random()*230+150);
				this.yDown = -this.yUp+this.imgDown.height+this.space;
				this.x += CreatePipe.num*this.imgDown.width*3.2;
			}
		}
	})
	function getPipe(ctx,imgDown,imgUp,x,space,speed){
		return new CreatePipe(ctx,imgDown,imgUp,x,space,speed);
	}
	return getPipe;
})