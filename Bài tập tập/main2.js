/*Array là gì:  */
let arr = [1, 2, 3, -1, 5, 6, 7];
// console.log(arr[0], arr[3]);
// console.log(arr[1] + arr[2]);
// let temp = arr[1];
// arr[1] = arr[3];
// arr[3] = temp;
// console.log(arr);
// for(let i = 0; i < arr.length; i++){
//     if(i % 2 !== 0){
//         console.log(arr[i]);
//     }
// }
// function sumArr(arr){
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     return sum;
// }
// console.log(sumArr(arr));
// function minNum(arr){
//     let min = arr[0];
//     for(let i = 0; i < arr.length; i++){
//         if(min > arr[i]){
//             min = arr[i]
//         }
//     }
//     return min;
// }
// console.log(minNum(arr));

let n = [1, 4, 6 ,7 ,9];
// function slnCH3(n){
//     let max = n[0];
//     for(let i = 0; i < arr.length; i++){
//         if(i % 3 === 0){
//             max = i;
//             break;
//         }
//     }
//     return max;
// }
// console.log(slnCH3(n));
// let a = [];
// let max = a[0];
// for(let i = 0; i < n.length; i++){
//     if(n[i] % 3 === 0){
//        a.push(n[i]);
//     }
// }
// for(let j = 0; j < a.length; j++){
//     if(a[j] > max){
//         max = a[j];
//     }
// }
// console.log(max);

// function avgTBC(n){
// //     let sum = 0;
// //     for(let i = 0; i < arr.length; i++){
// //         sum += n[i];
// //     }
// //     let avg = sum / arr.length;
// //     return avg;
// // }
// // console.log(avgTBC(n));














/*Bài 1: Khai báo 1 function với đầu vào là 3 số a, b, c (a khác 0). 
Hãy tìm nghiệm của phương trình a.x^2 + b.x + c = 0 và đưa ra kết quả dưới dạng 1 mảng gồm các nghiệm của phương trình.
 */
// function giaiPT(a, b, c){
//     let root1;
//     let root2;
//     let discriminant = b * b - 4 * a * c;
//     if(discriminant > 0){
//         root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
//         root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
//         console.log('Phuong trinh co nghiem la: ' + root1 + ' va ' +root2);
//     }else if(discriminant === 0){
//         root1 = root2 = -b / (2*a);
//         console.log('Phuong trinh co nghiem la: ' + root1 + ' va ' +root2);
//     }else{
//         let realPart = (-b / (2 *a).toFixed(2))
//         let imagPart = (Math.sqrt(-discriminant) / (2 * a).toFixed(2));
//         console.log('Phuong trinh co nghiem la: ' + realPart + imagPart + ' va ' + realPart - imagPart);
//     }
// }
// console.log(giaiPT(1, 6, 5));