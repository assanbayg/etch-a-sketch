function generate(){
    for(let j = 0; j < number; ++j){
        const columns = document.createElement('div');
        columns.style.cssText = 'display: flex;'
        for(let i = 0; i < number; ++i){
            const div = document.createElement('div');
            div.style.cssText = 
            'height: 30px; width: 30px; background-color: white; border: 0.4px; border-color: red; border-style: solid;';
            columns.appendChild(div);
        }
        container.appendChild(columns);
    }
}

let number = 16;

const settings = document.getElementsByClassName('settings');
const paper = document.getElementsByClassName('paper');

const button = document.querySelector('button');
const container = document.getElementById('container');

button.addEventListener('click', (e) => generate());