//加载配置文件
require(['./config'],function(){

	//加载需要用到的模块
	require(['jquery','public'],function($,p){
    p.init.loadheader(5,"../");
    p.init.loadfooter("../");
		p.init.linkNewpage();
  });
})
