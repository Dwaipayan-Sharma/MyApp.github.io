//alert("I love momos");
////This is a comment

/*

This is a multi-line comment


*/



//var x = 420;
//var firstName = "Rudra"
//var lastName = " Sharma"
//var myCoolVariable 
//var online = true;
//x = x + 1;
//var fullName = firstName +" "+ lastName

//console.log("The value of X is " + x);
//console.log("Your name is",firstName,lastName)
//console.log("Are you online?",online)
//console.log("Hello",fullName)
//var friends = 10;
//friends += 1;
//console.log(friends)
//friends /= 2;
//console.log(friends)
//var remainingFriends = friends % 3;//it gives remainder
//console.log(remainingFriends)
//friends %= 3
//console.log(friends)
//friends **= 12; //double asterisk means raising powers
//console.log(friends)
/* 
  operator precendence
  1. parenthesis
  2. exponents
  3. multiply and divide
  4. addition and substraction*/
 //friends = (10+2)/2
 //console.log(friends)


//var myName = window.prompt("What is your name? ")
//console.log("Hello "+myName)
//document.getElementById("myButton").onclick = function(){
//	var myName = document.getElementById("myText").value;
//	console.log("Hello",myName)
//}

//var age;
//age = window.prompt("Enter your age: ");
//age = Number(age)
//age = String(age)
//console.log(typeof age)
//console.log("Happy Birthday")
//age = Number(age);
//console.log(typeof age)
//var new_age;
//new_age = age + 1
//console.log("You are now"+" "+new_age+" years old");
//function sayHello(myName, myAge){  //parameters
//	console.log("Hello",myName)
//	console.log("Have a nice day!")
//	console.log("Goodbye!")
//	console.log("You are",myAge,"years old")
//	return 
//};

//var myName = "Rudra"

//sayHello("Rudra",18); //arguements

//function toCelsius(f){
//	return (f-32)*(5/9)

//}
 //var cel = toCelsius(100);
 //console.log("My temp in C is",cel,"degrees")

 //object = a container for methods/properties

 //var human = {
 //	name : "Rudra",
 //	age : 18,

 //	learn : function(){
 //		console.log("Rudra is learning JavaScript")
 /*	},
 	eat : function(){
 		console.log("Rudra is eating food")
     
  	}
};

human.name  //dot notation
human['name']  //bracket notation
console.log(human.name);
console.log(human.age);
human.eat();
human.learn();
*/

//array = a special variable,
//       that can hold more than one value

//       Eqach space is known as element
//       You can access elements in an array by referring
//       to the index number ex .[0]

/*var cars = ["Mustang","Mercedes","Yamaha"];
//console.log(cars)
console.log(cars[0]);
console.log(cars[1]);
cars.push('Tesla');
cars.pop();

var numberOfCars = cars.length
//cars = cars.sort();
//cars = cars.reverse();
//console.log(cars)
var lastCar = cars[cars.length - 1]
console.log(lastCar);
console.log(numberOfCars); */


/*document.getElementById("2").onclick = function(){
 var myName = document.getElementById("1").value
 alert("you are a piece of shit! " + myName)
}*/


//if statements = basic form of decision making

/*var age = 12;
if(age>=65){
  console.log("You are an senior")

}
else if(age >= 18){
  console.log("you are a adult!")
}
else{
  console.log("You are a child")
}
var online = true;
if (online == true){
  console.log("You are online:)")
}
else{
  console.log("You are offline:(")
}*/

//switch = statement that evaluates a value/expression
//effcicent than more elseif statements
/*var grade 
grade = window.prompt("What grade did you get son?: ").toUpperCase();

switch (grade){
  case "A":
  alert("You did great");
  break;

  case "B":
  alert("You did good!");
  break;
   
  case "C":
  alert("You did okay.");
  break;

  case "D":
  alert("You... did not do that well.");
  break;

  case "F":
  alert("You FAILED. Basically you just fucked up:(")
  break;

  default:
  alert(grade+" is not a letter grade!Baap se bakchodi na kar")
}*/
//logical operators
//&& and(checks if both conditions are true)
//|| (checks if at least 1 condition is true)
// ! not is a reverse boolean operator

