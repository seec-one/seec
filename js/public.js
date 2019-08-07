
// 吸顶
$(window).scroll(function(){
	if($(this).scrollTop()>500){
		$('.navbar-default').slideDown();
	}else{
		$('.navbar-default').css({
			position:'',
			display:'none'
		})
	}
})
// 返回顶部
$('.fixed').click(function(){
	$('html,body').stop().animate({scrollTop:0})
})

