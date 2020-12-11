//lấy kích thước ảnh
var KichThuoc = document.getElementsByClassName("slide")[0].clientWidth;
var ChuyenSlide = document.getElementsByClassName("chuyen-slide")[0];
var Img = ChuyenSlide.getElementsByTagName("img");
var Max = KichThuoc * Img.length;
Max -= KichThuoc;
var Chuyen = 0;
//tiến hành chuyển slide lên ảnh phía trước khi click vào mũi tên chuyển trái.
function Next(){
	if(Chuyen < Max) Chuyen += KichThuoc;
	else Chuyen = 0;
	ChuyenSlide.style.marginLeft = '-' + Chuyen + 'px';
}
//tiến hành chuyển slide về ảnh phía sau khi click vào mũi tên chuyển phải.
function Back(){
	if(Chuyen == 0) Chuyen = Max;
	else Chuyen -= KichThuoc;
	ChuyenSlide.style.marginLeft = '-' + Chuyen + 'px';
}
//tự động chuyển ảnh 
setInterval(function(){
	Next();
}, 3000);