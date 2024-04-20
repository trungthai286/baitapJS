// Bài 1: Viết function truyền vào 1 số nguyên dưong. Tính giai thừa của số đó
 function calculateFactorial(n){
    let Result =1;
    for(let i=1; i<=n; i++){
        Result*=i;
    }return Result;
 }
 console.log("Giai thua = ",calculateFactorial(5));

 //Bài 2: Viết function truyền vào 1 chuỗi. In ra chuỗi đảo ngược của chuỗi đó
function reverseString(str){
let newString ="";
for(let i=str.length-1; i>=0;i--){
    newString+=str[i];
}
return newString;
}
console.log("Chuoi dao nguoc la: ",reverseString("abcde"));

// Bai 3: Viết function truyền vào mã quốc gia. Trả về message có ý nghĩa
// là “Xin chào”, tương ứng với mã quốc gia được truyền vào

function number(n){
    switch (n) {
        case 1:console.log("xinchao");
          break;
        case 2:
          console.log("hello")
          break;
        default:
          console.log("khong ton tai")
          break;
      }
}console.log(number(2));

//Bai 4: Cho function truyền vào 1 chuỗi dài hơn 15 ký tự. Viết 1 function cắt chuỗi,
// lấy ra 10 ký tự đầu tiên và thêm vào dấu “…” ở cuối chuỗi
 function subString(string){
let newString="";
if(string.length>15){
    for(let i =0; i<10;i++){
    newString+=string[i];
}}
else console.log("chuỗi phải > 15 ký tự")
return newString+"...";
 }
 console.log(subString("nguyentrungthai1993"))
    