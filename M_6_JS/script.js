"use strict";

let proccessArray = (arr, callback) => {
    let r = [];
    for(let i = 0; i < arr.length; i++)
        r[i] = callback(arr[i]);
    return r;
}
let arr = [1, 2, 3, 4];
let result = proccessArray(arr, function(arg){
    return arg * -1; 
});

document.write(result);


// let httpRequest = new XMLHttpRequest();

// let el = document.getElementById("abc");
// el.onclick = function() {
//     el.innerHTML = "This is some new content";
//     el.style.color = "red";
    
//     httpRequest.onreadystatechange = postAjaxFunction;
//     httpRequest.open('POST', 'update_database.php');
//     httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//     httpRequest.send('email=anuj@internshala.com&id=4');
// }


// function postAjaxFunction() {
//     if (httpRequest.readyState === XMLHttpRequest.DONE) {
//         if (httpRequest.status === 200) {
//             var response = JSON.parse(httpRequest.responseText);
//             alert(response.name + " - " + response.message);
//         } else {
//             alert('Something went wrong.');
//         }
//     }
// }

    // let el = document.getElementById("p1");
    // el.onclick = function(){
    //     el.innerHTML = "This is some new content";
    //     el.style.color = "red";
    // }

    // function changeContent(e){
    //     console.log(e);
    //     e.innerHTML = "This is some new content.";
    //     e.style.color = "red";
    // }



// // getting all p tags and set there color equal to red.
// let els = document.getElementsByTagName("p");
// for(let el of els){
//     el.style.color = "red";
// }

// STRING METHODS
// let str = new String("Prince Beri");
// // give the length of the string.
// document.write(str.length + "<br />");
// // give the first index of searched character from 0th index array.
// document.write(str.indexOf("i") + "<br />");
// // give the subarray from (2, 4-1). output: in
// document.write(str.slice(2, 4) + "<br />");
// // replace the first occurrence of that character from string.
// document.write(str.replace("i", "o") + "<br />");
// // return true or false if string start with given character or not.
// document.write(str.startsWith("r") + "<br />");
// // return true or false if string end with given character or not.
// document.write(str.endsWith("r") + "<br />");
// // return true or false if given character present of not.
// document.write(str.includes("c") + "<br />");



// TEMPLATE LITERALS

// let name = "Joe";
// let s = `Hello ${name}!`;
// document.write(s);



// // SPREAD OPERATOR(...)

// let odd = [1, 3, 5, 7, 9];
// let even = [2, 4, 6, 8, 10];

// let numbers = [...odd, ...even];
// numbers.forEach(function(element){
//     document.write(element + " ");
// });


// // REST PARAMETER (...)
// function calculateSum (...args){
//     let sum = 0;
//     args.forEach(function(element){
//         sum += element;
//     });

//     return sum;
// }

// let s = calculateSum(3, 5, 7, 9);
// document.write(s + " ");

// s = calculateSum (3, 5, 7, 9, 11)
// document.write(s + " ");


// // FILTER METHOD
// let numbers = [1, 2, 3, 4, 5];
// // filter return the new array 
// let even_numbers = numbers.filter(x => x * x % 2 == 0);

// even_numbers.forEach(function(element) {
//     document.write(element + " ");
// });


// // MAP Method
// let numbers = [1, 2, 3, 4, 5];
// // map return the new array 
// let square = numbers.map(x => x * x);

// square.forEach(function(element) {
//     document.write(element + " ");
// });

// FOREACH METHOD
// const arr = [2, 4, 6, 8, 10];
// arr.forEach((element) => {
//     document.write(element + " ");
// });


// let modules = new Array("HTML", "CSS", "Bootstrap", "DBMS", "PHP");
// modules.push("Javascript");


// Same as for(int n: nums){ System.out.print(n + " ")};
// its gives the value of every index.
// for(let element of modules){
//     document.write(element + " ");
// }


// FOR-IN LOOP

// let modules = ['HTML', 'CSS', 'Bootstrap', 'DBMS', 'PHP'];
// for(let element in modules){
//     document.write(modules[element] + " " );
// }

// CREATE OBJECT USING CLASS

// class Car {
//     constructor(make, model, year){
//         this.make = make;
//         this.model = model;
//         this.year = year;
//     }
//     display(){
//             document.write(this.make + this.model, this.year);
//     };
// };

// let car1 = new Car("Hyundai", "i20", 2014);
// let car2 = new Car("Honda", "city", 2005);
// let car3 = new Car("Tata", "Nano", 2012);

// for(let prop in car1){
//     document.write(prop + ":" + car1[prop] + "<br />");
// }
