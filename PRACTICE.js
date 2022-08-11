
// document.getElementById("Calculator").addEventListener("click", abc);
// document.getElementById("Calculator").addEventListener("click",function(){
// this.style.border= "10px solid red";
// });

// function abc(){
//     document.getElementById("equal").style.background="green";
// }

// document.getElementById("calculate").addEventListener("click", function() {

//     document.getElementById("result").innerHTML = "Result: ";
//     var num1 = parseInt(document.getElementById("num1").value);
//     var num2 = parseInt(document.getElementById("num2").value);
//     var op = document.getElementById("op").value;
//     console.log(num1, num2);
//     document.getElementById("result").innerHTML += calculate(num1, num2, op)
//    })

//    function calculate(num1, num2, op) {

//     switch (op) {
//      case '+':
//       return num1 + num2

//      case '-':
//       return num1 - num2

//      case '*':
//       return num1 * num2

//      case '/':
//       return num1 / num2

//      case '%':
//       return num1 % num2
//     }
//    }

// // Query Selector
//    var element;
//    element= document.querySelector("#calculate").innerHTML;
//    console.log(element);

//    //Create Element 
//    var newelement;
// newelement=document.createElement('h2');
// console.log(newelement);

// //Create Text Node
// var text;
// text =document.createTextNode("this is new text here");
// console.log(text);

// //appendchild

// newelement.appendChild(text);
// document.getElementById("container").appendChild(newelement);
// console.log(newelement);

// //InsertBefore

// var target=document.getElementById("container");
// target.insertBefore(newelement,target.childNodes[2])







































// const formEl = document.querySelector("form");
// const tbodyEl = document.querySelector('tbody');
// const tableEl = document.querySelector('table');

// function onAddWebsite(e) {
//     e.preventDefault();

//     firstname = document.getElementById("firstname").value;
//     lastname = document.getElementById("lastname").value;
//     Education = document.getElementById("Education").value;
//     Skills = document.getElementById("Skills").value;
//     Organization = document.getElementById("Organization").value;
//     tbodyEl.innerHTML += `
// <tr>
// <td>${firstname}</td>
//     <td>${lastname}</td>
//      <td>${Education}</td>
//     <td>${Skills}</td>
//    <td>${Organization}</td>

//     <td><button class="deleteBtn">Delete</button></td>
// </tr>
// `;
// }

// function onDeleteRow(e) {
//     if (confirm('Are you sure want to delete this record?')) {
//         if (!e.target.classList.contains("deleteBtn")) {
//             return;
//         }

//         const btn = e.target
//         btn.closest("tr").remove();
//     }
// }
// formEl.addEventListener("submit", onAddWebsite);
// tableEl.addEventListener('click', onDeleteRow);

var element;
element = document.querySelector("#container").style.backgroundColor = "tan";
element = document.querySelector("#container").style.color = "green";
console.log(element);

//Create Element
var newElement = document.createElement("p");
console.log(newElement);

//Create TextNode
var newText = document.createTextNode("This is a Web Page");
console.log(newText);

//Create Comment
var comment = document.createComment("this is a comment");
console.log(comment);


//Append Child
newElement.appendChild(newText);
document.getElementById("test").appendChild(newElement);
// var target =document.getElementById("test");
// target.insertBefore(newElement,target.childNodes[2]);

console.log(newElement);
//console.log(newText);

newElement.appendChild(newText);
var index = document.getElementById("test");
index.insertBefore(newElement, index.childNodes[0]);


document.getElementById("inner").parentElement.style.backgroundColor = "green";
var inner = document.getElementById("inner").parentElement;
console.log(inner);


document.getElementById("outer").parentElement.style.backgroundColor = "tomato";
var outer = document.getElementById("outer").parentElement;
console.log(outer);


document.getElementById("child-C").parentElement.style.backgroundColor = "Cyan";
var C = document.getElementById("child-C").parentElement;
console.log(C);




var ary = new Array(3);
for (var b = 0; b < 3; b++) {

    //ary[b]=prompt("Enter the value:");
}
// var ary=[10,20,30,40,50]
// var sum=0;
document.write("<ul>");
for (var a = 0; a < 5; a++) {
    document.write("<li>" + ary[a] + "</li>")
    //  sum =sum +ary[a];
}
document.write("</ul>");
//document.write("total sum:" + sum);




var arr = [
    ["ali", 14, "true", "b.com"],
    ["umer", 14, "true", "ba"],
    ["wert", 14, "true", "bca"],
    ["wsedrft", 14, "true", "sdfg"],
    ["zxcvb", 14, "true", "dfg"],
    ["qwerty", 14, "true", "sdfg"]
];
document.write(arr.length + "<br>");


for (var c = 0; c < arr.length; c++) {
    for (var d = 0; d < 4; d++) {
        document.write(arr[c][d] + " ");

    }
    document.write("<br>");
}


var a = ["samar", "umer", "ali"];
document.write(a + "<br>");

