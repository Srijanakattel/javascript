// function sum(a,b){
//     s=a+b;
//     return s;
// }
// let d=sum(3,4);
// document.write(d);
// document.write("<br/>")
// // next way.
// function sum (a,b){
//     return a*b;
// }
// let e = sum(7,8);
// document.write(e);
// document.write("<br/>")
// //ARROW FUNCTION.function can be treated as variable.
// let arrowmul=(a,b)=>{//vatiable functionname
//     return a*b;
// }
// let f=arrowmul(2,3);
// document.write(f);
// document.write("<br/>");
// //NEXT.
// let printhello=()=>{
//     document.write("oh no!");
// }
// printhello();
// document.write("<br/>")
// //CREATE A FUNCTION USING THE FUNCTION KEYWORD THAT TAKES A STRING AS AN ARGUMENT & RETURNS THE NUMBER OF VOWELS IN THE STRING.
// function countvowels(str){
//     let count=0;
//     for(const char of str){ //using for of loop.
//         if(
//             char== "a"||
//             char== "e"||
//             char== "i"||
//             char== "o"||
//             char== "u"
            
//         ){
//             count++;
//         }
//     }
//     document.write(count);
// }
// countvowels("hello");
// document.write("<br/>");
// //we are given array of marks of students. Filter out of the marks of students that scored 90+.
// let marks = [97,98,32,64,99,86];
// let toppers = marks.filter((val) => {
//     return val >90;
// });
// document.write(toppers);
// document.write("<br/>");
// //Take a number n as input from user .Create an array of numbers from 1 to n.
// //Use the reduce method to calculate sum/total of all numbers in the array.
// //Use the reduce method to calculate product of all numbers in the array.
// let n= prompt("enter a number:");
// let arr=[];
// for(let i=1;i<=n;i++){
//     arr[i-1]=i;

// }
// document.write(arr);
// document.write("<br/>");
// let total = arr.reduce((res, curr) =>{
//     return res + curr;
// });
// document.write("total =",total);
// let factorial=arr.reduce((res, curr)=>{
//     return res*curr;
// });
// //FOR EACH LOOP IN ARRAY
// let arr=["btm","ktm","pkh"];
// arr.forEach((val)=> {
//     document.write(val.toUpperCase(),"<br>");
// });
//FOR A GIVEN ARRAY OF NUMBERS, PRINT THE SQUARE OF EACH VALUE USING THE forEachLoop.
let nums =[2,3,4,5];
nums.forEach((i)=>{
    document.write(i*i,"<br>");
});

