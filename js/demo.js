$(window).resize(function () {
    media();
})
$(window).scroll(function () {
    media();
})

function navbar() {
    var top = $("html,body").scrollTop();
    if (top > 10) {
        $(".navbar").addClass("navbar-gd", 2000)
        $(".navbar-default .navbar-nav > li > a ").addClass("navbardea-gd", 2000)
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
    if (result1.matches) {
        console.log("大屏幕(>=1200)");//判断窗口状态，，会大量输出console，后期删除
        navbar();
    } else if (result2.matches) {
        console.log("中等屏幕(>=992&<=1200)");//判断窗口状态，，会大量输出console，后期删除
        navbar();
    } else if (result3.matches) {
        console.log("小屏幕(>=768&<=992)");//判断窗口状态，，会大量输出console，后期删除
        navbar();
    } else {
        console.log("超小屏幕(<=768)");//判断窗口状态，，会大量输出console，后期删除
    }
}
