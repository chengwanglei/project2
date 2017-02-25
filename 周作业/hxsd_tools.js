// JavaScript Document

//屏幕中心显示
function showCenter(obj){
	obj.style.display="block";
	var l=(document.documentElement.clientWidth-obj.offsetWidth)/2;
	var t=(document.documentElement.clientHeight-obj.offsetHeight)/2
	obj.style.left=l+'px';
	obj.style.top=t+'px';
	window.onresize=function(){
		showCenter(obj);
	}
};

//拖拽
function drag(obj,title){
	title=title || obj;
	title.onmousedown=function(ev){
		ev=ev||window.event;
		
		//记录偏移 鼠标坐标--div.offsetLeft
		var disX=ev.clientX-obj.offsetLeft; //distance 距离
		var disY=ev.clientY-obj.offsetTop;
		
		
		document.onmousemove=function(ev){
			ev=ev||window.event;
			var x=ev.clientX-disX;//鼠标横坐标
			var y=ev.clientY-disY;//鼠标纵坐标
			
			//判断屏幕范围
			if(x<0){
				x=0;
			};
			if(y<0){
				y=0;
			};
			var screen_w=document.documentElement.clientWidth-obj.offsetWidth;
			var screen_h=document.documentElement.clientHeight-obj.offsetHeight;
			
			if(x>screen_w){
				x=screen_w
			};
			if(y>screen_h){
				y=screen_h
			}
			
			//赋值
			obj.style.left=x+'px';
			obj.style.top=y+'px';
		};
		//鼠标抬起,停止拖拽
		document.onmouseup=function(){
			document.onmousemove=null;	
		};
		return false;
	};
};

//增加class
function addClass(elm,newCls){
	var newClass=elm.className+' '+newCls;
	return newClass;
};


