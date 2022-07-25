const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
    button.addEventListener('click',(e)=> {
        if (e.target.textContent ==='C'){
            display.textContent ='';
        }else if (e.target.textContent ==='←'){
            display.textContent = display.textContent.slice(0,-1);
        }else if (e.target.textContent ==='='){
            display.textContent = eval(display.textContent);
        }else{
            display.textContent += e.target.textContent;
        }
    })
})