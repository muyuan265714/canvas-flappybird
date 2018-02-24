require(["./js/tools.js","./js/sky.js","./js/land.js","./js/bird.js","./js/pipe.js"],function(t,getSky,getLand,getBird,getPipe){
		// 等待图片加载
		t.loadImage({
			bird: './images/bird.png',
			sky: './images/sky.png',
			land: './images/land.png',
			pipeDown: './images/pipeDown.png',
			pipeUp: './images/pipeUp.png'
		},function(images){
			// 创建待执行任务数组
			var member = [];
			// 获取画布
			var cvs = document.getElementById("cvs");
			var ctx = cvs.getContext("2d");
			// 绘制天空
			for(var i=0;i<2;i++){
				member.push(getSky(ctx,images.sky,7));
			}
			// 绘制小鸟
			member.push(getBird(ctx,images.bird,100,100,3,1));
			// 绘制管道
			for(var i=0;i<7;i++){
				member.push(getPipe(ctx,images.pipeDown,images.pipeUp,300,150,7));
			}
			// 绘制大地
			for(var i=0;i<4;i++){
				member.push(getLand(ctx,images.land,7));
			}
			// 获取小鸟
			var bird = getBird();
			// 定时器驱动游戏
			var timer = setInterval(function(){
				ctx.clearRect(0,0,cvs.width,cvs.height);
				// 循环遍历绘制整个游戏
				member.forEach(function(a){
					a.draw();
					a.update();
				})
				// 游戏结束条件判断
				if(bird.y<13
					||bird.y>cvs.height-images.land.height-bird.img.height+25
					||ctx.isPointInPath(bird.x+bird.width/2-10,bird.y-5)
					||ctx.isPointInPath(bird.x+bird.width/2-20,bird.y+18)){
					clearInterval(timer);
			}
				// 重启画笔路径
				ctx.beginPath();
			},50)
		});
});