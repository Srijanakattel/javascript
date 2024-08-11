// //get user to input a number using prompt ("enter a number"). check if the number is a multiple of 5 or not.
// let num =prompt("enter a number");
// if(num%5==0){
//     document.write(num, " is multiple of 5");
// }
// else{
//     document.write(num, " is not multiple of 5");
// }
// //write a code which can give grades to students according to their scores;
// //90-100,a   70-89,b  60-69,c   50-59,d   0-49,f
// let score= prompt("enter your score");
// let grade;
// if(score>=90 && score<=100){
//     grade="A";
// }
// if(score>=70 && score<=89){
//     grade="B";
// }
// if(score>=60 && score<=69){
//     grade="c";
// }
// if(score>=50 && score<=59){
//     grade="D";
// }
// if(score>=0 && score<=49){
//     grade="F";
// }
// document.write("according to your score, your grade is\n",grade);
// //PRINT ALL EVEN NUMBER FROM 0 TO 100
// for(let num=0;num<=100;num++){
//     if(num%2==0){
//         document.write(num,"<br>");
//     }
// }
// // //CREATE A GAME WHERE YOU START WITH ANY 
// // //RANDOM GAME NUMBER. ASK THE USER TO KEEP GUESSING THE GAME NUMBER UNTILL THE USER ENTERS CORRECT VALUE.
// let gameNum=18;
// let userNum= prompt("Guess the game number");
// while(userNum != gameNum){
//     userNum=prompt("you entered wrong number. Guess again");

// }
// document.write("congratulation! you entered the right number");
// //FOR A GIVEN ARRAY WITH MARKS OF STUDENTS [85,97,44,37,76,60] FIND THE AVERAGE MARKS OF THE ENTIRE CLASS.
// let marks=[85,97,44,37,76,60];
// let sum=0;
// for(let i=0;i<marks.length;i++){
//     sum += marks[i];
// }
// let avg=sum/marks.length;
// document.write(`average marks of student is ${avg}`);
// //FOR A GIVEN ARRAY WITH PRICES OF 5 ITEMS.
// //ALL ITEMS HAVE AN OFFER OF 10%OFF ON THEM.CHANGE THE ARRAY TO STORE FINAL PRICE AFTER APPLYING OFFER
// let items=[250,300,359,400,5500];
// for(let i=0;i<items.length;i++){
//     let offer=items[i]/10;
//     items[i]-=offer;

// }
// document.write(items,"<br>");
// //CREATE A H2 HEADING ELEMENT WITH TEXT "HELLO ". APPEND "FROM MMC" TO THIS TEXT USING JS.
// let h2=document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText=h2.innerText + "from MMC";
// //CREATE A TOGGLE BUTTON THAT CHANGES THE SCREN TO DARK MODE WHEN CLICKED & LIGHT MODE WHEN CLICKED AGAIN.
// let mode=document.querySelector("#mode");
//let body=document.querySelector("body");//TO ACESS BODY.
// let currMode="light";
// mode.addEventListener("click",()=>{
//     if(currMode==="light"){
//         currMode="dark";
//          body.style.backgroundColor="black";
//         // mode.style.backgroundColor="black";//this will change in background of button
//     }
//     else{
//         currMode="light";
//         body.style.backgroundColor="white";
//         // mode.style.backgroundColor="white";//this will change background of button
//     }
    
// });
//CREATE A TOGGLE BUTTON THAT CHANGES THE SCREN TO DARK MODE WHEN CLICKED & LIGHT MODE WHEN CLICKED AGAIN.
//BY NEXT METHOD
//This is better approach.
let mode=document.querySelector("#mode");
let body=document.querySelector("body");
let currMode="light";
mode.addEventListener("click",()=>{
    if(currMode==="light"){
        currMode="dark";
         body.classList.add("dark");//this is the way of changing after defining in css
         body.classList.remove("light");
        
    }
    else{
        currMode="light";
        body.classList.add("light");//this is the way of changing after defining in css
        body.classList.remove("dark");
        
    }
    
});