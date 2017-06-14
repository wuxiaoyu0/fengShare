/*!
	图片详情页  js
*/

//加载配置文件
require(['./config'],function(){

	//加载需要用到的模块
	require(['jquery','public','jquery.swiper','jquery.pagination'],function($,p,Swiper,pagination){
    p.init.loadheader(2,"../");
    p.init.loadfooter("../");
		p.init.linkNewpage();
		var liWidth=$(".page-show ul li").outerWidth()+18;
		var picHeight=$(".page-show ul li img").outerHeight();
		$(".pagerightbtn,.pageleftbtn").css({height:picHeight,lineHeight:picHeight+"px"});
		$(".swiper-pagination,.page-show").height(picHeight);
		var mySwiper = new Swiper('.banner .swiper-container', {
		   autoplay:2000,
			 loop:true,
		   pagination: '.swiper-pagination .page-show ul',
			 paginationType:"custom",
			 slidesPerView: 1,
			 paginationClickable: true,
			 spaceBetween: 30,
			 keyboardControl: true,
			 nextButton: '.swiper-button-next',
			 prevButton: '.swiper-button-prev',
			 onSlideChangeStart:function(swiper){
				 smallBanner(swiper.activeIndex,swiper.slides.length);
			 }
   });
	 //给每个页码绑定跳转的事件
    $('.page-show ul').on('click','li',function(){
			$(this).addClass("active").siblings().removeClass("active");
      var index = $(this).index();
      mySwiper.slideTo(index+1, 500, false);//切换到第一个slide，速度为1秒
    })
		$(".swiperBigpic,.swiper-button-next,.swiper-button-prev").hover(function(){
			mySwiper.stopAutoplay();
		},function(){
			mySwiper.startAutoplay();
		});
		$(".swiper-pagination").hover(function(){
			mySwiper.stopAutoplay();
		},function(){
			mySwiper.startAutoplay();
		});
	 function smallBanner(current,total){
		 console.log(current,total);
		 $(".page-show ul li").eq(current-1).addClass("active").siblings().removeClass("active");
		 var left=(current-1)*liWidth;
		 if(current>=total-5){;
			 left=(total-6)*liWidth;
		 }
		 if(current>=total-1){
			 left=0;
		 }
		 if(current==0){
			 left=(total-6)*liWidth;
		 }
		 $(".page-show ul").animate({"left":-left});
	 }
	 var total=$(".swiper-slide").length;
	 var boxWidth=$(".page-show ul").width();
	 var left=boxWidth/total;

	 $(".pageleftbtn").on('click',function(){
		 mySwiper.slidePrev();
	 })
	 $(".pagerightbtn").on('click',function(){
		 mySwiper.slideNext();
	 })
	});

});
