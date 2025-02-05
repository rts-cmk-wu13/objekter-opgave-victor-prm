/* let headerImageContainer = document.createElement('div');
headerImageContainer.classList.add('header-image-container')
headerImageContainer.innerHTML = `<img src=${hero.image} alt="hero image" class="header-image-image">`;
document.querySelector('.header').append(headerImageContainer)


let headerTextContainer = document.createElement('div');
headerTextContainer.classList.add('header-text-container')
headerTextContainer.innerHTML = `
<h1 class="header-text-headline">${highlightText(hero.headline,"save your time")}</h1>
<p class="header-text-copy">${hero.copy}</p>
<button class="header-text-cta-button">Explore</button>`
document.querySelector('.header').append(headerTextContainer) */


/* //SERVICES SECTION
function populateServices(headline, text, linktext, illustration) {
    let serviceCardTemplate = `
    <article class="service-card">
        <div class="service-card-illustration-container">
            <img src=${illustration} alt="service card illustration" class="service-card-illustration">
        </div>
        <h3 class="service-card-headline">${headline}</h3>
        <p class="service-card-copy">${text}</p>
        <p><a href="#" class="service-card-link">${linktext}</a></p>
    </article>
    `
    document.querySelector('.services').innerHTML += serviceCardTemplate;
}

//FACILITIES
function populateFacilities(headline, text, icon) {
    let facilitiesCardTemplate = `
    <article class="facility-card">
        <div class="facility-card-illustration-container">
            <img src=${icon} alt="facility card illustration" class="facility-card-illustration">
        </div>
        <h3 class="facility-card-headline">${headline}</h3>
        <p class="facility-card-copy">${text}</p>
        <p><a href="#" class="facility-card-link">Show me more</a></p>
    </article>
    `
    document.querySelector('.facilities').innerHTML += facilitiesCardTemplate;
} */


//HERO SECTION
function populateHeader(headline, copy, img) {
    let headerTemplate = `
        <div class="header-image-container">
            <img src=${img} alt="hero image" class="header-image-image">
        </div>
        <div class="floating-navbar">
            ${createIconButton("","./assets/box.svg","floating-menu-button")}
            ${createIconButton("","./assets/person.svg","floating-profile-button")}
        </div>
        <div class="header-text-container">
            <h1 class="header-text-headline">${highlightText(headline, "save your time")}</h1>
            <p class="header-text-copy">${copy}</p>
            <button class="header-text-cta-button">Explore</button>
        </div>`

    document.querySelector('.header').innerHTML = headerTemplate;
}

function populateServices(sectionHeadline, cssSelector) {
    createContentSection(sectionHeadline, cssSelector);
    services.forEach(service => createCard(service.headline, service.text, service.linktext, service.illustration, cssSelector));
}

function populateFacilities(sectionHeadline, cssSelector) {
    createContentSection(sectionHeadline, cssSelector);
    facilities.options.forEach(facility => createCard(facility.headline, facility.text, "Show me more", facility.icon, cssSelector));
}

function populateSites(cssSelector) {
    createContentSection__InlineHeader(sites.headline, sites.text, "Start", sites.btnicon, cssSelector);
    sites.places.forEach(site => createCard(site.name, site.city, "Visit the site", site.img, cssSelector));
}

function populateAdvantages(sectionHeadline, cssSelector) {
    createContentSection(sectionHeadline, cssSelector);
    advantages.forEach(advantage => createCard(advantage.headline, advantage.text, "", advantage.icon, cssSelector));
}

function populateFooter(cssSelector) {
    createContentSection__InlineHeader(footer.companyText.slogan, footer.companyText.companyName, "", "", cssSelector);
    createLinkListCard(footer.discover.headline, footer.discover.links,cssSelector, Object.keys(footer)[1]);
    createLinkListCard(footer.manager.headline, footer.manager.links,cssSelector, Object.keys(footer)[2]);
    createLinkListCard(footer.assistance.headline, footer.assistance.links,cssSelector, Object.keys(footer)[3]);
    createLegalSection(footer.legal.copyright, footer.legal.links,  Object.keys(footer)[4]);
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

function populateAll() {
    populateHeader(hero.headline, hero.copy, hero.image);
    populateServices("", "services");
    populateFacilities(facilities.headline, "facilities");
    populateSites("sites");
    populateAdvantages("Our Advantages", "advantages");
    populateFooter("footer");
}

populateAll();
blurFloatingNavbar(0.5)


