/*!
	视频详情页  js
*/

//加载配置文件
require(['../js/config'],function(){

	//加载需要用到的模块
	require(['jquery','public'],function($,p){
    p.init.loadheader(3,"../");
    p.init.loadfooter("../");
		p.init.loadrecommed();
		p.init.linkNewpage();
	});

});