/*var temp = -10;

if(temp>30){
  console.log("It's hot outside");
}
else if(temp>=0 && temp<=30){
  console.log("Its's warm outside")
}
else{console.log("It's cold outside")}

var hour = 20;
if(hour < 6 || hour>= 20){
  console.log("It's dark outside")
}
else{console.log("It's light outside")}
var myName = window.prompt("Enter your name")
if(!(myName == "")){
  console.log("Hello",myName)
}
else{console.log("You did not enter your name.")}*/

//while loops
/*var creditNum = window.prompt("Your computer has a virus!Enter your credit card number to get rid of it")
while(creditNum == ""){
  creditNum = window.prompt("Your computer has a virus!Enter your credit card number to get rid of it")


}
alert("Thank you! Your computer no longer has a virus")*/

/*do{
  var creditNum = window.prompt("Your computer has a virus")

  }while(creditNum == "");
  console.log("Thank You! Your computer no longer has a virus")*/
//for loop
//for(declare index; condition; step)  
/*for(let i = 0; i<10 ; i+=1){
  console.log(i);
}*/

/*for(let i = 10;i>0; i-=1){
  console.log(i);
}
console.log("Happy New Year!")*/
/*let letters = ["H","E","L","L","O"]
for(let i in letters){
  console.log(letters[i])
}*/

//nested loops

/*var symbol = window.prompt("Enter a symbol to use: ")

var rows = window.prompt("Enter # of rows: ")

var coloums = window.prompt("Enter # of columns : ")
for(let i = 0; i<rows;i+=1){
  for(let j = 0;j<coloums;j+=1){
    document.getElementById("myrectangle").innerHTML += symbol
  }
  document.getElementById("myrectangle").innerHTML += "<br>"

}*/
//math

var myNum;
//myNum = Math.round(3.5)
//myNum = Math.floor(3.9)
//myNum = Math.ceil(3.9)
//myNum = Math.pow(3,6)
//myNum = Math.abs(-3)
//myNum = Math.sqrt(100)
//myNum = Math.min(1,23,41,44,23,64,23)
//myNum = Math.max(13,23,41,44,23,64,23)
//myNum = Math.PI;
//myNum = Math.E;

//console.log(myNum)
//solve for the hypotenuse of a right triangle

/*a = window.prompt("Enter the altitude length: ")
a = Number(a)
b = window.prompt("Enter the base length: ")
b = Number(b)

c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2))

alert("The hypotenuse length of this right triangle is: " + c)
*/

// pseudo Random numbers
//var randnum;
//randnum = Math.random()
//randnum = Math.ceil(Math.random() * 6);
//function getRandomNum(min,max){
//  return Math.floor(Math.random()* (max-min +1) + min)
//}
//randnum = getRandomNum(1,6);
//console.log(randnum);

//date object = represents moment in time since epoch(reference point)
//date = new Date(0);
//date = new Date();
//date = new Date(2022, 6 , 15 , 8, 55 , 2 ,4)
//date = new Date("April 20, 2022 16:08:12");
/*let year = date.getFullYear();
let month = date.getMonth();
let dayofmonth = date.getDay();
let hours = date.getHours();
let seconds = date.getSeconds();
//console.log(hours)



console.log(date);*/
/*let date;
date = new Date();
date.setFullYear(2021);
date.setMonth(7);
date.setDate(16);
date.setHours(7);
date.setMinutes(44);
date.setSeconds(0);

console.log(date);*/

//useful string properties and methods

