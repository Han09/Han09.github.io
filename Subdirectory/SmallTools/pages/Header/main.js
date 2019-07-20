window.onload = function () {
    document.getElementsByClassName("J_fileUp")[0].addEventListener("click",function () {
        document.getElementById("Select").click();
    })

    let src = "";
    let Canvas = document.getElementById("show");
    let Context = Canvas.getContext("2d");
    document.getElementById("Select").addEventListener("change", function (e) {
        let file = e.target.files[0];
        document.getElementById("file_name").innerHTML = file.name;
        src = URL.createObjectURL(file);
        ctx();
        let imgs = document.getElementsByClassName("imgs")
        for (i = 0; i < imgs.length; i++) {
            imgs[i].addEventListener("click", function (e) {
                ctx()
                let name = this.dataset.name;
                console.log(name);

                let image = new Image();
                image.src = "./imgs/" + name + ".png";
                image.onload = function () {
                    Context.drawImage(image, 0, 0, 200, 200);
                    document.getElementById("a").href = Canvas.toDataURL();
                }
            })
        }
    })


    function ctx() {
        let img = new Image();
        img.src = src;
        img.onload = function () {
            Context.drawImage(img, 0, 0, 200, 200);
        }

    }

    document.getElementById("start").addEventListener("click",function () {
        document.getElementById("a").click();
    })
}