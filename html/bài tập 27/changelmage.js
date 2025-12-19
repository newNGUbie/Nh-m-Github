var index = 0;
function changeimage() {
var imgs = ["thiết kế web/", "/DVT.html/img/download(3)-jP", "/DVT.html/img/download (7) - jpg"];
document.getElementById ("img"). src =imgs[index];
index ++;
    if (index = 2){
    index = 0;
    }
}
// Tự động đổi hình khác sai 1 khoảng thời gian :
setInterval(changeimage, 2000);
