window.addEventListener("load", () => {

    let overlayFeatures = document.querySelector(".overlay-features");
    let overlayCompany = document.querySelector(".overlay-company");

    let featuresMenuItem = document.getElementById("features-menu-item");
    let companyMenuItem = document.getElementById("company-menu-item");
    
    showOverlay(featuresMenuItem, overlayFeatures, "mouseover", "show-overlay");
    showOverlay(overlayFeatures, overlayFeatures, "mouseover", "show-overlay");

    showOverlay(companyMenuItem, overlayCompany, "mouseover", "show-overlay");
    showOverlay(overlayCompany, overlayCompany, "mouseover", "show-overlay");
    
    hideOverlay(overlayFeatures, overlayFeatures, "mouseleave", "show-overlay");
    hideOverlay(overlayCompany, overlayCompany, "mouseleave", "show-overlay");

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