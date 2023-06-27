//Bài 1: Cho một mảng các số nguyên, hãy kiểm tra xem mảng đã được sắp xếp hay chưa. Trả về True nếu đúng và False nếu không.

// const arr = [1, 2, 3, 4, 5, 6];
// function isSortedArray(arr){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > arr[i+1]){
//             return false;
//         }
//     }
//     return true;
// }

// console.log(isSortedArray(arr));

//Bài 2: Bạn được cho 1 mảng số nguyên, nhiệm vụ của bạn là viết chương trình kiểm tra trong mảng có phần tử giống nhau hay không

// let arr = [-1, 0, -1, 9, 4];
// function checkDuplicate(arr){
//   let flag = false;
//   for (let i = 0; i < arr.length; i++){
//     if (arr.indexOf(arr[i]) !== i){
//       flag = true;
//       break;
//     }
//   }
//   return flag;
// }
// if (checkDuplicate(arr)){
//   console.log("Trong mảng có phần tử trùng nhau.");
// }else{
//   console.log("Trong mảng không có phần tử trùng nhau.")
// }

//Bài 3: Bạn được cung cấp 1 số tự nhiên n. ( n<= 100).Bạn hãy tính tổng các số lẻ nhỏ hơn hoặc bằng n.

// function sumSole(n){
//     let sum = 0;
//     if (n <= 100){
//         for(let i = 0; i <= n ; i++){
//             if(i % 2 != 0){
//                 sum += i;
//             }
//         }
//         return 'Tổng các số lẻ nhỏ hơn hoặc bằng '+n+' là '+sum;
//     } else{
//         return 'n phải nhỏ hơn 100';
//     }
// }
// console.log(sumSole(6));

//Bài 4: Cho số nguyên dương n, nhiệm vụ của bạn là viết hàm xác định xem n có phải là luỹ thừa của 4 hay không.
//  function isPowerOfFour(n){
//     if(n <1){
//         return false;
//     }
//     while(n % 4 === 0){
//         n = n /4;
//     }
//     return n === 1;
// }
// console.log(isPowerOfFour(1024));

/*Bài 5: Một số bán nguyên tố là một số tự nhiên được tạo thành từ tích của 2 số nguyên tố(không nhất thiết phải phân biệt). 
Cho số nguyên n hãy xét xem n có phải là số bán nguyên tố hay không.*/
// function isSemiPrime(n) {
//     let count = 0;
//     for (let i = 2; i * i <= n && count < 2; i++) {
//       while (n % i === 0) {
//         n /= i;
//         count++;
//       }
//     }
//     if (n > 1) {
//       count++;
//     }
//     return count === 2;
// }
// console.log(isSemiPrime(12))

/*Bài 6: Hãy đếm số lượng chữ số của số nguyên dương n */

// function digits_cout(n){
//     var count = 1;
//     while(n >= 10){
//         n /= 10;
//         count++;
//     }
//     return count;
// }

// console.log(digits_cout(23));

/*Bài 7: Hãy tính tổng các chữ số chẵn của số nguyên dương n */

// function sumSoChan(n){
//     let sum = 0;
//     for(let i = 0; i <= n; i++){
//         if(i % 2 != 0){
//             continue;
//         }
//         sum += i
        
//     }
//     return console.log('Tổng các số chẵn của số ' +n+ ' là: ' +sum )
// }

// console.log(sumSoChan(3));

/*Bài 8: Viết hàm tìm 1 vị trí mà giá trị tại vị trí đó là giá trị nhỏ nhất trong mảng 1 chiều các số nguyên */
// let arr = [2, 4, 6, -9];
// function searchNum(arr){
//     let min = arr[0];
//     let index;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] < min){
//             min = arr[i];
//             index = i;
//         }
//     }
//     return index;
// }
// console.log(searchNum(arr));

/*Bài 9: Viết hàm tính tổng các giá trị âm trong mảng*/
// let arr = [1,5,10,-9, 33, 40, -20];
// function sumSoAm(arr){
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] < 0 && arr[i] % 1 == 0){
//             sum += arr[i];
//         }
//     }
//     return sum;
// }
// console.log(sumSoAm(arr));

/*Bài 10: Cho mảng 1 chiều các số nguyên. Hãy tìm giá trị đầu tiên có chữ số đầu tiên là chữ số lẻ */



/*Bài 11: Hãy liệt kê các vị trí mà giá trị tại đó là số nguyên tố trong mảng 1 chiều các số nguyên */



/*Bài 12: Tính tổng các giá trị dương trong mảng 1 chiều */

// let arr = [1,5,10,-9, 33, 40, -20];
// function sumSoDuong(arr){
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > 0 && arr[i] % 1 == 0){
//             sum += arr[i];
//         }
//     }
//     return sum;
// }
// console.log(sumSoDuong(arr));

/*Bài 13: Tính trung bình cộng các số nguyên tố trong mảng 1 chiều các số nguyên */

// let arr = [1,5,10,-9, 33, 40, -20];
// function avgTBC(arr){
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     let avg = sum / arr.length;
//     return avg;
// }
// console.log(avgTBC(arr));

/*Bài 14: Đếm số lượng các giá trị phân biệt có trong mảng */

// let arr = [1,5,10,-9, 33, 40, -20];
// function demPhanTu(arr){
//     let dem = 1;
//     for(let i = 0; i < arr.length; i++){
//         for(let j = 0; j < i; j++){
//             if(arr[i] == arr[j]){
//                 return false;
//             }
//             dem++
//         }
//     }
// }
// console.log(demPhanTu(arr));

