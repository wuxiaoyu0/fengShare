//加载配置文件
require(['../js/config'],function(){

	//加载需要用到的模块
	require(['jquery','public','jquery.pagination'],function($,p,pagination){
    p.init.loadheader(8,"../");
    p.init.loadfooter("../");
		p.init.loadrecommed();
		p.init.linkNewpage();
	});

});
