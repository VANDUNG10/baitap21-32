/*21. Cho một mảng là một tập các số, tính tổng tất cả các số của mảng này?
VD: a = [1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1] .Output: 90 */
a = [1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1];
var result = a.reduce((dung,value) => {
    return dung += value;
},0)

console.log(result);
/*22.  Cho một mảng là một tập các số, tìm số lớn nhất, nhỏ nhất và số trung bình trong mảng này?*/
// function Max(array){
//     var max = a[0];
//     for( var i = 1; i < a.length; i++){
//         if(max < a[i]){
//             max = a[i];
//         }
//     }
//     return max;
// }
// var result1 = Max(a);
// var result2 = Math.max(a);
// var result3 = Math.min(a);
// var result4 = result/a.length;

// console.log('Max:' + result2 + ' Min:' + result3 + ' Medium:' + result4);
// Lấy giá trị lớn nhất và nhỏ nhất
var maxa = Math.max(a); 
var mina = Math.min(a);
var medium =result/a.length
document.write("Giá trị lớn nhất là " +maxa+ "<br/>");
document.write("Giá trị nhỏ nhất là " +mina+ "<br/>");
document.write("Giá trị trung binh là " +medium+ "<br/>");
/*23. Cho một mảng là một tập các số nguyên, tìm số có tần suất xuất hiện nhiều nhất?*/ 
b = [a];
function countFrequency(array){
   var frequency = [];
   array.forEach((value,index,arr) => {
       count = 1 ;
       for( var i = index + 1; i < arr.length ; i++){
           if(value == arr[i]){
              count++;
           }
       }
       frequency.push(count);
   })
   return Math.max(...frequency);
}
var result5 = countFrequency(b);
console.log('Tần suất lớn nhất của mảng: ' + result5)
//  25. Cho một mảng là một tập các số nguyên dương, hãy tạo một mảng b là tập hợp bình phương của các số trong mảng a
d = [1,2,3,2,3,4,6,7];
var result7 = d.map((a) => Math.pow(a,2));
console.log(result7);
/*28. Cho một mảng là một tập hợp các học viên trong lớp REACTJS, mảng là một tập hợp object của học viên gồm 3 thông tin: id, firstName, lastName, và age. Hãy tìm tất cả học sinh cá biệt của lớp biết rằng học sinh cá biệt có họ là “Do”.*/ 
students = [
    {
        id: "T3HXX1",
        firstName: "NgAN",
        lastName: "Duong Thuy"
    },
    {
        id: "T3HXX2",
        firstName: "Ha",
        lastName: "Do Thi Thu"
    },
    {
        id: "T3HXX5",
        firstName: "Minh",
        lastName: "Nguyen Nhat"
    }
]
 var result9 = students.filter((item) => {
    item.lastName = standarName(item.lastName);
    return item.lastName.split(' ')[1] == 'Do';
 })
 console.log(result9);