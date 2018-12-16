//导航条样式变化
function navbar() {
    var top = $("html,body").scrollTop();
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
//滚动箭头平滑效果
$(document).ready(function () {
    $(window).scroll(function () {
        navbar();
    })

    $(".scroll-down").click(function  () {
        var target_top = $("#section1").offset().top;
        $("html,body").animate({scrollTop: target_top}, 1000);//跳转动画
        $("html,body").scrollTop(target_top);
    })
});