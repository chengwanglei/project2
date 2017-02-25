// JavaScript Document


function err_box(err_txt){//提示文字
	var oDiv=document.createElement('div');
	var timer;
	oDiv.className="err_box";
	oDiv.innerHTML=err_txt;
	
	document.body.appendChild(oDiv);
	showCenter(oDiv);
	function del_errBox(){
		timer=setTimeout(function(){
			document.body.removeChild(oDiv);
		},2000);
	};
	del_errBox();
	
	oDiv.onmouseover=function(){
		clearTimeout(timer);
	};
	oDiv.onmouseout=function(){
		del_errBox();	
	};
};

//模态层

function modal_layer(){
	var layer=document.createElement('div');
	layer.className="modal";
	document.body.appendChild(layer);
	return layer;
};


//登录框
function loginBox(){
	var mlayer=modal_layer();//打开模态层 并且返回模态层的对象
	
	var loginDiv=document.createElement('div');
	loginDiv.className="loginBox";
	var html='<h3>登录</h3>'+
	'<form>'+
    	'<p><label for="userName">用户名:</label><input class="text" id="userName" type="text"></p>'+
        '<p><label>密　码:<input class="text" type="text"></label></p>'+
       '<p>性别:<label><input type="radio">男</label> <label><input type="radio">女</label></p>'+
        '<p><button type="submit">确定</button> <button type="button">取消</button></p>'+
    '</form>'+
    '<span class="closeBtn">×</span>';
	
	loginDiv.innerHTML=html;
	document.body.appendChild(loginDiv);
	
	//居中显示
	showCenter(loginDiv);
	
	var title=loginDiv.getElementsByTagName('h3')[0];
	//拖拽
	drag(loginDiv,title);
	
	//关闭弹框---------------------
	var closeBtn=loginDiv.getElementsByClassName('closeBtn')[0];
	
	closeBtn.onclick=function(){
		document.body.removeChild(loginDiv);
		document.body.removeChild(mlayer);
	};

};
