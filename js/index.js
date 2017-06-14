/*!
	首页  js
*/

//加载配置文件
require(['./config'],function(){

	//加载需要用到的模块
	require(['jquery','public','jquery.swiper'],function($,p,swiper){
    p.init.loadheader(0,"./",true);
    p.init.loadfooter("./");
		p.init.linkNewpage();
		var mySwiper = new Swiper('.carousel', {
       autoplay:2000,
			 loop:true,
			 onSlideChangeStart:function(swiper){
				 var num=swiper.activeIndex;
				 if(swiper.activeIndex==7){
					 num=1;
				 }
				 $(".carousel .swiper-slide").eq(swiper.activeIndex).find(".active-num").html(num);
				 $(".carousel .swiper-slide").eq(swiper.activeIndex).find(".total-num").html(swiper.slides.length-2);
			 }
   });
	});

});
