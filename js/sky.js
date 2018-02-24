define(["tools"],function(t){
	function CreatMap(ctx,img,speed){
		this.ctx = ctx;
		this.img = img;
		this.speed = speed;
		this.x = img.width * CreatMap.num;
		CreatMap.num ++;
	}
	CreatMap.num = 0;
	t.extend(CreatMap.prototype,{
		draw:function(){
			this.ctx.drawImage(this.img,this.x,0);
		},
		update:function(){
			this.x-=this.speed;
			if(this.x<-this.img.width){
				this.x = this.img.width*(CreatMap.num-1)-5;
			}
		}
	})
	function getSky(ctx,img,speed){
		return new CreatMap(ctx,img,speed);
	}
	return getSky;
})