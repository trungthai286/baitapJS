// Render số box = số lượng màu ra ngoài màn hình bằng javascript (5 box)
// Box được tạo bởi thẻ div, có class=“box”, background tương ứng với từng mã màu
// Cập nhật số lượng total box trong thẻ <span> có class “points”
// Khi bấm vào box bất kỳ thì box đó biến mất, đồng thời số lượng total box giảm đi 1
// Khi click vào nút “more box” thì số lượng box tăng lên 5 (tương ứng với 5 màu trong mảng colors), đồng

let colors = ["#3498db", "#9b59b6", "#e74c3c", "#2c3e50", "#d35400"];

for (let i = 0; i < colors.length; i++) {
  const box = document.querySelector(".boxes");
  box.insertAdjacentHTML("beforeend", '<div class="box"> </div>');
  const colorbox = document.getElementsByClassName("box");
  for (let i = 0; i < colorbox.length; i++) {
    colorbox[i].style.backgroundColor = colors[i];
  }
}
const Totalbox = document.getElementsByClassName("box");
const span = document.querySelector(".points");
span.insertAdjacentText("beforeend", Totalbox.length);

const remove = document.querySelector(".boxes");
const removebox = document.querySelectorAll(".box");
for (let i = 0; i < removebox.length; i++) {
  remove.addEventListener("click", function (e) {
    remove.removeChild(removebox[i]);
  });
}

const morebox = document.querySelector("#btn");
const box = document.querySelector(".boxes");
morebox.addEventListener("click", function (e) {
  box.insertAdjacentHTML("beforeend", '<div class="box"> </div>');
});
