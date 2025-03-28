import "./styles.css";

import loadHome from './home.js'; 

import loadMenu from "./menu.js";

import loadAbout from "./about.js";

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

    const menuBtn = document.querySelector('#menu-btn');
    menuBtn.addEventListener('click', () => {
        clearContent();
        loadMenu(); 
    })

    const aboutBtn = document.querySelector('#about-btn');
    aboutBtn.addEventListener('click', () => {
        clearContent();
        loadAbout(); 
    })
}); 