/*var myName = "Rudra The Sharma";
var friendFirstName = "Mukto";
var friendLastName = "Roy";
var myPhone = "936-55-86-935"







console.log(myName.length);
console.log(myName.charAt(11));
console.log(myName.indexOf(" "));
console.log(myName.lastIndexOf("r"))
console.log(myName.trim());
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());
var firstName;
firstName = myName.slice(0,myName.indexOf(" "));
console.log(firstName);
var middleName;
middleName = myName.slice(myName.indexOf(" "),myName.lastIndexOf(" "))
console.log(middleName.trim());
var lastName;
lastName = myName.slice(myName.lastIndexOf(" "), );
console.log(lastName.trim());

var friendFullName = friendFirstName.concat(" ",friendLastName);
console.log(friendFullName);
myPhoneWithoutDashes = console.log(myPhone.replaceAll("-",""));
*/
//method chaining

//let user = "rudra";
//let firstLetter = user.charAt(0);
//firstLetter = firstLetter.toUpperCase();
//user =firstLetter + user.slice(1)
//console.log(user);

//user = user.charAt(0).toUpperCase() + user.slice(1);
//console.log(user);
//break = used to exit out of loop
//continue = skips over an iteration of a loop

/*for(let i =1;i<=20; i+=1){

  if(i == 13){
    break;
  }
  console.log(i)
}*/
/*for(i = 1; i<=20;i+=1){
  if(i == 13){
      continue;
  }
  console.log(i)
}


*/
//scope = where a variable is accessible
//let = declares a variable with a block scoped{}
//var = declare variable with a function scope()

/*for(let i = 1;i<=3; i+=1){
  console.log(i);
}
console.log(i)  //since scope of let is only in a function*/

//for(var i =1;i<=3;i+=1){
  //console.log(i)
//}

//console.log(i);

//use let instead of var coz it overrides some important things

//forEach() = Performs a function for each element in an array

/*let total = 0;
let cart = [5,6,7,8,9];

function checkOut(element){
  total += element;
}

cart.forEach(checkOut);
console.log("Your total is $" + total)*/

//map()= performs a function for eacgh in an array,then stores
         //the returned value in an new array

/*let storeUSD = [5,6,7,8,9];

function toEuros(value){
  value *= 0.85;
  return value;
}
let storeEUR = storeUSD.map(toEuros);
console.log(storeEUR);*/

//filter() = Returns the elements of an array
//that meeets a condition specifies in a function

/*let students = [16,17,18,19,20];

function checkAge(age){

  if(age>=18){
    return age;
  }
}
let adultStudents = students.filter(checkAge);

console.log(adultStudents);*/

//reduce = Reduces an array to a single value. The value of callback
//function is the accumulated result, and is provided as an argument
//in the next call to the callback function

/*let letters = ["H","E","L","L","O"];

function combineLetters(total,nextLetter){
  return total + nextLetter
}
let word = letters.reduce(combineLetters);
console.log(word)*/

//callback = function passed as an argument to another function.
//allows a function to invoke another function

/*let message;

function displayConsole(output){
  console.log(output);
}

function displayDOM(output){
  document.getElementById("myH1").innerHTML = output
}

function setMessage(text,callBack){
  message = text;
  callBack(message);
}
setMessage("Hi Mom!", displayConsole);*/

//function expressions = A function can also be defined using
//an expression can be stored in a variable.
/*
function sayHello(){
  console.log("Hello")
}
sayHello();
*/
//function expression

//let greeting = function(){console.log("Hello")}



/*let greeting = "Hello"

outputWebsite(greeting);

function outputConsole(x){
  console.log(x)
}

function outputWebsite(y){
  document.getElementById("myH1").innerHTML = y
}
*/

 //nested functions = Functions inside other functions.
 //Outer functions have access to inner function
 //Inner functions are hidden from ouside the scope
// used in closure


/*function login(){
  let userName = "Rudra"
  let userInbox = 0
  function displayUserName() {
    console.log("Hello",userName);
  


  function displayUserInbox(){
    console.log("You have",userInbox,"new messages")
  }
   displayUserName();
   displayUserInbox();
}

login()

*/

//anonymous function = function w/o a name
//not accesible after its initial creation
//usual once and can be passed as arguements

//declared functions = "saved for last"  

