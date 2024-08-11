// let b1=document.querySelector("#b1");//USE OF QUERY SELECTOR//variable and id name can also be written same.
// b1.onclick=()=>{//EVENT HANDELING IN JS
//     console.log("b1 was clicked");
//     let a =25;
//     a++;
//     console.log(a);
// };
// //                                             //
// let div=document.querySelector("#button1");//HERE DIV IS VARIABLE 
// div.onmouseover=()=>{
//     console.log("you are iside box");
// }
// //EVENT OBJECT
// let b1=document.querySelector("#b1");
// b1.onclick=(e)=>{
//     console.log(e);
//     console.log(e.type);//this is use to know about event type
//     console.log(e.target);//this is use to know about target
//     console.log(e.clientX, e.clientY);//this is use to know about position.
//     let a =25;
//     a++;
//     console.log(a);
// };
// //WE CAN ALSO USE EVENT OBJECT IN MOUSEHOVER
//    let div=document.querySelector("#button1");//HERE DIV IS VARIABLE 
//    div.onmouseover=(e)=>{
//     console.log(e);
//     console.log(e.type);//this is use to know about event type
//     console.log(e.target);//this is use to know about target
//     console.log(e.clientX, e.clientY);//this is use to know about position.
    
// };
// //ABOUT EVENT LISTENER
// let b1=document.querySelector("#b1");
// b1.addEventListener("click",()=>{
//     console.log("button was clicked");
// });
// //IN SAME EVENT WE CAN USE MULTIPLEEVENTLISTENER.
// b1.addEventListener("click",()=>{
//     console.log("button was clicked - handler2");
// });
// //USE OF EVENT OBJECT IN EVENT LISTENER
// let b1=document.querySelector("#b1");
// b1.addEventListener("click",(e)=>{
//     console.log("button was clicked");
//     console.log(e);
//     console.log(e.type);//this is use to know about event type
//     console.log(e.target);//this is use to know about target
//     console.log(e.clientX, e.clientY);//this is use to know about position.
// });
//ABOUT REMOVE EVENT LISTENER
let b1=document.querySelector("#b1");
 b1.addEventListener("click",()=>{
    console.log("button was clicked = handler1");
 });

 b1.addEventListener("click",()=>{
    console.log("button was clicked - handler2");
});
const handler3=() =>{//we should keep the event under some variable which we want to remove
    console.log("button was clicked - handler3");
};
b1.addEventListener("click",()=>{
    console.log("button was clicked - handler4");
});
b1.removeEventListener("click",handler3);//use of remove event listener