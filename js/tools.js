(function(win){
	// extend方法 - 挂载方法
	function extend(obj1,obj2){
		for(var key in obj2){
			if(!obj1.hasOwnProperty(key)){
				obj1[key] = obj2[key];
			}
		}
	}
	win.extend = extend;
	//加载图片
	function loadImage(imgObj,callback){
		//存储加载后的图片对象
		var images ={};
		//需要加载的图片数量
		var imgNum = 0;
		//已经加载的图片数量
		var	loadedImgNum=0;
		//加载图片
		for(var imgName in imgObj){
			// 当图片全部加载之后再调用回调函数运行游戏
			imgNum++;
			var img = new Image();
			img.src=imgObj[imgName];
			images[imgName]=img;
			img.onload=function(){
				loadedImgNum++;
				if(loadedImgNum>=imgNum){
					callback(images);
				}
			}
		}
	}
	win.loadImage=loadImage;
})(window)
