let screen = document.querySelector("input.scrn");
let buttons = document.querySelectorAll("button.btn");

let result = "";
for(let item of buttons){
    item.addEventListener('click', (e) =>{
        let buttonText = e.target.innerText;
        console.log(buttonText);
        if(buttonText == 'C'){
            result = "";
            screen.value = result;
        }
        else if(buttonText == '='){
            screen.value = eval(result)
        }
        else{
            result += buttonText;
            screen.value = result;
        }
    })
}























// (function (){
//     let screen = document.querySelector('.screen');
//     let buttons = document.querySelectorAll('.btn');
//     let clear = document.querySelector('.btn-clear');
//     let equal = document.querySelector('.btn-equal');

//     buttons.forEach(function(button){
//         button.addEventListener('click', function(e){
//             let val = e.target.dataset.num;
//             screen.value += val;
//         })
//     });

//     equal.addEventListener('click', function(e){
//         if(screen.value === ''){
//             screen.innerText = "please enter";
//         }else{
//             let answer = eval(screen.value);
//             screen.innerText = answer;
//         }
//     })
//     clear.addEventListener('click', function(e){
//         screen.value = "";
//     })
// })();

