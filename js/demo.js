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
function media() {
    var result1 = window.matchMedia('(min-width:1200px)');
    var result2 = window.matchMedia('(min-width:992px)');
    var result3 = window.matchMedia('(min-width:768px)');
    if(result1.matches) {
       // console.log("大屏幕(>=1200)");
        mmve();
        $(".scroll-down").show();
    }else if(result2.matches){
       // console.log("中等屏幕(>=992&<=1200)");
        mmve()
        $(".scroll-down").show();
    }else if(result3.matches){
       // console.log("小屏幕(>=768&<=992)");
        mmve2();
        $(".scroll-down").hide();
    }else{
       // console.log("超小屏幕(<=768)");
        mmve2();
        $(".scroll-down").hide();
    }
}
function mmve(){
    $('.jumbotron').mousemove(function(e){
        var x = (e.pageX*-1/20);
        //  console.log("x="+x);
        var y = (e.pageY*-1/20);
        //  console.log("y="+y);
        $(this).css("background-position-x",x+"px");
        $(this).css("background-position-y",y+"px");
    });
}
function mmve2(){
    $('.jumbotron').mousemove(function(){
        $(this).css("background-position-x","center");
        $(this).css("background-position-y","center");
        $(this).css("background-size"," cover")
    });
}
//滚动箭头平滑效果
$(document).ready(function () {
    $(window).scroll(function () {
        navbar();
    });
    $(".scroll-down").click(function  () {
        var target_top = $("#section1").offset().top;
        $("html,body").animate({scrollTop: target_top}, 1000);//跳转动画
        $("html,body").scrollTop(target_top);
    });
    media();

});
$(window).resize(function() {
    media();
});


