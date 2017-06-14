/*
	config 配置文件

	声明模块名称及模块的一个路径
*/

/*require.config({
	baseUrl: '基本目录',
	paths: {
		模块1: 路径,   (路径后面不要加.js)
		模块2: 路径
	},
	//管理非AMD定义的模块
	shim: {
		模块1: ["依赖"]
		// "highcharts": {
		// 	deps: ['jquery'],
		// 	exports: 'Highcharts'
		// }
	}
});*/
require.config({
  paths: {
    "jquery": "lib/jquery-2.2.4.min",
    "jquery.swiper": "plug/swiper.min",
    "jquery.pagination": "plug/jquery.pagination",
    "jquery.cookie": "plug/jquery.cookie",
		"public":"public/public"
  },
  //处理非AMD规范的js文件    指定某个文件的依赖  || 暴露接口
  shim: {
    "jquery.swiper": ['jquery'],
    "jquery.pagination": ['jquery'],
    "jquery.cookie": ['jquery']
  }
});
