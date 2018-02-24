define(["tools"],function(t){
	function CreateBird(ctx,img,x,y,imgX,imgY){
		// 初始化数据
		this.ctx = ctx;
		this.img = img;
		this.x = x;
		this.y = y;
		this.imgX = imgX;
		this.imgY = imgY;
		this.width = this.img.width/imgX;
		this.height = this.img.height/imgY;
		this.on = 0;
		this.speed=5;
		this.update();
	}
	t.extend(CreateBird.prototype,{
		// 原型添加方法
		draw:function(){
			this.y+=this.speed;
			this.speed+=0.9;
			// 图片小鸟切换 （翅膀扇动）
			this.on = ++this.on>=this.imgX ? 0 : this.on;
			// 小鸟倾斜角度
			var Angle = Math.PI/180*10;
			var MaxAngle = Math.PI/180*45;
			var radian = Angle*this.speed;
			radian = radian>MaxAngle ? MaxAngle : radian;
			this.ctx.save();
			this.ctx.translate(this.x,this.y);
			this.ctx.rotate(radian);
			this.ctx.drawImage(
				this.img,
				this.width*this.on,
				0,
				this.width,
				this.height,
				-this.width/2,
				-this.height/2,
				this.width,
				this.height
				)
			this.ctx.restore();
		},
		update:function(){
			var that = this;
			// 点击上跳
			this.ctx.canvas.onclick = function(){
				that.speed = -6;
			}
		}
	});
	// 第一次创建一个小鸟并返回 第二次返回第一个小鸟
	var bird = null;
	function getBird(ctx,img,x,y,imgX,imgY){
		if(!bird){
			bird = new CreateBird(ctx,img,x,y,imgX,imgY);
		}
		return bird;
	}
	return getBird;
})