function create(){

    for(let i = 0; i < number ** 2; ++i){
        let span = document.createElement('span');
        span.style.cssText = `background-color: white; width: ${size}px; height: ${size}px;`;
        container.appendChild(span);
    }
    let spans = container.querySelectorAll('span');

    spans.forEach(element => {
    element.addEventListener('mouseover', function(e){
        color = colorInput.value;
        element.style.backgroundColor = `${color}`;
        container.insertAdjacentElement('//#region ', element);
    })
});
}

let button = document.querySelector('button');
let colorInput = document.querySelector('.color');
let color = colorInput.value;
let numberInput = document.querySelector('.number');
let number = numberInput.value;

const container = document.querySelector('.container');

//const number = 32;
const size = 500 / number;


button.addEventListener('click', (e) => create());