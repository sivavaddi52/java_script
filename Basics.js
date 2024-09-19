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
let name1 = firstname + " " + lastname;
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
let number2 = ++number; //pre increment
console.log(number2, number);

//number = 12
let number3 = number--; //post decrement
console.log(number3 , number);

//number = 11
let number4 = --number; //pre decrement
console.log(number4 , number);

//Realational operators
console.log(5 > 6);
console.log(9 > true);
console.log(1 > true);
console.log(1 >= true);
console.log(1 == true);
console.log(1 === true);
console.log(1 !== true); //!== is checks the both data and datatype. 
console.log(1 != true);//!= only checks the data not in data type.



//what is the difference between the == and === ?
//== is only checks the data only not in datatype but the thing is you are using === this checks both means data and type of the data.
console.log("3"==3, typeof ("3" == 3));
console.log("3" === 3);

//logical operators
let a1 = 30, b1 =45, c1 =25;
let result = a1>b1 && a1>c1;
let n1 = !result;
console.log(result,n1);

//conditional statements if, else if and else
let n12 = 15;
let n13 = 29;
let n14 = 25;
if (n12 > n13 && n12 > n14){
    console.log("n12 is greatest");
}
else if (n13 > n14){
    console.log("n13 is greatest");
    
}
else{
    console.log("n14 is greatest");
    
}
console.log("Byee...");

//even or odd number 
let numb = 30;
if (numb%2 ===0){
    console.log("number is even");
    
}
else{
    console.log("number is odd");
    
}

//ternary operator (?:)
let numbe = 8;
let result1
// if (numbe%2 ===0)
//     result1 = "Even"
// else
//     result1 = "Odd"
result1 = numbe%2 === 0 ? "Even" : "Odd";

console.log(result1);

let result2 = numbe%5 ===0? "Divisible by 5":"Not divisible by 5"
console.log(result2);

//swith condition
//mon-wed- 4am
//thursday-fri -8am
//sat-sun- 10am
let day = "Sunday";
switch(day){
    case 'Monday':{
        console.log("4am");
        break;
    }
    case 'Thuesday':{
        console.log("4am");
        break;
    }
    case 'Wednesday':{
        console.log("4am");
        break;
    }
    case 'Thursday' :{
        console.log("8am");
        break;
    }
    case 'Friday' :{
        console.log("8am");
        break;
    }
    case 'Saturday':{
        console.log("10am");
        break;
    }
    case 'Sunday':{
        console.log("10am");
        break;
    }
}
//templete literal
let numbe1 = 10;
let numbe2 = 15;
let res = numbe1 + numbe2;
console.log("The addition of "+ numbe1 +" and "+ numbe2 +" is "+ res);//older way
console.log(`The addition of ${numbe1} and ${numbe2} is ${res}`);//by using template literal

console.log("I am \nSiva Sai Kumar");//using \n for new line
console.log(`I am
Siva Sai Kumar`);//using template literal

//loops: is used for repetated operations
//1.while loop
//initialization, condition and increment
let i =1;
while(i<6){
    console.log("Hi",i);
    i++;
}
console.log(`Final value of i is ${i}`);

//2.do- while loop
//initialization, increment and condition
let i1 = 5;
do{
    console.log("Hello", i1);
    i1--;
}while(i1>0);
//what is the difference between while loop and do-while loop?
//while loop is begin with check the condition, when the condition is true excecute the block of code. 
//Then coming to the do-while loop begin for excecution for the block after his checks the condition.

//for loop
//1.type for writing
let i2 = 1;
for(;i2<=3;){
    console.log("Siva",i2);
    i2++;
}
//2.another type for loop declaration
for (let i3=0;i3<=2;i3++)
    console.log("Dude",i3);

//nested loops:-loop has inside loop we can call it as nested loops
// for (let i4=1;i4<=5;i4++){
//     console.log(i4);
//     for (let j = 1; j <= 2; j++) {
//         console.log(j); 
//     }
    
// }

//write a code for print 1 to 20 numbers for divisible by 3
for(let i3=1 ;i3<=20;i3++){
    if(i3%3===0){
        console.log(i3);
        
    }
}

//write code for split the number for every digit in new line.eg:1234567
let number12 = 123456;
while(number12!==0){
    console.log(number12%10);
    number12 =parseInt(number12/10);
}

//write a code for reverse number
let num12 = 134678922;
let m =0;
while (num12 !==0){
    let num123 = num12 %10;
    m = m*10 + num123;
    num12 = parseInt(num12/10); 
}
console.log(`reverse number is ${m} ` );

//objet- Is a real world entity, that has properties.

let tech1 = 'tech';
let asd = {
    name : 'Siva',
    tech : 'Fullstack',
    Exp : '4years'
 };

