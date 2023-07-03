/*Bài 1: In ra dãy số từ 1 đến 500.*/
// for(let i = 1; i <= 500; i++){
//     console.log(i + '');
// }

/*Bài 2: In ra các số chia hết cho 2 và 3 từ 1 đến 300.*/
// for(let i = 1; i <= 300; i++){
//     if(i % 2 == 0 && i % 3 == 0){
//         console.log(i + '');
//     }
// }

/*Bài 3: Tính tổng các số chẵn trong đoạn [-30, 50].*/
// let sum = 0;
// for(let i = -30; i <= 50; i++){
//     if(i % 2 != 0){
//         continue;
//     }
//     sum += i;
// }
// console.log('Tổng của các số chẵn là:' +sum);

/*Bài 4: Nhập vào số n. Tính giai thừa của số n.*/
// function factorial(n){
//     let factorialNum = 1;
//     for(let i = 1; i <= n; i++){
//         factorialNum *= i;
//     }
//     return factorialNum;
// }
// console.log(factorial(5));

/*Bài 5: Nhập vào 3 số a, b, x (a < b). Tìm trong khoảng a, b số nhỏ nhất mà chia hết cho x.*/
// function minNumber(a, b, x){
//     let min = -1;
//     for(i = a; i < b; i++){
//         if(i % x === 0){
//             min = i;
//             break;
//         }
//     }
//     return min;
// }
// console.log(minNumber(1, 5, 3));

/*Bài 6: Nhập vào số n (n >= 2). Hãy tính giá trị biểu thức sau:  */
// function gtBieuThuc(n){
//     let S = 0;
//     if(n < 2){
//         console.log('Số nhập vào phải lớn hơn hoặc bằng 2!')
//     }else if(n >= 2){}
//     for(let i = 1; i <= n; i++){
//         S += 1 / (i*(i+1));
//     }
//     return S;
// }
// console.log(gtBieuThuc(3));

/*Bài 7: Nhập vào số n. Hãy in ra số ước của n.*/
// function uocSo(n){
//     for(let i = 1; i <= n; i++){
//         if(n % i === 0){
//             console.log(i);
//         }
//     }
//     return n;
// }
// console.log(uocSo(60));

/*Bài 8: Nhập vào số n. Viết chương trình kiểm tra xem n có phải số nguyên tố không.*/
// function check_SNT(n){
//     let flag = true;
//     if(n < 2){
//         flag = false;
//     }else{
//         for(let i = 2; i < n -1; i++){
//             if(n % i == 0){
//                 flag = false;
//                 break;
//             }
//         }
//     }
//     if(flag == true){
//         console.log(n +' là số nguyên tố.')
//     }else{
//         console.log(n+' không phải là số nguyên tố.')
//     }
//     return n;
// }
// console.log(check_SNT(2));

/*Bài 9: Nhập vào chuỗi s (chỉ gồm chữ số) và số l. Hãy thêm vào đầu chuỗi s ký tự ‘0’ cho đến khi độ dài chuỗi s >= l.*/

// function enter(number, string){
//     while(string.length < number){
//         string += 'l';
//     }
//     return string;
// }
// console.log(enter(5, 's'));

/*Bài 10: Nhập vào 2 số m, n (m > 0, n > 0). Tìm ước chung lớn nhất của m, n.*/

// function UCLN(m,n) {
//     while(m != n){
//         if(m > n){
//             m -= n;
//         }else
//             n -= m;
//         }
//     return m;
// }
// console.log(UCLN(30, 16));

/*Bài 11: Nhập vào 2 số m, n (m > 0, n > 0). Tìm bội chung nhỏ nhất của m, n.*/

// function BCNN(m, n){
//     let result = UCLN(m, n);
//     return m * n / result;
// }
// console.log(BCNN(100, 200));

