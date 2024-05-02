//Bài 2. Cho mảng users như sau:
let users = [
    {
      name: "Bùi Công Sơn",
      age: 30,
      isStatus: true,
    },
    {
      name: "Nguyễn Thị Hằng",
      age: 27,
      isStatus: false,
    },
    {
      name: "Phan Văn Dũng",
      age: 20,
      isStatus: false,
    },
  ];
  
  // Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age > 25 và isStatus = true
  function filterUsersByAgeAndStatus(users) {
    let result = [];
    for (const user of users) {
      if (user.age > 25 && user.isStatus == true) {
        result.push(user);
      }
    }
    return result;
  }
  
  // Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age tăng dần
  function sortUsersByAge(users) {
    users.sort((a, b) => a.age - b.age);
    return users;
  }