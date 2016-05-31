/*---------------------------------------------------

	Name: fullscreen API v3.0.2
	By  : HNZ
	Date: 2015-11-09

	List:
	1.	fullstate()  返回全屏状态 
					 返回值： true  false

	2.	fullElm()    返回处于全屏模式的元素
	                 返回值： 元素对象

	3.	fullscreenchange(fn)监测全屏变化事件 
							fn：事件处理程序

	4.	fullscreen(elm)  进入全屏模式   
						 elm： 指定元素

	5.	exitfullscreen() 退出全屏模式

---------------------------------------------------*/
(function(win,doc){
	//获取当前浏览器 ： 属性、方法、事件
	var set=(function(){
		if(!(document.mozFullScreenEnabled || document.fullscreenEnabled || document.webkitFullscreenEnabled || document.msFullscreenEnabled)){
			return {'support':false};
		}
		if(doc.exitFullscreen){  
    		return {
    			'full':'requestFullscreen',    //进入全屏
    			'exit':'exitFullscreen',       //退出全屏
    			'fullEvent':'fullscreenchange',//全屏事件
    			'fullElm':'fullScreenElement', //全屏元素
    			'state':'fullscreenchange',    //全屏状态
    			'support':'fullscreenEnabled'  //是否支持全屏
    		}  
		}else if(doc.mozCancelFullScreen){  
	    	return {
    			'full':'mozRequestFullScreen',
    			'exit':'mozCancelFullScreen',
    			'fullEvent':'mozfullscreenchange',
    			'fullElm':'mozFullScreenElement',
    			'state':'mozFullScreen',
    			'support':'mozFullScreenEnabled'
    		}  
		}else if(doc.webkitCancelFullScreen){
	    	return {
    			'full':'webkitRequestFullScreen',
    			'exit':'webkitCancelFullScreen',
    			'fullEvent':'webkitfullscreenchange',
    			'fullElm':'webkitFullscreenElement',
    			'state':'webkitIsFullScreen',
    			'support':'webkitFullscreenEnabled'
    		}  
		}else if(doc.msExitFullscreen) {
			return {
    			'full':'msRequestFullscreen',
    			'exit':'msExitFullscreen',
    			'fullEvent':'MSFullscreenChange',
    			'fullElm':'msFullscreenElement',
    			'state':null,//IE没有提供全屏状态属性
    			'support':'msFullscreenEnabled'
    		};
		}
	})(doc);
	(function(){
		var div=document.createElement('div');
		div.style.cssText='width:600px;height:60px;background:#000;text-align:center;line-height:60px;font-size:18px;position:fixed;left:50%;margin-left:-300px;top:50%;margin-top:-30px;color:#fff;z-index:999999;display:none;'
		div.innerHTML='您的浏览器不支持全屏模式，建议使用Chrome、火狐浏览器浏览本页面!';
		(document.body||document.documentElement).appendChild(div);
		set.div=div;
	})()
	function _dialog(){
		set.div.style.display='block';
		setTimeout(function(){
			set.div.style.display='none';
		}, 2000)
	}
	win.fullSupport=(function(){
		if(!set.support){
			_dialog();
		}
	})();

	/*
		fullscreenchange事件会在启动全屏或退出全屏时触发
	*/
	win.fullscreenchange=function(fn){
		doc.addEventListener(set.fullEvent,fn, false);
	};

	/*
		让指定elm对象进入全屏模式
	*/
	win.fullscreen=function(elm){
		if(!set.support){
			_dialog();
		} 
		elm[set.full](); 
	};

	/*
		退出全屏模式
	*/
	win.exitfullscreen=function(){ doc[set.exit](); };
	
	/*
		返回当前进入全屏模式的元素，或返回null(未进入全屏模式)。
	*/
	win.fullElm=function(){ return doc[set.fullElm]; };

	/*
		返回全屏状态：
		在全屏模式下，则返回true。
		不再全屏模式下，则返回false。
	*/
	win.fullstate=function(){
		if(set.state==null){
			return doc.msFullscreenElement ? true : false;
		}
		return doc[set.state];
	}
})(window,document);