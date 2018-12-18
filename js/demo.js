//导航条样式变化
function navbar() {
    var top = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
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

function mmve(){
    $('.jumbotron').mousemove(function(e){
        //大屏幕时的巨幕移动效果
        var x = (e.pageX*-1/20);
        //  console.log("x="+x);
        $(this).css("background-position-x",x+"px");
    });
}


function media() {
   // console.log("media执行");
    var result1 = window.matchMedia('(min-width:1200px)');
    var result2 = window.matchMedia('(min-width:992px)');
    var result3 = window.matchMedia('(min-width:768px)');
    if(result1.matches) {
       //console.log("大屏幕(>=1200)");
        $(".scroll-down").show();
    }
    else if(result2.matches){
       // console.log("中等屏幕(>=992&<=1200)");
        $(".scroll-down").show();
    }
    else if(result3.matches){
       //console.log("小屏幕(>=768&<=992)");
        $(".scroll-down").hide();
    }
    else{
       // console.log("超小屏幕(<=768)");
        $(".scroll-down").hide();
    }
}




//滚动箭头平滑效果
$(document).ready(function () {
    $(window).scroll(function () {//滚动监听
        navbar();
    });
    $(".scroll-down").click(function  () { //点击箭头时执行
        var target_top = $("#section1").offset().top;
        $("html,body").animate({scrollTop: target_top}, 1000);//跳转动画
        $("html,body").scrollTop(target_top);
    });
    media();
    navbar();
    mmve();

});
$(window).resize(function() { //窗口大小变化时执行
    media();
});