/*(function(){
  document.getElementById("myH1").innerHTML = "hey!"
})();

//setTimeout(function,milliseconds);

let task = function(){
  document.getElementById("myH1").innerHTML = "sup?"
}

setTimeout(task,1000)*/

//closure = A function with preserved data.
// gives u a access to an outer function's scope,
// from an inner function



/*let score = function(){

  let points = 0;

  return function(){
  return points += 1;  
  }
  
}();


console.log(score());
console.log(score())*/

//closure example with arguements.


/*function makeSize(size){


  return function(){
    document.body.style.fontSize = size + "px"
  }
}

function makeFont(font){


  return function(){
    document.body.style.fontFamily = font;
  }
}
let size20 = makeSize(20);
let size30 = makeSize(30);
let fontInkFree = makeFont("Ink Free")
fontInkFree();
size20();
size30();*/
/*let name;
name = window.prompt("Enter your name")
while(name == ""){
   name =  window.prompt("Enter your name: ")
}
name = name.slice(0,1).toUpperCase() + name.slice(1,).toLowerCase();
let output = "Hello "+name+", Welcome to my website"
document.getElementById("myH1").innerHTML = output
*/
/*document.getElementById("myButton").onclick = function(){
  x = document.getElementById("myText").value;
  x = x.slice(0,1).toUpperCase() + x.slice(1,).toLowerCase();
  document.getElementById("myH2").innerHTML = "Hello "+x+", Welcome to my Website:)"
  // body...
}
*/
/*let name = window.prompt("Enter your name: ");
(function(){
  document.getElementById("myH1").innerHTML = "Hey "+name;
})();


task = function(){
   document.getElementById("myH1").innerHTML = "What is up?"
}

setTimeout(task,2000)*/

//arrow function=>
//shoe=rtcut for a function expression

/*let hello;
let x = "Yo"
let y = "Bro"

//function expression

hello = function(x){
  return x +y+  " World";
}
console.log(hello(x));
//arrow function

hello = (x,y) => {
  console.log(x)
  console.log(y)                    
};
hello(x,y)*/


/*  let storeUSD = [5,6,7,8,9];
  let storeEUR;

  storeEUR = storeUSD.map(value => value *= 0.85);
  console.log(storeEUR);

  let students = [16,17,18,19,20];
  let adultStudents;

  adultStudents = students.filter(value => value>=18)
  console.log(adultStudents)


let letters = ["H","E","L","L","O"];
let word;

word = letters.reduce((total, nextLetter)=>total + nextLetter)
console.log(word);*/

// let numbers = [3,14,1,2,5];
/*numbers.sort(function(x,y){
  return x - y;
});
console.log(numbers)
*/
//numbers.sort((x,y)=>y-x);
// console.log(numbers);

//class = A blueprint for creating objects. 
//Define properties and/or methods.


/*class Car{

  drive(){
    console.log("You drive the car.")

  }

  brake(){
    console.log("You step on the brakes")
  }
}

let car =  new Car();

car.drive();
car.brake();
*/
//constructor = A special method for assigning properties.
               //Automatically called when creating a object

/*class Car{

  constructor(make,model,year,color){
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;

  }

  drive(){
    console.log("You drive the car.")
  }
  brake(){
    console.log("You step on the brakes.")
  }


}

let car1 = new Car("Yamaha","X-Series",2021,"black")
let car2 = new Car("Bullett","Royal Enfield",2022,"white")

console.log(car1.make);
console.log(car2.color)
console.log(car2.year);*/


//this = A reference to the object at we're currently working with

/*class Car{

  constructor(make,model,year,color){
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;

  }

  drive(){
    console.log("You drive the",this.model);
  }
  brake(){
    console.log("You step on the",this.model,"'s brakes!")
  }
  whatIsThis(){
    return this;
  }


}

let car1 = new Car("Yamaha","X-Series",2021,"black")
let car2 = new Car("Bullett","Royal Enfield",2022,"white")

console.log(car1.make);
console.log(car2.color)
console.log(car2.year);

car2.drive();
car1.brake();

console.log(car1.whatIsThis());
*/

