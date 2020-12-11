<h1 align="center">Welcome to my static web 👋</h1>

> Ảnh đẹp<br /> Tổng hợp hình ảnh đẹp tuyển chọn

## Giới thiệu

🔥 Đây là 1 trang web trình chiếu hình ảnh qua slide : 

🔥 Nó bao gồm hình ảnh về Anime,thiên nhiên,...

![Capture](https://user-images.githubusercontent.com/74084773/101906261-41aad480-3beb-11eb-833e-0cf1037ac98d.PNG)

![1](https://user-images.githubusercontent.com/74084773/101906468-92bac880-3beb-11eb-81f4-1fd7c69d8c16.PNG)


- Các Hình ảnh sử dụng trong trang web được lấy trên https://wallhere.com/ ( hình ảnh ở đây là miễn phí và không có bản quyền )

- Ngoài ra trong trang web có sử dụng 1 vài audio giúp bạn thư giãn trong khi xem ảnh trên trang web 🔥🔥🔥

## Giải thích

file 'slide.js' có tác dụng giúp chuyển ảnh slide

'''//lấy kích thước ảnh
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
'''
_This README was generated with ❤️ by [nhoxhungvjp1](https://github.com/nhoxhungvjp1/static-web)_
