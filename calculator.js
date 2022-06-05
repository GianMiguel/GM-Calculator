// let output = document.getElementsByClassName('mainOutput');
let output = document.getElementById('mainOutput');
let buttons = Array.from(document.querySelectorAll('button'));

buttons.forEach((button) => {
    button.addEventListener('click', (x) => {
        switch(x.target.innerText){
            case 'C':
                output.innerText = '';
                break;
            
            case 'DEL':
                if(output.innerText){
                    output.innerText = output.innerText.slice(0, -1);
                }
                break;

            case '=':
                try {
                    output.innerText = eval(output.innerText);
                } catch {
                    output.innerText = 'SyntaxError!';
                    return
                }
                break;

            default:
                output.innerText += x.target.innerText;
        }
    })
})



// let miniOutput = document.getElementById('miniOutput');
// let mainOutput = document.getElementById('mainOutput');
// let buttons = Array.from(document.querySelectorAll('button'));

// let result = true;
// let decimalOnce = false;

// buttons.forEach(item => {
//     item.addEventListener('click', compute);
// })

// function compute(){
//     let value = this.innerText;

//     if(value === 'C'){
//         miniOutput.innerText = '';
//         mainOutput.innerText = '';
//         return;
//     }

//     else if (value === 'DEL') {
//         mainOutput.innerText = mainOutput.innerText.slice(0, -1);
//     }

//     else if (value === '='){
//         mainOutput.innerText = eval(mainOutput.innerText);
//     }

//     else if (value === '.' && !decimalOnce){
//         if (mainOutput.innerText == '' || mainOutput.innerText[mainOutput.innerText.length - 1]){
//             mainOutput.innerText += '0.';
//             decimalOnce= true;
//         }
//     }
        

//     else {
//         mainOutput.innerText += value;
//     }
// }


// else if (value === '.' && !decimalOnce){
//     if (mainOutput.innerText == '' || mainOutputinnerTextL[mainOutput.innerText.length - 1]){
//         mainOutput.innerText += '0.';
//         decimalOnce = true;
//     } else if (mainOutput.innerText[mainOutput.innerText.length - 1] !== '.'){
//         mainOutput.innerText += '.';
//         decimalOnce = true;
//     }




// let miniOutput = document.getElementById('miniOutput');
// let mainOutput = document.getElementById('mainOutput');
// let operators = Array.from(document.getElementsByClassName('operators'));
// let numbers = Array.from(document.getElementsByClassName('number'));
// let clearButton = document.getElementById('clear');
// let deleteButton = document.getElementById('delete');
// let equalButton = document.getElementById('equal');

// let result = true;
// let decimalOnce = false;



// numbers.forEach(button => {
//     button.addEventListener('click', () => {
//         let value = button.innerHTML;
//         if (result) {
//             mainOutput.innerHTML = '';
//             result = false;
//         }

//         if (value == '.' && !decimalOnce){
//             if (mainOutput.innerHTML == '' || mainOutput.innerHTML[mainOutput.innerHTML.length - 1]){
//                 mainOutput.innerHTML += '0.';
//                 decimalOnce = true;
//             } else if (mainOutput.innerHTML[mainOutput.innerHTML.length - 1] !== '.'){
//                 mainOutput.innerHTML += '.';
//                 decimalOnce = true;
//             }
//         } else if (!isNaN(value)) 
//             mainOutput.innerHTML += value;
//     })
// });

// operators.forEach(button => {
//     button.addEventListener('click', () => {
//         let compute = button.innerHTML;
//         console.log(compute)
        

//         // let result;
//         // // if (isNaN(miniOutput) || isNaN(mainOutput)) return
//         // switch (button) {
//         //     case '+':
//         //         result = miniOutput + mainOutput;
//         //         break
//         //     case '-':
//         //        result = miniOutput - mainOutput;
//         //        break
//         //     case 'x':
//         //         result = miniOutput * mainOutput;
//         //         break
//         //     case '÷':
//         //         result = miniOutput / mainOutput;
//         //         break
//         //     default:
//         //         return
//         // }

        
        
//         miniOutput = mainOutput;
//         mainOutput = '';
//     })
// })
