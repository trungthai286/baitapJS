//---------------BT phần Array---------------

//Bài 1: Viết function để kiểm tra 1 giá trị có nằm trong mảng hay không?
const arr = [1,2,3,4,5,6];
function existElement (arr, n){
return arr.includes(n);
}
console.log(existElement(arr,4));

// console.log(arr.includes(4))

//Bài 2: Viết function truyền vào 1 mảng các số, và 1 giá trị bất kỳ.
//Trả về mảng mới với các giá trị lớn hơn giá trị truyền vào
console.log(arr.filter(function(n){
    return n>2
}));


// ---------------BT OBJECT---------------
// Danh sách các sản phẩm có trong giỏ hàng
let products = [
    {
        name: "Iphone 13 Pro Max", // Tên sản phẩm
        price: 3000000, // Giá mỗi sản phẩm
        brand: "Apple", // Thương hiệu
        count: 2, // Số lượng sản phẩm trong giỏ hàng
    },
    {
        name: "Samsung Galaxy Z Fold3",
        price: 41000000,
        brand: "Samsung",
        count: 1,
    },
    {
        name: "IPhone 11",
        price: 15500000,
        brand: "Apple",
        count: 1,
    },
    {
        name: "OPPO Find X3 Pro",
        price: 19500000,
        brand: "OPPO",
        count: 3,
    },
]

// 1. In ra thông tin các sản phẩm trong giỏ hàng theo cấu trúc sau
// Tên - Giá - Thương Hiệu - Số lượng
// Ví dụ : OPPO Find X3 Pro - 19500000 - OPPO - 3

console.log("-----------Bai 1-----------: ");
for(let i=0; i<products.length;i++){
    const product=products[i];
console.log(`${i+1}|${product.name}|${product.price}|${product.brand}|${product.count}`)
}

// 2. Tính tổng tiền tất cả sản phẩm trong giỏ hàng
// Tổng tiền mỗi sản phẩm = price * count

console.log("-----------Bai 2-----------: ");
let sum = 0;
for(let i=0; i<products.length;i++){
    let tien = products[i].price*products[i].count
    sum +=tien;
};
console.log(sum);

// 3. Tìm các sản phẩm của thuơng hiệu "Apple"

console.log("-----------Bai 3-----------: ");
for(let i=0; i<products.length;i++){
    if(products[i].brand=="Apple"){
        console.log(products[i]);
    }
}

// 4. Tìm các sản phẩm có giá > 20000000

console.log("-----------Bai 4-----------: ");
for(let i=0; i<products.length;i++){
    if(products[i].price>20000000){
        console.log(products[i]);
    }
}
// 5. Tìm các sản phẩm có chữ "pro" trong tên (Không phân biệt hoa thường)

// 6. Thêm 1 sản phẩm bất kỳ vào trong mảng product

console.log("-----------Bai 6-----------: ");
products.push({
    name: "XIAOMI",
    price: 22000000,
    brand: "OPPO",
    count: 2,
})
console.log(products[4]);

// 7. Xóa tất cả sản phẩm của thương hiệu "Samsung" trong giỏ hàng

console.log("-----------Bai 7-----------: ");
let newArr =[];
for(let i=0; i<products.length; i++){
    if(products[i].brand!="Samsung"){
        newArr[i]=products[i]
    }
}
console.log(newArr);
// 8. Sắp xếp giỏ hàng theo price tăng dần

console.log("-----------Bai 8-----------: ");
let giaTangDan = products.sort(function(item1, item2){
    if(item1.price > item2.price){return 1

    }
    if(item1.price < item2.price){
        return -1
    }
    if(item1.price == item2.price){
        return 0
    }
})
console.log("Sap xep gia tang dan",giaTangDan);

// 9. Sắp xếp giỏ hàng theo count giảm dần
console.log("-----------Bai 9-----------: ");
let giaGiamDan = products.sort(function(item1, item2){
    if(item1.price < item2.price){return 1

    }
    if(item1.price > item2.price){
        return -1
    }
    if(item1.price == item2.price){
        return 0
    }
})
console.log("Sap xep gia giam dan",giaGiamDan);
// 10. Lấy ra 2 sản phẩm bất kỳ trong giỏ hàng
