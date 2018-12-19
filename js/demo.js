//导航条样式变化
function navbar() {
    var top = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
    $('.navbar-toggle').click(function () {
        $(".navbar").addClass("navbar-gd", 2000)
        $(".navbar-default .navbar-nav > li > a ").addClass("navbardea-gd", 2000)
        $(".navbar-toggle").addClass();
        $(".navbar-header").addClass();
    });
    //  console.log(top);
    if (top > 10) {
        $(".navbar").addClass("navbar-gd", 2000)
        $(".navbar-default .navbar-nav > li > a ").addClass("navbardea-gd", 2000)
        $(".navbar-toggle").addClass();
        $(".navbar-header").addClass();

    }
    else {
        $(".navbar").removeClass("navbar-gd", 2000)
        $(".navbar-default .navbar-nav > li > a ").removeClass("navbardea-gd", 2000)
    }
}

function mmve() {
    $('.jumbotron').mousemove(function (e) {
        //大屏幕时的巨幕移动效果
        var x = (e.pageX * -1 / 20);
        //  console.log("x="+x);
        $(this).css("background-position-x", x + "px");
        800
    });
}
//滚动箭头平滑效果
$(document).ready(function () {
    $(window).scroll(function () {//滚动监听
        navbar();
    });
    $(".scroll-down").click(function () { //点击箭头时执行
        var target_top = $("#section1").offset().top;
        $("html,body").animate({scrollTop: target_top}, 1000);//跳转动画
        $("html,body").scrollTop(target_top);
    });
    navbar();
    mmve();

});


