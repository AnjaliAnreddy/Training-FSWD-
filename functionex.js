//! without parameters and arguments
// function demo(){  //! function declaration
//     console.log("Hello  i am function demo()");
// }
// demo();//! function calling
// demo();
// demo();
// demo();
// demo();
// demo();
// demo();
// demo();
// demo();
// demo();



//! with parameters and arguments
// function add1(a,b){
//     // console.log(a);
//     // console.log(b);
//     console.log(a+b);
// }
// add1(5,6);
// add1(7,8);
// add1(3,4);
// add1(5,6);
// add1(10,30);


// function addToCart(){
//     document.body.style.background="teal";
//     alert("Product is added to cart successfully")
// }


// function isPalindrome(str)
// {
//     let revStr = "";
//     for(let i = str.length-1;i>=0;i--){
//         //console.log(str[i]);
//         revStr += str[i];
//     }
//     //console.log(revStr);
//     if(str == revStr){
//         console.log("Palindrome");
//     }else{
//         console.log("Not a palindrome");
//     }
// }

// isPalindrome("sir");
// isPalindrome("madam");
// isPalindrome("malayalam");

// function onemoretime(){
//     console.log("not understood tell me one more time");
// }
// onemoretime()

// ! anonymus function
// function(){
//     console.log("Anonymus function");
// }
// ();

// ! function expression
// let x =function(){
//     console.log("function expression");
// };
// // console.log(x);
// x();
// x();
// x();

// !IIFE
// (
//     function(){
//         console.log("IIFE");
//     }
// )()();

// ! arrow function
// function demo(){
//     console.log("Hello");
// }
// demo();

// let x = _ =>console.log("Hello");
// x();

// let x = a =>console.log(a);
// x(10);

// let x = (a,b) =>console.log(a+b);
// x(10,5);

// let x =_ =>{ console.log("Hi");
//             console.log("Bye");
//             console.log("OKK");}
// x();

// ! return - implicit return , explicit return

// function add(a,b){
//     console.log("I am printing before return keyword");
//     return a+b;  //! explicit return
//     console.log("I am printing after return keyword");
// }
// let x = add(5,5);
// console.log(x);

let x = (a, b) => a + b; //! implicit return
console.log(x(10, 30));

let y = (a, b) => { return a + b; }//! explicit return
console.log(y(3, 3));