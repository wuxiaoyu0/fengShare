define([
  'jquery', 'jquery.cookie'
], function($, cookie) {
  var PublicStyle = {
    // 加载页面头部
    /*
    activeIndex:传入当前页面的显示小标题的下标
    path:首页传入'./'代表当前路径和其他页面传入'../'查找相关路径
     */
    loadheader: function(activeIndex, path,isLogin) {
      var path = path ? path : "../",
          isLogin = isLogin ? isLogin : false,
          loginStr="";
          if(isLogin){
            loginStr=`<p class="head_port">
              <a href="${path}html/user_member.html"><img src="${path}images/bit.jpg"  title="" alt=""/></a>
            </p>`;
          }else{
            loginStr=`<p class="head_login">
              <a href="${path}html/login.html">登录</a>
              <a href="${path}html/register.html">注册</a>
            </p>`;
          }

      var headerStr = `<div class="headerbg">
        <div class="header">
          <h1 class="float_l"><img src="${path}images/logo.png" title="" alt=""/></h1>
          <ul class="float_l nav">
            <li><a href="${path}index.html" title="">首页</a></li>
            <li><a href="${path}html/news.html" title="">新闻</a></li>
            <li><a href="${path}html/picture.html" title="">图片</a></li>
            <li><a href="${path}html/video.html" title="">视频</a></li>
            <li><a class="titlelist" href="${path}html/forumHomePage.html" title=""><span>论坛</span><img src="${path}images/nextic.png" class="index_n"/></a>
              <ul class="clearfix otherlist">
                <li><a href="${path}html/download.html" title="">下载</a></li>
                <li><a href="${path}html/recruit.html" title="">招聘</a></li>
                <li><a href="${path}html/homeLibrary.html" title="">文库</a></li>
                <li><a href="${path}html/message.html" title="">留言板</a></li>
                <li><a href="${path}index.html" title="">科技</a></li>
                <li><a href="${path}html/survey.html" title="">网络调查</a></li>
              </ul>
            </li>
          </ul>
          <div class="search float_r">
            <form>
              <input type="text" id="" value="" />
              <img src="${path}images/search.jpg" />
            </form>
            ${loginStr}
          </div>
        </div>
      </div>`;
      $("#header").html(headerStr);

      var liActive=$("#header").find(".nav li").eq(activeIndex),
          activeHtml=liActive.find("a").html(),
          activeHref=liActive.find("a").attr("href"),
          liShow=$("#header").find(".nav li").eq(4),
          showHtml=liShow.find("a.titlelist span").html(),
          showHref=liShow.find("a.titlelist").attr('href');
      if(activeIndex>=5){
        liShow.addClass("active").find('a span').html(activeHtml);
        liActive.find('a').html(showHtml);
        liShow.find("a.titlelist").attr('href',activeHref);
        liActive.find("a").attr('href',showHref);
      }else{
        liActive.addClass("active");
      }
    },
    // 加载页面尾部
    loadfooter: function(path) {
      var path = path ? path : "../";
      var footerStr = `
      <div class="footerbg">
        <div class="footer">
          <p class="clearfix">
            <a href="#">关于我们</a>
            <a class="active" href="#">联系我们</a>
            <a href="${path}html/recruit.html">诚聘英才</a>
            <a href="#">友情链接</a>
            <a href="${path}html/download.html">程序下载</a>
            <a href="#">合作服务</a>
            <a href="#">许可协议</a>
            <a href="javascript:void(null)" class="addBookmark">加入收藏</a>
            <a href="javascript:void(null)" class="sethome" >设为首页</a>
          </p>
          <p class="clearfix">
            <img src="${path}images/flogo.png" />
            <span>Copyright 2011-2015 北京千锋互联科技有限公司 京ICP备12003911号-3 京公网安备11010802011455号</span>
          </p>
        </div>
      </div>`;
      $("#footer").html(footerStr);
      var url = window.location.href;
      $("#footer").on("click", ".footer a.sethome", function() {
        PublicStyle.setHome(this,url);
      });
      $("#footer").on("click", ".footer a.addBookmark", function() {
        PublicStyle.addBookmark("锋享", url);
      });
    },
    // 加载部分页面公共部分
    loadrecommed: function(path) {
      var path = path ? path : "../";
      var recommedStr = `<div class="every_search">
        <h3 class="h3style">大家都在搜</h3>
        <div class="more_search clearfix">
          <a href="./newsdetail.html">电信诈骗</a>
          <a href="./newsdetail.html">美国</a>
          <a href="./newsdetail.html">2017平均工资</a>
          <a href="./newsdetail.html">H7N9</a>
          <a href="./newsdetail.html">共享单车</a>
          <a href="./newsdetail.html">奥运会</a>
          <a href="./newsdetail.html">HTC</a>
          <a href="./newsdetail.html">高考检查</a>
          <a href="./newsdetail.html">冬奥会</a>
        </div>
      </div>
      <div class="hotnews_r">
        <h3 class="h3style">热门话题</h3>
        <ul>
          <li data-url="./libraryDetails.html">
            <p class="float_l"><img src="../images/vedio_home.png"/></p>
            <div class="hot_text float_r">
              <h4>电信诈骗多发产生“蝴蝶效应”虚...</h4>
              <p>评论<span>(90)</span></p>
            </div>
          </li>
          <li data-url="./libraryDetails.html">
            <p class="float_l"><img src="../images/vedio_zx.png"/></p>
            <div class="hot_text float_r">
              <h4>习近平宁夏考察第一天：长征永远在...</h4>
              <p>评论<span>(90)</span></p>
            </div>
          </li>
          <li data-url="./libraryDetails.html">
            <p class="float_l"><img src="../images/vedio_write.png"/></p>
            <div class="hot_text float_r">
              <h4>电信诈骗...</h4>
              <p>评论<span>(90)</span></p>
            </div>
          </li>
          <li data-url="./libraryDetails.html">
            <p class="float_l"><img src="../images/vedio_ball.png"/></p>
            <div class="hot_text float_r">
              <h4>宁夏考察第一天</h4>
              <p>评论<span>(90)</span></p>
            </div>
          </li>
        </ul>
      </div>`;
      $(".page_comcontent").html(recommedStr);
    },
    // 讲本站设为首页
    setHome: function(obj, vrl) {
      try {
        obj.style.behavior = 'url(#default#homepage)';
        obj.setHomePage(vrl);
      } catch (e) {
        if (window.netscape) {
          try {
            netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
          } catch (e) {
            alert("此操作被浏览器拒绝！\n请在浏览器地址栏输入“about:config”并回车\n然后将 [signed.applets.codebase_principal_support]的值设置为'true',双击即可。");
          }
          var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
          prefs.setCharPref('browser.startup.homepage', vrl);
        } else {
          alert("您的浏览器不支持，请按照下面步骤操作：1.打开浏览器设置。2.点击设置网页。3.输入：" + vrl + "点击确定。");
        }
      }
    },
    // 收藏本站
    addBookmark: function(title, url) {
      try{
        window.external.addFavorite(url, title);
      } catch (e) {
        try{
          window.sidebar.addPanel(title, url, "");
        } catch (e) {
          alert("加入收藏失败，请使用Ctrl+D进行添加");
        }
      }
    },
    // 页面跳转
    linkNewpage:function(){
      (function(){
        $(document).on("click","*[data-url]",function(){
          var link=$(this).attr("data-url");
          if(link){
            window.location.href=link;
          }
        });
        $("*[data-url]").css("cursor","pointer")
      })();
    }
  };
  return {init: PublicStyle}
});
