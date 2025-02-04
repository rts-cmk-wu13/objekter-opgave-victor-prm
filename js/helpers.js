function highlightText(originalStr, highlightStr) {
    return originalStr.replace(highlightStr, `<span class="header-highlight">${highlightStr}</span>`);
}

function createContentSection(sectionHeadline, cssSelector) {
    let contentDestination = `${cssSelector}-content-container`
    if (sectionHeadline) {
        document.querySelector(`.${cssSelector}`).innerHTML += `
        <h2 class="${cssSelector}-headline section-headline">${sectionHeadline}</h2>`
    }
    document.querySelector(`.${cssSelector}`).innerHTML += `<div class="${contentDestination}"></div>`;
}

function createContentSection__InlineHeader(sectionHeadline, sectionCopy, buttonIconSrc, cssSelector) {
    let contentDestination = `${cssSelector}-content-container`;
    document.querySelector(`.${cssSelector}`).innerHTML += `<div class="${contentDestination}"></div>`;
    if (sectionHeadline) {
        document.querySelector(`.${contentDestination}`).innerHTML += `
        <div class="${cssSelector}-section__inline">
            <h2 class="${cssSelector}-headline__inline section-headline">${sectionHeadline}</h2>
            <p class="${cssSelector}-copy__inline section-copy">${sectionCopy}</p>
            ${createIconButton("Start", buttonIconSrc, cssSelector)}
        </div>`
    }

}

function createIconButton(buttonText, buttonIconSrc, cssSelector) {
    return `<button class="icon-button icon-button__${cssSelector}"><i class="icon-button-wrapper icon-button-wrapper__${cssSelector}-"><img src="${buttonIconSrc}" alt="button icon" class="icon-button-img icon-button-img__${cssSelector}-"></i>${buttonText}</button>`
}

function createLink(linktext, cssSelector) {
    if (linktext) {
        return `<p><a href="#" class="card-link card-link__${cssSelector}">${linktext}</a></p>`
    }
    return "";
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


