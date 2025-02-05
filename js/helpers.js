function createContentSection(sectionHeadline, cssSelector) {
    let contentDestination = `${cssSelector}-content-container`
    if (sectionHeadline) {
        document.querySelector(`.${cssSelector}`).innerHTML += `
        <h2 class="${cssSelector}-headline section-headline">${sectionHeadline}</h2>`
    }
    document.querySelector(`.${cssSelector}`).innerHTML += `<div class="${contentDestination}"></div>`;
}

function createContentSection__InlineHeader(sectionHeadline, sectionCopy, buttonTxt, buttonIconSrc, cssSelector) {
    let contentDestination = `${cssSelector}-content-container`;
    document.querySelector(`.${cssSelector}`).innerHTML += `<div class="${contentDestination}"></div>`;
    if (sectionHeadline) {
        document.querySelector(`.${contentDestination}`).innerHTML += `
        <div class="${cssSelector}-section__inline">
            <h2 class="${cssSelector}-headline__inline section-headline">${sectionHeadline}</h2>
            <p class="${cssSelector}-copy__inline section-copy">${sectionCopy}</p>
            ${createIconButton(buttonTxt, buttonIconSrc, cssSelector)}
        </div>`
    }
}

function createCard(headline, text, linktext, illustration, cssSelector) {
    let cardTemplate = `
    <article class="card card__${cssSelector}">
        <div class="card-illustration-container card-illustration-container__${cssSelector}">
            <img src=${illustration} alt="card illustration" class="card-illustration card-illustration__${cssSelector}">
        </div>
        <h3 class="card-headline card-headline__${cssSelector}">${headline}</h3>
        <p class="card-copy card-copy__${cssSelector}">${text}</p>
       ${createLink(linktext, cssSelector)}
    </article>
    `
    document.querySelector(`.${cssSelector}-content-container`).innerHTML += cardTemplate;
}

function createIconButton(buttonText, buttonIconSrc, cssSelector) {
    if(buttonText || buttonIconSrc){
        return `<button class="icon-button icon-button__${cssSelector}"><i class="icon-button-wrapper icon-button-wrapper__${cssSelector}-"><img src="${buttonIconSrc}" alt="button icon" class="icon-button-img icon-button-img__${cssSelector}-"></i>${buttonText}</button>`
    }
    return "";
}

function createLinkListCard(headline, list, cssSelector, cssModifier){
    let contentDestination = `${cssSelector}-content-container`;
    document.querySelector(`.${contentDestination}`).innerHTML += `
    <div class="linklist linklist-${cssModifier}">
        <h4 class="linklist-header">${headline}</h4>
        <ul class="linklist-list">
            ${createLinkList(list)}
        </ul>
    </div>`
}

function createLegalSection(copyright, list, cssModifier){
    document.querySelector('.footer').innerHTML += `
    <div class="legal-container">
        <small class="legal-container-copyright">${copyright}</small>
        <ul class="linklist-list linklist-list__${cssModifier}">
            ${createLinkList(list)}
        </ul>
    </div>`
}

function createLinkList(list){
    let eles = ""
    if(list){
        list.forEach(item => {
            eles += (`<li class="linklist-item"><a href="" class="linklist-item-link">${item.linktext}</a></li>`)
        })
    }
    return eles;
}

function createLink(linktext, cssSelector) {
    if (linktext) {
        return `<p><a href="#" class="card-link card-link__${cssSelector}">${linktext}</a></p>`
    }
    return "";
}

function highlightText(originalStr, highlightStr) {
    return originalStr.replace(highlightStr, `<span class="header-highlight">${highlightStr}</span>`);
}

function scrollToTop(){
    window.scrollTo({top: 0, behavior: 'smooth'});
}

function blurFloatingNavbar(objThreshold) {
    let targetElm = document.querySelector('.header-image-container');
    let floatingNavbarElm = document.querySelector('.floating-navbar');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                floatingNavbarElm.classList.remove("floating-navbar-fadein");
            } else {
                floatingNavbarElm.classList.add("floating-navbar-fadein");
            }
        })
    }, {threshold: objThreshold })
    observer.observe(targetElm);
}


