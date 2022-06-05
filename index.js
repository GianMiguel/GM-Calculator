let mainOutput = document.getElementById('mainOutput');
let buttons = Array.from(document.querySelectorAll('button'));

buttons.forEach(item => {
    item.addEventListener('click', compute);
})

function compute(){
    let value = this.innerText;

    if(value === 'C'){
        mainOutput.innerText = '';
        return;
    }

    else if (value === 'DEL') {
        mainOutput.innerText = mainOutput.innerText.slice(0, -1);
    }

    else if (value === '='){
        try {
            mainOutput.innerText = eval(mainOutput.innerText);
        }
        catch(err) {
            alert('Error!')
        }
    }
    
    else {
        mainOutput.innerText += value;
    }
}