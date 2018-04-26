// 点击切换样式
// 1.点击鼠标：
// 		按钮变色
// 		横线从无变宽
// 		横线上边的字体变色
// 2.释放鼠标：
// 		按钮变回原来颜色
// 3.再次点击鼠标：
// 		横线从宽变无
// 		横线上边的字体变回原来颜色

// JQUERY代码 需要引入jquery库
// 按钮 鼠标按下 事件
$("#toggole").mousedown(function(){
	// 按钮变色
	$(this).css("background-color","#1966E0");
	if ($(".border_bottom").hasClass("first_transition")) {
		$(".text_transition").removeClass("color");
		$(".border_bottom").removeClass("first_transition");
	}else{
		$(".text_transition").addClass("color");
		$(".border_bottom").addClass("first_transition");
	}
	
});

// 按钮 鼠标释放 事件
$("#toggole").mouseup(function(){
	// 按钮变色
	$(this).css("background-color","#fff");
});