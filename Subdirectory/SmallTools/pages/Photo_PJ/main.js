window.onload = function () {
    document.getElementById("result").style.display ="none";
    document.getElementById("file_name").addEventListener("click",function () {
        document.getElementById("UpImg").click();
    })


    let Canvaswidth = 0,
        Canvasheight = 0;
    let files = [];

    let PhotoList = [];
    let CanvasList = [];
    document.getElementById("UpImg").addEventListener("change", (e) => {
        document.getElementById("joint").disabled = true;
        FileList(e);
    })


    function FileList(e) {
        files = e.target.files;
        for (i = 0; i < files.length; i++) {
            let reader = new FileReader();
            reader.onloadend = function (e) {
                let image = new Image();
                image.src = e.target.result;
                image.onload = function () {
                    Canvaswidth = (Canvaswidth > image.width) ? Canvaswidth : image.width;
                    let img = {
                        src: e.target.result,
                        width: image.width,
                        height: image.height,
                    }
                    PhotoList.push(img);
                    // console.log(img);
                    document.getElementsByClassName("ImgView")[0].append(image);
                }
            }
            reader.readAsDataURL(files[i]);
        }
        document.getElementById("joint").removeAttribute("disabled");
    }

    //点击拼接按钮时
    document.getElementById("joint").addEventListener("click", function () {
        Schlussrechnung();
        drawAndShareImage();
    })

    function drawAndShareImage() {
        let canvas = document.createElement("canvas");
        canvas.width = Canvaswidth;
        canvas.height = Canvasheight;
        let context = canvas.getContext("2d");

        context.rect(0, 0, canvas.width, canvas.height);
        context.fillStyle = "#c40000";
        context.fill();

        let left = 0,
            top = 0;


        CanvasList.forEach((element) => {
            let img = new Image();
            img.src = element.src;
            img.crossOrigin = 'Anonymous';
            img.onload = function () {
                // 使图片宽高等比例缩放至宽度与最大图片相同

                // //应有高度
                // let bili = element.width / Canvaswidth;
                // let Yheight = element.height / bili;
                // console.log(bili, Yheight);


                context.drawImage(img, left, top, element.width, element.height);
                top += element.height;
                var base64 = canvas.toDataURL("image/png");
                var imgc = document.getElementById('avatar');
                imgc.setAttribute('src', base64);
                document.getElementById("alldownload").href = base64;
                // context.drawImage(img,(左上角)，(右下角),(宽度),(高度))
            }
            document.getElementById("result").style.display ="block";
        })

    }


    function Schlussrechnung() {
        PhotoList.forEach((element) => {
            let bili = element.width / Canvaswidth;
            let Yheight = element.height / bili;
            console.log(bili, Yheight);
            Canvasheight += Yheight;

            let obj = {
                src: element.src,
                width: Canvaswidth,
                height: Yheight
            }

            CanvasList.push(obj)
        })
    }

}
