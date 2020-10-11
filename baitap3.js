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
/* 24. Cho một mảng là một tập các số nguyên dương, lọc ra một bảng b gồm tất cả các số là số nguyên tố? (Dùng filter)*/
c = [1,2,3,2,3,4,6,7];
function checkSNT(number){
   if(number < 2) {
       return false;
   }
   for( var i = 2; i <= Math.sqrt(number); i++){
       if(number % i == 0){
           return false;
           break;
       }
   }
   return true;
}
var result6 = c.filter(checkSNT);
console.log(result6);

/*  25. Cho một mảng là một tập các số nguyên dương, hãy tạo một mảng b là tập hợp bình phương của các số trong mảng a*/
d = [1,2,3,2,3,4,6,7];
var result7 = d.map((a) => Math.pow(a,2));
console.log(result7);
/*  27 Cho một mảng là một tập hợp các học viên trong lớp REACTJS, mảng là một tập hợp object của học viên gồm 3 thông tin: id, firstName, lastName, và age. Hãy đưa tên và họ về chuẩn tên với ký tự đầu tiên của tên Viết Hoa và tìm tất cả học viên có tên tồn tại chữ cái “a” hoặc “A” và tên dài hơn hoặc bằng 3 ký tự.*/
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
 var result8 = students.map((item) => {
    item.firstName = standarName(item.firstName);
    item.lastName = standarName(item.lastName);
    return item;
 }).filter(item => item.firstName.length >= 3 && (item.firstName.indexOf('a') != -1 || item.firstName.indexOf('A') != -1));
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
function standarName(str){
    str = str.trim();
    str = str.toLowerCase();
    var str = str.charAt(0).toUpperCase() + str.toLowerCase().slice(1)
    var i = 0;
    while(i < str.length){
        if(str[i] == str[i+1] && str[i] == ' '){
            str = str.substr(0,i+1) + str.substr(i+2, str.length);
        }
        else{
            i++;
        }
    }
    for (var i = 0; i < str.length; i++) {
        if (str[i] == " ") {
            str = str.slice(0, i + 1) + str.charAt(i + 1).toUpperCase() + str.slice(i + 2)
        }
    }
    return str;
 }
//  28
 var result9 = students.filter((item) => {
    item.lastName = standarName(item.lastName);
    return item.lastName.split(' ')[0] == 'Do';
 })
 console.log(result9);
 /* 30. Cho một mảng là một tập các số nguyên dương, tìm số lớn thứ nhì trong mảng, không có thì in ra -1?*/
abc = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1];
function maxTwo(arr){
   var result = arr.filter(item => item < Math.max(...arr));
   result.sort((a,b) => a -b);
   return result.length != 0 ? result[result.length - 1] : -1;
}
console.log(maxTwo(abc))
//  31. Cho một mảng là một tập các số nguyên dương và một số nguyên dương k, tìm xem trong mảng có tồn tại 3 số có tổng bằng k? (1s) , length of array.
array = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1];
function checkTotalThreeArray(arr,number){
   for(var i = 0; i < arr.length - 2; i++){
       for( var j = i+1; j < arr.length - 1; j++){
           for( var k = j+1; k < arr.length; k++){
               if( arr[i] + arr[j] + arr[k] == number){
                   return 'Yes';
                   break;
               }
           }
       }
   }
   return 'No';
}
console.log(checkTotalThreeArray(array,27))