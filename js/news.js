//加载配置文件
require(['./config'],function(){

	//加载需要用到的模块
	require(['jquery','public','jquery.swiper','jquery.pagination'],function($,p,Swiper,pagination){
    p.init.loadheader(1,"../");
    p.init.loadfooter("../");
		p.init.loadrecommed();
		p.init.linkNewpage();

		var mySwiper=new Swiper('.newsbanner',{
			autoplay:2000,
			loop:true,
			pagination: '.pages',
			paginationClickable: true
		})

		$('.page').pagination({
        prevContent:'上一页',
        nextContent:'下一页>',
				totalData:460,
				showData:5,
				coping:true,
        callback:function(api){
            api.setPageCount(100);//动态修改总页数为4页
        }
    });
  });
})
