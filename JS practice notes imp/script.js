// Conditional Redering
// function change() {
//     var age = +prompt("what is your age ?")
//     if(age >= 18){
//         document.getElementById("button").innerText = "you can watch this movie";
//         // alert("you can watch this movie")
//     } else {
//         document.getElementById("button").innerText = "you can not watch this movie";
//         // alert("you can watch this movie")
// }
// }

//simple calculator

// function add(){
//     var num1 = prompt("enter first num");
//     num1 = +num1;

//     var num2 = prompt("enter second num");
//     num2 = +num2;

//     var result = num1 + num2 ;
//     alert(result);
// }

//mentor session
// function getOrders(order, waitingForNextOrder){

//    setTimeout(
    
//     () => {
    
//     console.log(order)
    
//     waitingForNextOrder();
    
//     }, 1000
    
//     )
    
//     }
    
//     function getOrders(){
    
//     order(“Biryani”,()=>{
    
//     order(“Noodles”,()=>{
    
//     order(“Rice”,()=>{});
    
//     })
    
//     })
    
//     }
    
//     getOrders()
    
// const cars = ['audi', 'bmw', 'nexon', 'ford', 'suzuki'];
// cars[5] = ['ferrari']
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("demo").innerHTML = fruits.toString();

  //normal function
// function result(a, b){
//     return a+b;
// }
// let ans=result(3,8);
// console.log(ans);

// let ans = (6,55)=>a+b;


  
  // Arrow function
//   let ans = (a, b) => a + b;
  
//   console.log(ans(33,37));

//================================================*****==============================================
   //=====IMPORTANT=====

// primitive data types are immutable  ::- int, string, boolean, null, undefined, symbol
// non primitive or reference type are mutable ::- arrays, objects, function

// var num1 = 3;                            there are two types of memmory 1. stack memory = premitive types are stored in stack
// var num2 = num1;                                                        2. heap memory = non-premitive types are stored in heap
// num1++;
// console.log(num1,num2); output:- 4, 3 ====beacuse it is store in stack memory

// let arr1 =["ajay", "vijay", "sujay"];
// let arr2 = arr1;
// arr1.push("jagan");
// console.log(arr1);     ["ajay", "vijay", "sujay", "jagan"]
// console.log(arr2);     ["ajay", "vijay", "sujay", "jagan"]

   //ARRAY PROPERTIES
// var num = [1,2,3,4,5];
// num.push(9);         add at last index
// num.unshift(3);      add at first position
// num.pop();           removes last index
// num.shift();         removes first index
// console.log(num);    output::::::==== [ 1, 2, 3, 4, 5 ]
