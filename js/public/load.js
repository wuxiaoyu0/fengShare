define(['jquery', 'jquery.cookie'], function($, cookie) {
  var PublicStyle = {
    loadheader: function(activeIndex, path) {
      var path = path ? path : "../";
      var headerStr = `<div class="headerbg">
        <div class="header">
          <h1 class="float_l"><img src="${path}images/logo.png" title="" alt=""/></h1>
          <ul class="float_l nav">
            <li><a href="${path}index.html" title="">首页</a></li>
            <li><a href="${path}new.html" title="">新闻</a></li>
            <li><a href="${path}index.html" title="">图片</a></li>
            <li><a href="${path}index.html" title="">视频</a></li>
            <li class="titlelist"><a href="${path}index.html" title="">论坛<img src="${path}images/nextic.png" class="index_n"/></a>
              <ul class="clearfix">
                <li><a href="${path}index.html" title="">下载</a></li>
                <li><a href="${path}index.html" title="">招聘</a></li>
                <li><a href="${path}index.html" title="">文库</a></li>
                <li><a href="${path}index.html" title="">留言板</a></li>
                <li><a href="${path}index.html" title="">科技</a></li>
                <li><a href="${path}index.html" title="">网络调查</a></li>
              </ul>
            </li>
          </ul>
          <div class="search float_r">
            <form>
              <input type="text" id="" value="" />
              <img src="${path}images/search.jpg" />
            </form>
            <p>
              <a href="${path}login.html">登录</a>
              <a href="${path}register.html">注册</a>
            </p>
          </div>
        </div>
      </div>`;
      $("#header").html(headerStr);
      $("#header").find(".nav li").eq(activeIndex).addClass("active");
    },
    checkUser: function() {
      //读取cookie，判断用户是否登录，填充信息
      var userinfo = $.cookie('userinfo');
      //如果有用户信息
      if (userinfo) {
        //将json字符串转化为json对象
        userinfo = JSON.parse(userinfo);
        //用户处于登录状态,更改信息
        if (userinfo.login_status) {
          $('.user').html(userinfo.account + '，<a href="javascript:;" class="logout">退出</a>');
        } else {
          $('.user').html(userinfo.account + '，<a href="login.html">请登录</a>,<a href="register.html">免费注册</a>');
        }
      }
      console.log(userinfo);
      //退出
      $('.logout').click(function() {
        var info = {
          account: userinfo.account,
          login_status: 0
        };
        $.cookie('userinfo', JSON.stringify(info), {
          expires: 365,
          path: '/'
        });
        location.href = "login.html";
      });
    },
    loadfooter: function(path) {
      var path = path ? path : "../";
      var footerStr = `
      <div class="footerbg">
        <div class="footer">
          <p class="clearfix">
            <a href="#">关于我们</a>
            <a href="#">联系我们</a>
            <a href="#">诚聘英才</a>
            <a href="#">友情链接</a>
            <a href="#">程序下载</a>
            <a href="#">合作服务</a>
            <a href="#">许可协议</a>
            <a href="#">加入收藏</a>
            <a href="#" class="sethome" >设为首页</a>
          </p>
          <p class="clearfix">
            <img src="${path}images/flogo.jpg" />
            <span>Copyright 2011-2015 北京千锋互联科技有限公司 京ICP备12003911号-3 京公网安备11010802011455号</span>
          </p>
        </div>
      </div>`;
      $("#footer").html(footerStr);
      $("#footer").on("click","a.sethome",function(){
        PublicStyle.setHome();
      })
    },
    loadrecommed: function(data) {

    },
    setHome: function(url) {
      if (document.all) {
        document.body.style.behavior = 'url(#default#homepage)';
        document.body.setHomePage(url);
      } else if (window.sidebar) {
        if (window.netscape) {
          try {
            netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
          } catch (e) {
            alert("该操作被浏览器拒绝，如果想启用该功能，请在地址栏内输入 about:config,然后将项 signed.applets.codebase_principal_support 值该为true");
          }
        }
        if (window.confirm("你确定要设置" + url + "为首页吗？") == 1) {
          var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
          prefs.setCharPref('browser.startup.homepage', url);
        }
      }
    },
    addBookmark:function(title, url) {
      if (window.sidebar) {
        window.sidebar.addPanel(title, url, "");
      } else if (document.all) {
        window.external.AddFavorite(url, title);
      } else if (window.opera && window.print) {
        return true;
      }
    }
  };
  return {init: PublicStyle}
});
