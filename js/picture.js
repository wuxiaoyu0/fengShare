/*!
	视频详情页  js
*/

//加载配置文件
require(['./config'],function(){

	//加载需要用到的模块
	require(['jquery','public','jquery.swiper','jquery.pagination'],function($,p,Swiper,pagination){
    p.init.loadheader(2,"../");
    p.init.loadfooter("../");
		p.init.linkNewpage();
    var swiper = new Swiper('.banner', {
       autoplay:2000,
       pagination: '.swiper-pagination',
       paginationClickable: true
   });
   $('.page').pagination({
       pageCount: 4, //初始化时总页数3页
       prevContent:'上一页',
       nextContent:'下一页>',
       count:2,
       callback:function(api){
           api.setPageCount(4);//动态修改总页数为4页
       }
   });
	});

});
