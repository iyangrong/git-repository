window.onload = function() {
    var arr = ["./pic_1.jpg", "./pic_2.jpg", "./pic_3.jpg"]
    var obt1 = document.querySelector(".prev")
    var obt2 = document.querySelector(".next")
    var oImg = document.querySelector(".img1")
    var index = 0
    function funTab() {
        oImg.src = arr[index]

    }

    funTab()
    obt1.onclick = prevImg
    obt2.onclick = nextImg

    function nextImg() {
        index++;
        if(index > arr.length - 1) {
            index = 0
        }
        funTab()
    }

    function prevImg() {
        index--;
        if(index < 0) {
            index = arr.length - 1
        }
        funTab()
    }
}