/*Bài 12: Trò chơi đoán số:
Máy tính tự động tạo ra 1 số correct bất kỳ từ 1 đến 20.
Người dùng nhập vào 1 số answer. Nếu answer bằng correct → in ra “Đoán đúng”.
Ngược lại → in ra “Đoán sai” và yêu cầu nhập lại answer.
Nếu nhập sai answer quá 5 lần → in ra “Bạn đã thua cuộc”.
*/
// theNumber = Math.floor(Math.random() * 20 + 1)
// function random(n){
//     let score = 5;
//     let guess = "";
//     let result;
//     // while(true){
//     //     theNumber = Math.floor(Math.random() * 20 + 1);
//     //     console.log('Đoán đi: ');
//     //     if(guess != theNumber){
//     //         result = "Bạn đoán sai";
//     //         console.log(result);
//     //         score--;
//     //     }else(guess == theNumber)
//     //         result = "Bạn đoán đúng";
//     //         console.log(result);
//     //         score++;
//     //     if(score == 0){
//     //         console.log('Hết lượt');
//     //         break;
//     //     }
//     //     if(score == 10){
//     //         console.log('You win');
//     //         break;
//     //     }
//     //     return n;
//     // }

// }

/*Bài 13: Nhập vào số n (2 <= n <= 10). Hãy in ra bảng cửu chương của số n.*/

// function bang_cuu_chuong(n){
//     for(let i = 1; i <= 10; i++){
//         console.log("");
//         console.log(+n + "x" + i + "=" + (n*i));
//     }
// }
// console.log(bang_cuu_chuong(2));

/*Bài 14: Nhập vào số n (n >= 2). Hãy in ra màn hình hình vuông có độ dài cạnh = n.*/

// function printSquare(n){
//     if(n < 2){
//         console.log("n phải lớn hơn hoặc bằng 2");
//         return;
//     }

//     for(let i = 0; i < n; i++){
//         let row ="";
//         for(let j = 0; j < n; j++){
//             row += "* ";
//         }
//         console.log(row)
//     }
// }
// console.log(printSquare(3));

/*Bài 15: Nhập vào 2 số m, n (m >= 2, n > =2). Hãy in ra màn hình hình chữ nhật có độ chiều rộng là m và chiều cao là n. */

// function printRectangle(m, n){
//     if(m < 2 || n < 2){
//         console.log("m và n phải lớn hơn hoặc bằng 2")
//         return;
//     }
//     for(let i = 0; i < m; i++){
//         let row = "";
//         for(let j = 0; j < n; j++){
//             row += "* ";
//         }
//         console.log(row);
//     }
// }
// console.log(printRectangle(3, 4));

/*Bài 16: Nhập vào số n (n >= 3). Hãy in ra màn hình hình tam giác vuông cân có độ dài cạnh góc vuông = n.*/

// function printTriangle(n){
//     if(n < 3){
//         console.log("m phải lớn hơn hoặc bằng 3")
//         return;
//     }
//     for(let i = 1; i <= n; i++){
//         let row = "";
//         for(let j = 1; j <= i; j++){
//             row += "* ";
//         }
//         console.log(row);
//     }
// }
// console.log(printTriangle(3));

/*Bài 17: Nhập vào 2 số w và h là chiều cao và cân nặng của 1 người. Hãy tính chỉ số BMI và đưa ra kết quả:
Nếu BMI < 18.5 → in ra “Nhẹ cân”
Nếu 18.5 <= BMI < 23 → in ra “Bình thường” 
Nếu 23 <= BMI < 25 → in ra “Thừa cân”
Nếu BMI >= 25 → in ra “Béo phì”
*/

// function calculateBMI(w, h){
//     let result
//     if(w <= 0 || h <= 0){
//         console.log("Số nhập vào không hợp lệ")
//     }else{
//         h = h / 100;
//         let bmi = w / Math.pow(h, 2);
//         console.log(bmi);
//         if(bmi < 18.5){
//             return 'Nhẹ cân';
//         }else if(bmi >= 18.5 && bmi < 23){
//             return 'Bình thường';
//         }else if(bmi >= 23 && bmi < 25){
//             return 'Thừa cân';
//         }else(bmi >= 25)
//             return 'Béo phì';
//     }
//     return bmi;
// }
// console.log(calculateBMI(70, 175));


// let daySo = 0;
// while(daySo < 200){
//     daySo++
//     console.log(daySo);
// }

// function number(x, y){
//     while (x <= y){
//         console.log(x, y);
//         x++;
//         y--;
//     }
// }
// number(10, 30)