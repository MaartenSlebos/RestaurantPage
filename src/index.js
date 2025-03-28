import "./styles.css";

import loadHome from './home.js'; 

function clearContent() {
    const content = document.querySelector('#content');
    content.innerHTML = ''; 
}

document.addEventListener('DOMContentLoaded', () => {
    loadHome(); 


    const homeBtn = document.querySelector('#home-btn'); 
    homeBtn.addEventListener('click', () => {
        clearContent(); 
        loadHome(); 
    })
}); 





