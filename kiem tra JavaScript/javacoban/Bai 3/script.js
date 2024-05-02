
//Bài 3. Viết function truyền vào 1 mảng các chuỗi. 
// Trả về Object hiển thị xem mỗi phần tử trong mảng xuất hiện bao nhiêu lần
function getCountElement(arr) {
    let count = {};
    for (let elm of arr) {
      if (count[elm]) {
        count[elm]++;
      } else {
        count[elm] = 1;
      }
    }
    return count;
  }
  
  