//static = a method or property that belongs to a class and not any object\

/*class Car{
  static numberOfCars = 0;
  static beginRace(){
    console.log("The Race has begun");
  }

  constructor(model){
    this.model = model;
    Car.numberOfCars+=1;

  }
}
let car1 = new Car("Mustang");
let car2 = new Car("Corvette");
let car3 = new Car("Challenger")
console.log(Car.numberOfCars)


//inheritance = useful for code reusability
//children classes inherit from parent classs*/

/*class  Animal{

  constructor(){
    this.alive = true
  }
  eat(){
    console.log("This animal is eating");
  }
}
class Rabbit extends Animal{
  run(){
    console.log("This rabbit is running")
  }

}
class Fish extends Animal{
  swim(){
    console.log("This animal is swimming")
  }

}
class Hawk extends Animal{
  fly(){
    console.log("This hawk is flying")
  }

}
let rabbit = new Rabbit()
let fish = new Fish()
let hawk = new Hawk()
rabbit.alive
console.log(rabbit.alive)
rabbit.run()
fish.swim()
hawk.fly()*/


//method overriding = a child class will use methods with the same
//name that are more closely related.
/*class Vehicle{
  drive(){
    console.log("This vehicle is driving")
  }
}
class Car extends Vehicle{
  drive(){
    console.log("This car is driving.")
  }
}

class raceCar extends Vehicle{
  drive(){
    console.log("This RaceCar is driving!!")
  }
}

let car1 = new Car()
car1.drive()
let car2 = new raceCar()
car2.drive()*/

//super = Reference to the parent class(super class)
//very similar to the this keyword
/*class Person{
  constructor(name,age){
    this.name = name; 
    this.age = age;
  }

}

class Student extends Person{
  constructor(name,age,gpa){
    super(name,age);
    this.gpa = gpa;
 

    };
    a_student(){
      console.log(this.name + " is a good student")
    }
    
  }


class Teacher extends Person{
  constructor(name,age,classSize){
    super(name,age);
    this.classSize = classSize;
  }
}

let student1 = new Student("Rudra",18,10);
let teacher1 = new Teacher("Bob",45,100)
student1.a_student()
console.log(teacher1.name);
console.log(teacher1.classSize);*/

//objects as arguements

/*class Car{

  constructor(model,color){
    this.model = model;
    this.color = color;
  }
}
function changeColor(car,newColor){
  car.color = newColor

}
let car1 = new Car("Corvette","black");
let car2 = new Car("Mustang","white");
changeColor(car1, "blue")
changeColor(car2,"green")
console.log(car1.model,car1.color);
console.log(car2.model,car2.color);
*/

//array of objects

/*class Car{
  constructor(model,color){
    this.model = model
    this.color = color
  }
  drive(){
    console.log("You drive the",this.model);
  }
}
let garage = [];

let car1 = new Car("Corvette","blue");
let car2 = new Car("Mustang", "red");
let car3 = new Car("Limbo","yellow");

garage = [car1,car2,car3];
for(let i = 0; i<garage.length; i+=1){
  //console.log(garage[i].color)
  garage[i].drive()
}*/

//array of function


/*function jump(){
  console.log("You Jump")
}

function punch(){
  console.log("You punch")
}

function kick(){
  console.log("You kick")
}

function block(){
  console.log("You block")

}
let actions  [];
actions = [jump,punch,kick,block]

//actions.forEach(func=>func())
//for(let i = 0;i<actions.length;i+=1){
  //actions[i]();
//}
*/


//Why use getters and setters?

// a way to get/set the properties of an object
// secures better data quality
// does extra things behind the scenes

/*let user = {

  firstName: "",
  lastName : "",
  set first(value){
    this.firstName = value.toUpperCase();
  },
  set last(value){
    this.lastName = value.toUpperCase();
  },
  get fullname(){
    return this.firstName+" "+this.lastName;
  }
};


user.firstName = "Rudra"
user.lastName = "Sharma"
console.log(user.fullname())
*/

