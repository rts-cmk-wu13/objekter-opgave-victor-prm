// slå dig løs her... 

//eksempel på at udskrive alle overskrifter i services i konsollen:
services.forEach(service => console.log(service.headline))

let headerImageContainer = document.createElement('div');
headerImageContainer.classList.add('header-image-container')
headerImageContainer.innerHTML = `<img src=${hero.image} alt="hero image" class="header-image-image">`;
document.querySelector('.header').append(headerImageContainer)

let headerTextContainer = document.createElement('div');
headerTextContainer.classList.add('header-text-container')
headerTextContainer.innerHTML = `
<h1 class="header-text-headline">${hero.headline}</h1>
<p class="header-text-copy">${hero.copy}</p>`
document.querySelector('.header').append(headerTextContainer)