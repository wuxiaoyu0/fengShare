/*!
	登录页面  js
*/

//加载配置文件
require(['../js/config'],function(){

	//加载需要用到的模块
	require(['jquery','public'],function($,p){
    p.init.loadheader(0,"../");
    p.init.loadfooter("../");
		p.init.linkNewpage();
	});

});