var b = ["samar", "umer", "ali"];
b.sort();
document.write(b + "<br>");

var c = ["samar", "umer", "ali"];
c.reverse();
document.write(c + "<br>");

var d = ["samar", "umer", "ali"];
d.pop();
document.write(d + "<br>");

var e = ["samar", "umer", "ali"];
e.push("usman");
document.write(e + "<br>");

var f = ["manan", "talha", "abubakar", "hadi"]
f.shift();
document.write(f + "<br>");

var g = ["manan", "talha", "abubakar", "hadi"]
g.unshift("ahmad");
document.write(g + "<br>");

var h = ["A", "B", "C", "D", "E"];
var i = ["F", "G", "H"];
var j = h.concat(i);
document.write(j + "<br>");
var k = j.join(" ");
document.write(k + "<br>");

function hello(fname, lname) {
    document.write("Hello" + " " + fname + lname);
}
hello("usman", "ajmal" + "<br>");
hello("ahmad", "afzal" + "<br>");


function sum(x, y) {
    document.write(x, y);
}
sum("30", "40");




// Function return
function sum(math, eng, sc) {
    var l = math + eng + sc;
    return l;
}
function percentage(tt) {
    var per = tt / 300 * 100;
    // return per;
    document.write(per + "<br>");
}

var total = sum(90, 90, 90);
percentage(total);



//Global and Local Variable

function global() {
    var m = "usman";
    document.write(m + "<br>")
}
global();
//document.write(m);

// Javascript Event

function btn() {
    alert("hello World");
}



// if Else statement

var x = 100;
if (x < 90) {
    document.write("x is Greater")

}
else {
    document.write("x is Smaller" + "<br>")
}

var y = "100";
if (y === 100) {
    document.write("y is right")
}
else {
    document.write("y  is wrong" + "<br>")
}


var name = "usman";
var gender = "male";
if (name === "usman") {
    document.write("hello Mr:" + name + "<br>")
}

else {
    document.write("Hello Ms:" + name)
}


// Logical operators

var x = 14;
var y = 20;
if (!x >= 16) {
    console.log("you are right")
}

//Ternary operator

var a = 100;
var b;
b = "value is" + (a == 200 ? "true" : "false" + "<br>");
document.write(b);

// Switch Statement

var day = 0;
switch (day) {
    case 0:
        document.write("today is friday");


    case 1:
        document.write("today is sat");


    case 2:
        document.write("today is sun");



    case 3:
        document.write("today is mon");
        break;



    default:

        document.write("enter the valid day" + "<br>");
}


// While Loop

var a = 1;
document.write("<ul>")
while (a <= 20) {
    document.write("<li> Usman Ajmal </li>");
    a++;
}
document.write("</ul>")

// Nested loop

for (var a = 1; a <= 5; a++) {
    for (var b = 1; b <= a; b++) {


        document.write(b + " ");

    }
    document.write("<br>");
}

// Nested loop part 2
// 1
// 22
// 333
// 4444
// 55555

for (var a = 1; a <= 5; a++) {
    for (var b = 1; b <= a; b++) {
        document.write(a + " ");
    }
    document.write("<br>");
}

// 3)
// 55555
// 4444
// 333
// 22
// 1

for (var a = 5; a >= 1; a--) {
    for (b = 1; b <= a; b++) {
        document.write(a + " ");
    }
    document.write("<br>")
}

// 4)
// 54321
// 4321
// 321
// 21
// 1

for (var a = 5; a >= 1; a--) {
    for (b = a; b >= 1; b--) {
        document.write(b + " ");
    }
    document.write("<br>");
}


// For Each Loop
var a = ["ali", "usman", "umer"]
a.forEach(function (value, index) {

    document.write(index + " : " + value + "<br>")

});



// Objects
var a = {
    fname: "usman",
    lname: "ajmal",
    age: 23,
    city: ["lahore", "Fsd", "Isl"],
    living:{
        'city':'murree',
        'country':'pindi'
    },
    salary: function () {
        return 25000;
    },
    fullname: function () {
        return this.fname + " " + this.lname;
    }
}
document.write(a.living.city+"<br>");
document.write(a.fullname()+"<br>");
document.write(a.salary()+ "<br>");
document.write(a.city[1]+ "<br>");
console.log(a);

let myobj={
    a:this,
    func:function(number){
        console.log(this);
    }
}

myobj.func();
console.log(myobj.a);
setTimeout(()=>{
    console.log("yayyy");
},3000);
console.log("print the below script");

// Create Object 

var person = new Object();
person.firstname='usman';
person.lastname='ajmal';
person.age='23';
console.log(person);
document.write(person+"<br>");


// Map Method

var ary=[

{fname:'usman',lname: 'ajmal'},
{fname:'ali',lname: 'ahmad'},
{fname:'umer',lname: 'khan'}
];

var b = ary.map(test);
document.write(b);

function test(x){
    return x.fname,x.lname;
}



