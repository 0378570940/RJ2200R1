// Bài 1: Đếm số ký tự của một chuỗi: “lazy dog ​​jumps over brown fox”
let greetings = "lazy dog humps over brown fox";
let chars = [...greetings]
console.log(chars.length)

// bài 2 nối 2 mảng dữ liệu thành mảng mới

let blog1Subscribers = ['billy@example.com', 'sally@gmail.com'];
let blog2Subscribers = ['timmy@gmail.com', 'tammy@example.com', 'tommy@gmail.com'];
let blogMoi=[...blog1Subscribers, ...blog2Subscribers]
console.log(blogMoi);

// bài 3 copy 2 mảng dữ liệu

let students = ['John', 'Sofia', 'Bob'];
let copy_students = students;
console.log(copy_students);
students.push('Sally'); // Change students
console.log(arr2);