console.log(asd, typeof asd); //print the total object
console.log(asd.name); //print the only name property, by using object_name.property_name
console.log(asd[tech1]); //print the tech, created new variable and store the tech to new variable, object_name[new_variable_name]

//complex object- object has a inside another object is called complex object
let obj = {
    name : 'siva',
    age :21,
    address :{
        House_No :'4-412',
        village : 'Malikipuram',
        Mandal : 'Sakhenetipalli',
        District : 'East Godavari',
        state : 'Andhra Pradesh',
    }
}
delete obj.age; //delete the age property.

console.log(obj); //print the complete complex object
console.log(obj.address); //print the inside the object
console.log(obj.name,obj.name.length);//print the property value and length 
console.log(obj.address.village.length);//print the inside the object property length

console.log(obj.address.village1?.length) //if not available for property name then used for last of the nmae in ?
console.log(obj.address?.village); 
console.log(obj.address1?.village);

//for - in loop for print teh all the properties inthat complex object
for (let key in obj){
    console.log(key,obj[key]);
    
}
//write a code to print all the properties in laptop
for(let key in obj.address){
    console.log(key, obj.address[key]);
    
}

//function-It is a group of code. it is used for code reuse purpose.
//If you have to create function mean 2 things you do.1.Defining the function 2.calling the function
//1.defining the function
function greeting(){
    console.log("Good Morninng Guys");
    
}
//2.calling the function
greeting();

//create a function for "hello guys" by using return statement
function greet() {
    return "Hello guys"
    
}
let str = greet();
console.log(str);

//create a in hello name_of_candidate, passing the parameters
function nam(name123){
    return `Hello ${name123}`
}
// let name123 = 'Siva'
console.log(nam('sai'));

//create a function for addition
function add(number1,number2) {
    let addition = number1 +number2;
    return `Addition of ${number1} and ${number2} is ${addition}`
}
console.log(add(8,9));

//function expression
let sub12 = function (num1,num2){
    return num1 -num2
}
let sub123= sub12;
console.log(sub12(9,5));
console.log(sub123);

//FUNCTION EXPRESSION
let Mult = function(num1,num2){
    return num1*num2;
}
console.log(Mult(10,5));

//global variable - variable that can be created outside the function is called global variable
//local variable - The variable that can be created inside  the function is called local variable.

function adds(num1,num2,num3=6){ //num3 value is assigned to default cases.
    let asdf = 16; //local variable
    console.log(asdf);
    return num1+num2+num3;
}
let result123 = adds(5,6); //global variable
console.log(result123);

//Arrow function
let func =(num1,num2) => num1+num2;

let result1234 = func(5,6)
console.log(result1234);

//even number through arrow function
let eve = (num1)=> {
    if (num1%2===0) {
        console.log("Even");
        
    }
    else{
        console.log("Odd");
        
    }
} ;
eve(10);

//Method - The function can be created in side the object is called method.
let computer={
    core : 'i5',
    ram : '8gb',
    ssd: '512gb',
    cost : 52000,
    greet :() => console.log("Hello, good morning!"),
        
    
}
computer.greet();
//using this keyword
let laptop = {
    ram :'4gb',
    storage :'2tb',
    cpu : 'i9',
    gre: function(){
        console.log(this.cpu)
        console.log(this .ram);
        
    }
}
laptop.gre()

//what the reason using the this keyword
// function whichisbest(laptop1, laptop2){
//     if(laptop1.cpu > laptop2.cpu)
//         console.log(laptop1);
//     else
//         console.log(laptop2);
           
// }


let laptop1 = {
    ram :'4gb',
    cpu :'i9',
    storage : '512gb',
    compare : function(other){
        if(this.cpu > other.cpu)
            console.log(this);
        else
            console.log(other);
            
            
    },
    greet: function(){
        console.log(this.cpu);
        
    }
    
}
let laptop2= {
    ram : '8gb',
    cpu : 'i7',
    storage : '512gb',
    greet: function(){
        console.log(this.cpu);
        
    }
}

// whichisbest(laptop1,laptop2);
laptop1.compare(laptop2);

//create a constructor
//construtor is knothing but create  a obj i different way

function Siva(name,age){
    this.name = name;
    this.age = age;
    this.dfg = function(){
        console.log("Hello Guys");
        
    }
}

let allien = new Siva('Naveen',45);
let allien1 = new Siva('Manoj',15);
allien1.name = 'Sunil';
console.log(allien1);

console.log(allien);
allien.dfg();

//array - The collection of data in similar datatype is called array.
//creation of array - 2 types
//1.let arr = new Array();
//2.let arr = [];

let arr = [5,6,7];
//adding the elements in array name arr
arr.push(10,20);
//print the total array
console.log(arr);
//fetching the 3nd value from left
console.log(arr[2]);
//fetching the 1st value from the left
console.log(arr[0]);

