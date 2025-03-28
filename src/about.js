import mortyImage from './images/morty.jpg';

function loadAbout() {
    const content = document.querySelector('#content');
    
    // Title
    const titleDiv = document.createElement('div'); 
    titleDiv.id = 'title'; 
    titleDiv.textContent = 'About'
    content.appendChild(titleDiv)

    // Image Box
    const imgBox = document.createElement('div')
    imgBox.id = 'hero-img-box'; 
    const heroImg = document.createElement('img'); 
    heroImg.id = 'hero-img'; 
    heroImg.src = mortyImage; 
    imgBox.appendChild(heroImg); 
    content.appendChild(imgBox)

    // Text Box 
    const textBox = document.createElement('div')
    textBox.id = 'hero-text-box'; 
    textBox.innerHTML = 'I\'m Morty and I like burgers. <br> From now on i\'ll be making them for you.'; 
    content.appendChild(textBox)
}

export default loadAbout; 