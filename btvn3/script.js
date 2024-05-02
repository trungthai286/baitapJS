// Câu 1. Tạo 1 thẻ p có id=“text”, có nội dung bất kỳ (có thể tạo bằng HTML hay Javascript - tùy chọn). Yêu cầu
// Đặt màu văn bản thành #777
// Đặt kích thước phông chữ thành 2rem
// Đặt nội dung HTML thành Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.

const p1= document.querySelector("#text");
p1.classList.add("text");
p1.textContent="Tôi có thể"

//Câu 2. Sử dụng vòng lặp để đặt màu chữ cho tất cả thẻ li thành màu blue (tạo thẻ ul-li bằng html)

const ul1=document.querySelectorAll(".list-item-top");
for(let i=0; i<ul1.length; i++){
    ul1[i].style.color = 'blue';
}
//Array.from(ul1).map(ele => ele.style.color ='blue');

// Câu 3. Cho mã HTML có nội dung như sau (tạo thẻ ul-li bằng html):
// Sử dụng javascript để thực hiện những công việc sau
// Thêm 3 thẻ <li> có nội dung Item 8, Item 9, Item 10 vào cuối danh sách

const ul2 =document.getElementById('list');
ul2.insertAdjacentHTML('beforeend','<li>Item 8</li>');
ul2.insertAdjacentHTML('beforeend','<li>Item 9</li>');
ul2.insertAdjacentHTML('beforeend','<li>Item 10</li>');

// Sửa nội dung cho thẻ <li> 1 thành màu đỏ (color)
// Sửa background cho thẻ <li> 3 thành màu xanh (background-color)
const ul3=document.querySelectorAll("#list");
for(let i=0; i< ul3.length; i++){
    if(i==0){
        ul3[i].style.color='red';
    }
    if(i==2){
        ul3[i].style.backgroundColor='green';
    }
    }

// Remove thẻ <li> 4
const li4=document.querySelector(".li4");
ul2.removeChild(li4);


// Thêm thẻ <li> mới thay thế cho thẻ <li> 4 bị xóa ở bước trước, thẻ <li> mới có nội dung bất kỳ
const newLi=document.createElement('li');
newLi.innerText="Thay the Li4";
const li5 = document.querySelector(".li5");
ul2.insertBefore(newLi, li5);

