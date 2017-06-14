//加载配置文件
require(['../js/config'],function(){

	//加载需要用到的模块
	require(['jquery','public','jquery.pagination'],function($,p,pagination){
    p.init.loadheader(4,"../");
    p.init.loadfooter("../");
		p.init.linkNewpage();
    if($('.page')){
      $('.page').pagination({
          pageCount: 10, //初始化时总页数10页
          prevContent:'上一页',
          nextContent:'下一页>',
					keepShowPN:true,
					count:8,
          callback:function(api){
						$("<a href=\"javascript:;\" class=\"total-pagenum\">共"+api.getPageCount()+"页</a>").appendTo(".page");
          }
      });
    }

	});

});
