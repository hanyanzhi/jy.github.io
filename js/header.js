var unlogin = '<h1 class="logo fl">'+
                '<a href="index.html">'+
            '<img src="img/logo.png" alt="" />'+
        '</a>'+
    '</h1>'+
    '<div class="seat fl">'+
        '<em></em>'+
        '<span>浙江</span>'+
    '</div>'+
    '<div class="loginbox fr">'+
        '<a href="login.html">登录</a>'+
        '|<a href="register.html">注册</a>'+
    '</div>';
var logined = '<h1 class="logo fl">'+
                '<a href="index.html">'+
            '<img src="img/logo.png" alt="" />'+
        '</a>'+
    '</h1>'+
    '<div class="seat fl">'+
        '<em></em>'+
        '<span>浙江</span>'+
    '</div>'+
    '<div class="loginbox fr loginedbox">'+
        '<a href="javascript:;">18811488358</a>'+
        '|<a href="javascript:;">退出</a>'+
    '</div>';
// 是否登录
var loginFlag = false;
if (loginFlag) {
    $('header').append(logined);
}else {
    $('header').append(unlogin);
}
