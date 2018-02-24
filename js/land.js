define(["tools"],function(t){
	function CreatLand(ctx,img,speed){
		this.ctx = ctx;
		this.img = img;
		this.speed = speed;
		this.x = img.width * CreatLand.num;
		CreatLand.num ++;
	}
	CreatLand.num = 0;
	t.extend(CreatLand.prototype,{
		draw:function(){
			this.ctx.drawImage(this.img,this.x,this.ctx.canvas.height-this.img.height);
		},
		update:function(){
			this.x-=this.speed;
			if(this.x<-this.img.width){
				this.x = this.img.width*(CreatLand.num-1)-10;
			}
		}
	})
	function getLand(ctx,img,speed){
		return new CreatLand(ctx,img,speed);
	}
	return getLand;
})