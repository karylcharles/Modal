'use strict';

let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let btnClose = document.querySelector('.close-modal');
let btnOpen = document.querySelectorAll('.show-modal');

console.log(btnOpen);

const closeModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

const openModel = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

for(let i = 0; i < btnOpen.length; i++){
    btnOpen[i].addEventListener('click', openModel);
}

btnClose.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(event){
    if(event.key === 'Escape' && !modal.classList.contains('hidden')){
        closeModal();        
    }
});