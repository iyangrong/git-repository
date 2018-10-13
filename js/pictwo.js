window.onload=function() {
    var imgs = ["pic_1.jpg", "pic_2.jpg", "pic_3.jpg", "pic_4.jpg", "pic_5.jpg", "pic_6.jpg"];
    var i = 0;
    var dom = document.getElementById("picture");
    dom.style.backgroundImage = "url(pic_6.jpg)";
    function time() {
        i++;
        i = i % 3;
        dom.style.backgroundImage = "url(" + imgs[i] + ")";
    }
    setInterval(time, 5000);
}