window.addEventListener("load", () => {

    let overlayFeatures = document.querySelector(".overlay-features");
    let overlayCompany = document.querySelector(".overlay-company");

    let featuresMenuItem = document.getElementById("features-menu-item");
    let companyMenuItem = document.getElementById("company-menu-item");
    
    let mobileNavBtn = document.querySelector(".nav-menu_mobile");
    let mobileCloseBtn = document.querySelector(".nav-menu_closeBtn");
    let mobileOverlay = document.querySelector(".mobile-overlay");
    let navLogo = document.querySelector(".nav-menu_logo");

    showOverlay(featuresMenuItem, overlayFeatures, "mouseover", "show-overlay");
    showOverlay(overlayFeatures, overlayFeatures, "mouseover", "show-overlay");

    showOverlay(companyMenuItem, overlayCompany, "mouseover", "show-overlay");
    showOverlay(overlayCompany, overlayCompany, "mouseover", "show-overlay");
    
    hideOverlay(overlayFeatures, overlayFeatures, "mouseleave", "show-overlay");
    hideOverlay(overlayCompany, overlayCompany, "mouseleave", "show-overlay");

    mobileNavBtn.addEventListener("click", () => {
        mobileOverlay.classList.add("show-mobile-overlay");
        mobileNavBtn.classList.add("hide-mobile-menu-btn");  
        mobileCloseBtn.classList.add("show-closeBtn");
        navLogo.classList.add("adjust-page-title-position");
    })

    mobileCloseBtn.addEventListener("click", () => {
        mobileOverlay.classList.remove("show-mobile-overlay");
        mobileCloseBtn.classList.remove("show-closeBtn");
        mobileNavBtn.classList.remove("hide-mobile-menu-btn");
        mobileNavBtn.classList.add("adjust-mobile-btn-after-overlay");
    })

})

function showOverlay (trigger, element, eventName, classToTackle) {
    trigger.addEventListener(eventName, () => {
        element.classList.add(classToTackle);
    })
}

function hideOverlay (trigger, element, eventName, classToTackle) {
    trigger.addEventListener(eventName, () => {
        if(element.classList.contains(classToTackle))
            element.classList.remove(classToTackle);
    })
}
