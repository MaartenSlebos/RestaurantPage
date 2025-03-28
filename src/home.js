import mortyImage from './images/morty.webp';

function loadHome() {
    const content = document.querySelector('#content');
    
    // Title
    const titleDiv = document.createElement('div'); 
    titleDiv.id = 'title'; 
    titleDiv.textContent = 'Morty\'s'
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
    textBox.innerHTML = 'Morty\'s is the new up and coming restaurant on the block. <br> It\'s so good you you\'ll never have to cook again.'; 
    content.appendChild(textBox)
}

export default loadHome; 

 // <div id="hero-text-box">Morty's is the new up and coming restaurant on the block. <br> It's so good you you'll never have to cook again.</div>

