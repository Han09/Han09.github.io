window.onload = function () {

    document.getElementById("result").style.display = "none"
    document.getElementById("J_fileUp1").addEventListener("click", function () {
        document.getElementById("WeiXin").click();
    });
    document.getElementById("J_fileUp2").addEventListener("click", function () {
        document.getElementById("Alipay").click();
    })


    let WeiXinCode = "";
    let AliPayCode = "";

    document.getElementById("WeiXin").addEventListener("change", function (e) {
        WeiXinCode = URL.createObjectURL(e.target.files[0]);
        document.getElementById("file_name1").innerHTML = e.target.files[0].name;
        document.getElementById("WeiXinCode").src = WeiXinCode;
        qrcode.decode(WeiXinCode);
        qrcode.callback = function (imgMsg) {
            WeiXinCode = imgMsg
            document.getElementById("WeiXinURL").innerHTML = "微信收款链接：" + WeiXinCode;
        }
    })
    document.getElementById("Alipay").addEventListener("change", function (e) {
        document.getElementById("file_name2").innerHTML = e.target.files[0].name;
        AliPayCode = URL.createObjectURL(e.target.files[0]);
        document.getElementById("AlipayCode").src = AliPayCode;
        qrcode.decode(AliPayCode);
        qrcode.callback = function (imgMsg) {
            AliPayCode = imgMsg
            document.getElementById("AlipayURL").innerHTML = "支付宝收款链接：" + AliPayCode;
        }
    })

    document.getElementById("start").addEventListener("click", function () {
        if (document.getElementById("AlipayURL").innerHTML) {
            document.getElementById("qrcode").innerHTML = "";
            document.getElementById("result").style.display = "block";
            let URL = "https://www.hanlinxuan.club/Subdirectory/Pay/?" + "W=" + WeiXinCode + "&A=" + AliPayCode;
            // let URL = "http://127.0.0.1:5501/index.html?" + "W=" + WeiXinCode + "&A=" + AliPayCode;
            new QRCode(document.getElementById("qrcode"), URL);
            window.scrollTo(0, document.documentElement.clientHeight);
            document.getElementById("downloadButton").href = document.querySelector("canvas").toDataURL();
        }
    })
}