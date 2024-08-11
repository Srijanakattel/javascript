let value=2.6;
let a = Math.round(value);
document.write(a);
document.write("<br/>");
let b = Math.pow(8,2);
document.write(b);
document.write("<br/>");
let c = Math.sqrt(25);
document.write(c);
document.write("<br/>");
//to generate number randomly in each click we use this function.
//*6 means we can get 1-6 random number.
//.toFixed is used to fix value after decimal point.
let d = (Math.random()*6).toFixed(0);
document.write(d);