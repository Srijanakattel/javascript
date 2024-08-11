//  //GETELEMENTBYID
// let hello =document.getElementById("heading");//hello is variable you can give any name.
//  console.dir(hello);//we always have to write dir because it is an object.
// //GETELEMENTBYCLASS
//  let hello=document.getElementsByClassName("head");
//  console.log(hello);//we can write log/dir both can be use
// console.dir(hello);
// //GETELEMENTBYTAG
// let hello=document.getElementsByTagName("p");//if h1 tag was use in place of p you have to write h1
// console.log(hello);//we can write dir/log. 
//// QUERY SELECTOR
// let hello=document.querySelector("p");//for tag
// console.dir(hello);//we should use dir.
// let hel=document.querySelectorAll("p");//for tag
// console.dir(hel);
// let hello=document.querySelector(".head");//for class
// console.dir(hello);//we should use dir.
// let hel=document.querySelectorAll(".head");//for class
// console.dir(hel);
//NOTE:IN CASE OF ID QUERYSELECTORALL DONT WORK ONLY QUERYSELECTOR WORK.
// let hello=document.querySelector("#heading");//for id
// console.dir(hello);//we should use dir.
// //TAG NAME
// let hello=document.querySelector("section");
// console.dir(hello);
// let div =document.querySelector("div");
// console.log(div);
// let id=div.getAttributeS("id");
// console.log(id);
//STYLE THROUGH JAVASCRIPT.
let hello=document.querySelector("section");
hello.style.backgroundColor="green";
hello.style.color="white";
