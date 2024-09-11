let num = 2345678;
console.log(num);
console.log(typeof num);
console.log(Number.MAX_VALUE);
let num1 = 150805102518410055400501n ;//big int
console.log(num1+1n);

let siva = "Hello alliens! Today i wanna to discuss the java variables";
console.log(siva);

//string concatination
let firstname = "Siva";
let lastname = "Vaddi";
let name1 = firstname + " "+ lastname;
console.log(name1);

//write the code for inside the string in double quotes
//1.
let name2 = 'Siva Vaddi "Vloger"';
console.log(name2)
//2.
let name3 = "siva vaddi \"Vloger\"";
console.log(name3)

//write the code for new line(\n) and tab space(\t) for string
let name5 = "I'm not  \na innocent person";
console.log(name5)
let name6 = "Siva\tSai";
console.log(name6);

//remove the eleement like backspace(\b) and vertical text(\v)  
let name7="siva\vhello";
console.log(name7);
let name8 = "Hello,\b Sir ";
console.log(name8);

//typeof
console.log(5/"Siva");
console.log(typeof (5 /"sai"));

console.log(5/0);
console.log(typeof (5/0))

//boolean
let a = 10>6;
console.log(a);


let b = 10==6
console.log(b);

let c = 10!=0;
console.log(c)

//converting from string into number and  viceversa
let n = "50" // using string indentation
console.log(n, typeof n);

let r = String(50) //using string keyword
console.log(r, typeof r);

let w = Number ("123"); // by using number keyword
console.log(w,typeof w);

let s = r-2; //string minus number, result is number
console.log(s, typeof s);

let q = w + "hey"; //Number plus String result is string
console.log(q, typeof q);

let j = r + 5; // String plus number result is string
console.log(j, typeof j);

let h = +r +5; //string plus number result is number by using plus operator in starting of eqyation 
console.log(h, typeof h);

let  e = Number("Siva 123") // how to convert combination string and number sentence
console.log(e, typeof e);

let f = parseInt('123 siva'); //using parseint keyword =>first you mention the numbers then u mention string or any kind of string
console.log(f, typeof f);

let p = Boolean(5); //convert number to boolean
console.log(p, typeof p);

let o = Boolean("Siva") //convert string to boolean
console.log(o, typeof o);

let k = String(true) //convert boolean to string
console.log(k, typeof k );

let l = Number(true); //convertion of boolean to number
console.log(l, typeof l);

let z = parseFloat("5.9 sai"); //converting the floated value combination of string into number with decimal points by using parseFloat.
console.log(z, typeof z);

//Arithmetic operators
//1.Addition
let num2 = 17
let num3 = 20;
let sum = num2+num3;
console.log(sum);

let num6 = true;
let num7 = true;
let sum1 = num6 + num7;
console.log(sum1);

let num8 = false;
let num9 = true;
let sum2 = num8 + num9;
console.log(sum2);

//2.subtraction
let num4= 25;
let num5 = 30;
let sub = num4 - num5;
console.log(sub);

let num10 = true ;
let num11 = true;
let sub1 = num10-num11;
console.log(sub1);

//3.Multiplication
console.log(10*5);
console.log(true * true);
console.log(true * false);

//4.division
console.log(10/5);
console.log(10/true);
console.log(10/0);
console.log(siva/10)

//modules operation
console.log(10%4);
console.log(10%true);

//increment operator
let number = 10;
let number1 = number++; //post increment
console.log(number1, number);

//number=11
let number2 = ++number; //post increment
console.log(number2, number);

//number = 12
let number3 = number--; //post decrement
console.log(number3 , number);

//number = 11
let number4 = --number; //pre decrement
console.log(number4 , number);






