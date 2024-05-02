//Bài 1. Viết function truyền vào mảng các chuỗi có độ dài bất kỳ.
// Kết quả trả về là 1 mảng các chuỗi có độ dài lớn nhất
function getStringHasMaxLength(arr) {
  let maxLength = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= maxLength) {
      maxLength = arr[i].length;
    }
  }
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length == maxLength) {
      result.push(arr[i]);
    }
  }
  return result;
}
