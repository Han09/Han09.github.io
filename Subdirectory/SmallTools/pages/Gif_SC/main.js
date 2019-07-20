$(function () {
    let srcList = [];
    $("#result").hide()
    $(".J_fileUp").click(function () {
        $(".fileUP").trigger("click");
    })
    $(".fileUP").change(function () {
        let files = this.files;//Array
        $("#file_name").html("")
        $.each(files, function (indexInArray, valueOfElement) {
            $("#photoview").append(`
            <div class="imgs">
                <img src="` + URL.createObjectURL(valueOfElement) + `">
            </div>
            `)
            srcList.push(URL.createObjectURL(valueOfElement));
            $("#file_name").html($("#file_name").html() + "|" + valueOfElement.name)
        });
    })

    $("#start").click(function () {
        if(srcList.length >0){
            let par = {
                gifWidth: $("#gifWidth").val(),
                gifHeight: $("#gifHeight").val(),
                interval: $("#gifinterval").val(),
                images: srcList
            }
            $("#result").show()
            generate(par);
        }
    });

    function generate(par) {
        gifshot.createGIF(par, (obj) => {
            console.log(obj)
            if (!obj.error) {
                let image = obj.image;
                $("#gif").attr("src", image);
                $("#downloadButton").attr("href", image)
            }
        })
    }
})