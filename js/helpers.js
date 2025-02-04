function highlightText(originalStr,highlightStr){
    return originalStr.replace(highlightStr,`<span class="header-highlight">${highlightStr}</span>`);
}

function createContentSection(sectionHeadline, cssSelector){
    let contentDestination = `${cssSelector}-content-container`
    if(sectionHeadline){
        document.querySelector(`.${cssSelector}`).innerHTML += `
        <h2 class="${cssSelector}-headline section-headline">${sectionHeadline}</h2>`
    }
    document.querySelector(`.${cssSelector}`).innerHTML += `<div class="${contentDestination}"></div>`;
}

function createContentSection__InlineHeader(sectionHeadline, sectionCopy,buttonIconSrc, cssSelector){
    let contentDestination = `${cssSelector}-content-container`;
    document.querySelector(`.${cssSelector}`).innerHTML += `<div class="${contentDestination}"></div>`;
    if(sectionHeadline){
        document.querySelector(`.${contentDestination}`).innerHTML += `
        <div class="${cssSelector}-section__inline">
            <h2 class="${cssSelector}-headline__inline section-headline">${sectionHeadline}</h2>
            <p class="${cssSelector}-copy__inline section-copy">${sectionCopy}</p>
            <button class="${cssSelector}-button__inline"><i class="button-icon-wrapper"><img src="${buttonIconSrc}" alt="button icon" class="button-icon-img"></i>Start</button>
        </div>`
    }
    
}

function createLink(linktext, cssSelector){
    if(linktext){
        return  `<p><a href="#" class="card-link card-link__${cssSelector}">${linktext}</a></p>`
    }
    return "";
}