//template literals = another way of formatting output,
//can control placeholders for formatting and inserting;
//strings/value/varaibles/etc.


/*
let firstName = "Rudra";
let lastName = "Sharma";
let price =10;
let taxRate = 0.05;
let total;
//console.log("Hello "+firstName+" "+lastName);

console.log(`Hello ${firstName} ${lastName}!`);
console.log(`The price is: ${price}`);
console.log(`taxRate: ${taxRate}`);
console.log(`tax is: $${price*taxRate}`);
console.log(`Total is:$${total = price+(price*taxRate)}`)
*/
/*
let firstName = "rUdrA";
let lastName = "Sharma";
console.log(`Hello ${firstName.slice(0,1).toUpperCase()}${firstName.slice(1,).toLowerCase()}`)
*/
//create HTML elements

/*const h1 = document.createElement("h1");
const underline = document.createElement("u")
underline.innerText = "Hello World";
h1.append(underline)
document.body.append(h1)



const h2 = document.createElement("h2");
const italic = document.createElement("i");
italic.innerText = "Sup?";
h2.append(italic);
document.body.append(h2)

const p = document.createElement("p");
const bold = document.createElement("b");
bold.innerText = "Bye...";
p.append(bold);
document.body.append(p);
*/

//modify HTML elements
//document .querySelector() (newer,powerful)

/*document.querySelector("#myButton").onclick = function(){
  const h1 = document.querySelector("#myH1");
  const underline = document.createElement("u");
  underline.innerText = "Bye World!"
  h1.innerText = "";
  h1.append(underline);


  const p = document.querySelectorAll(".myP"); //behaves like arrays
  //p[0].innerText = "WHOAAAAAAAA!"
  p.forEach(elements => elements.innerText = "Whoa!");

  const button = document.querySelector("button");
  button.remove();
}
*/

//add/change CSS Properties

/*document.querySelector("#myButton").onclick = function(){
  const h1 = document.querySelector("#myH1");
  console.log(h1.style);

  h1.style.color ="blue"
  h1.style.backgroundColor = "black";
  h1.style.font.fontSize = "consolas";
  h1.style.border = "4px solid";
  h1.style.borderColor = "blue";
}*/

//Mouse Events
//element.addEventListener(type,function);



/*const div = document.querySelector("#myDiv");

div.style.backgroundColor = "grey";
div.style.width = "100px";
div.style.height = "100px";
div.style.align = "center"

div.addEventListener("mousedown",e =>{
  console.log("You are holding the mouse down!");
  div.style.backgroundColor = "black";
})
div.addEventListener("mouseup",e => {
  console.log("You let go of the mouse!");
  div.style.backgroundColor = "grey";

})
div.addEventListener("dblclick",e => {
  console.log("You double-clicked the mouse!");
  div.style.backgroundColor = "blue";

})
div.addEventListener("contextmenu",e => {
  console.log("You opened the context menu!");
  div.style.backgroundColor = "white";

})
div.addEventListener("mouseover",e => {
  console.log("You entered Area 51!");
  div.style.backgroundColor = "red";

})
div.addEventListener("mouseleave",e => {
  console.log("You left Area 51!");
  div.style.backgroundColor = "green";


})
*/

document.querySelector("#plus").onclick = function(){
  document.querySelector("#h1").innerHTML = "Sum: " + String(Number(document.querySelector("#one").value) + Number(document.querySelector("#two").value));

}

document.querySelector("#substract").onclick = function(){
  document.querySelector("#h1").innerHTML = "Sub: "+ String(Number(document.querySelector("#one").value) - Number(document.querySelector("#two").value));

}

document.querySelector("#multiply").onclick = function(){
  document.querySelector("#h1").innerHTML ="Product: "+ Number(document.querySelector("#one").value) * Number(document.querySelector("#two").value);

}

document.querySelector("#divide").onclick = function(){
  document.querySelector("#h1").innerHTML = "Quiotent: "+Number(document.querySelector("#one").value) / Number(document.querySelector("#two").value);

}











































