import burgerImage from './images/burger.webp';

function loadMenu() {
    const content = document.querySelector('#content');
    
    // Title
    const titleDiv = document.createElement('div'); 
    titleDiv.id = 'title'; 
    titleDiv.textContent = 'Menu'
    content.appendChild(titleDiv)

    // Image Box
    const imgBox = document.createElement('div')
    imgBox.id = 'hero-img-box'; 
    const heroImg = document.createElement('img'); 
    heroImg.id = 'hero-img'; 
    heroImg.src = burgerImage; 
    imgBox.appendChild(heroImg); 
    content.appendChild(imgBox)

    // Text Box 
    const textBox = document.createElement('div')
    textBox.id = 'hero-text-box'; 
    textBox.innerHTML = 'The menu is TBA. But it will blow your mind. <br> Possibly includes burgers.'; 
    content.appendChild(textBox)
}

export default loadMenu; 