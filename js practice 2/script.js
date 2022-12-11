// function validate(){
//     var email = document.getElementById("email").value;
//     alert(email);
//     var password=document.getElementById("Password").value;

// }

// var arr = [7,5,9,1];
// var value = Math.max.apply(null, arr);
// console.log(value);

// var myObject = {
//     foo : "bar",
//     func : function(){
//         var self = this;
//         console.log("outer func: this.foo =" + this.foo);
//         console.log("outer func: self.foo =" + self.foo);
//         (function(){
//             console.log("inner func: this.foo =" + this.foo);
//             console.log("inner func: self.foo =" + self.foo);
//         }())
//     }
// };
// myObject.func();

// var x = 0 ;
// do{
//     console.log(x)
// } while (x>0)

// function info(){
//     var a =1;
//     var b=2;
//     return a*b;
// }
// console.log(info());

// const fruits = ["Banana","Orange","Apple","Mango"];
// let text = fruits.toString();
// console.log(text);

// const numbers = [50,100,125];
// function addAll(total, num){
//     return total + num;
// }
// console.log(numbers.reduce(addAll));


// var numbers = [1,2,3,4,5];
// const multiplyNums = numbers.map((number)=>{
//     return (number*5);
// })
// console.log(multiplyNums);

// [1,2,3,4].reduce((x,y)=>console.log(x,y));


(function (){
    try{
        throw new Error();
    }
    catch(x){
        var x=1, y=2;
        console.log(x);
    }
    console.log(x);
    console.log(y);
})();







