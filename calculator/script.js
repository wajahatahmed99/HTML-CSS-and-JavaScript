const input = document.getElementById('inputbox');
const buttuns = document.querySelectorAll('button');

let value = "";
let buttonArray = Array.from(buttuns);
buttonArray.forEach(buttun => {
    buttun.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            value = eval(value);
            input.value = value;
        }
        else if (e.target.innerHTML == 'AC'){
            value = "";
            input.value = value;
        }
        else if (e.target.innerHTML == 'DEL'){
            // string = string.slice(0, -1);
            value = value.substring(0, value.length-1);
            input.value = value;

        }
        else{
            value += e.target.innerHTML;
            input.value = value;

        }
    })
})