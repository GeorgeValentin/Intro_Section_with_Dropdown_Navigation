window.addEventListener("load", () => {

    const overlayFeatures = document.querySelector(".overlay-features");
    const overlayCompany = document.querySelector(".overlay-company");

    const featuresMenuItem = document.getElementById("features-menu-item");
    const companyMenuItem = document.getElementById("company-menu-item");

    const mobileNavBtn = document.querySelector(".nav-menu_mobile");
    const mobileOverlay = document.querySelector(".mobile-overlay");
    const navLogo = document.querySelector(".nav-menu_logo");

    const mobileFeaturesMenuBtn = document.querySelector(".features-container");
    const mobileFeaturesContainer = document.querySelector(".features-container_content");
    const mobileAccountContainer = document.querySelector(".nav-menu-mobile_account");

    const mobileCompanyMenuBtn = document.querySelector(".company-container");
    const mobileCompanyContainer = document.querySelector(".nav-menu-mobile_company_content");

    showOverlay(featuresMenuItem, overlayFeatures, "mouseover", "show-overlay");
    showOverlay(overlayFeatures, overlayFeatures, "mouseover", "show-overlay");

    showOverlay(companyMenuItem, overlayCompany, "mouseover", "show-overlay");
    showOverlay(overlayCompany, overlayCompany, "mouseover", "show-overlay");

    hideOverlay(overlayFeatures, overlayFeatures, "mouseleave", "show-overlay");
    hideOverlay(overlayCompany, overlayCompany, "mouseleave", "show-overlay");

    mobileNavBtn.addEventListener("click", () => {
        mobileOverlay.classList.toggle("show-mobile-overlay");
        mobileNavBtn.classList.toggle("update-menu-btn-image");
        navLogo.classList.toggle("adjust-page-title-position");
    })

    toggleMobileFeatures(
        mobileFeaturesMenuBtn,
        "clicked",
        mobileFeaturesContainer,
        "show-mobile-content",
        "click",
        mobileAccountContainer,
        "features-showcase-account-position"
    );

    toggleMobileFeatures(
        mobileCompanyMenuBtn,
        "clicked",
        mobileCompanyContainer,
        "show-mobile-content",
        "click",
        mobileAccountContainer,
        "company-showcase-account-position"
    );

})

function toggleMobileFeatures(
    toggler,
    togglerStatusClass,
    element,
    elementShowClass,
    eventName,
    accountContainer,
    featuresDroppedDownStyle) {

    toggler.addEventListener(eventName, () => {

        element.classList.toggle(elementShowClass);
        toggler.classList.toggle(togglerStatusClass);
        accountContainer.classList.toggle(featuresDroppedDownStyle);

        if (
            accountContainer.classList.contains("features-showcase-account-position") &&
            accountContainer.classList.contains("company-showcase-account-position")
        ) {
            accountContainer.classList.toggle("showcase-account-position");
        } else if (accountContainer.classList.contains("features-showcase-account-position")) {
            accountContainer.classList.remove("showcase-account-position");
            accountContainer.classList.remove("company-showcase-account-position");
        }
    })
}

function showOverlay(trigger, element, eventName, classToTackle) {
    trigger.addEventListener(eventName, () => {
        element.classList.add(classToTackle);
    })
}

function hideOverlay(trigger, element, eventName, classToTackle) {
    trigger.addEventListener(eventName, () => {
        if (element.classList.contains(classToTackle))
            element.classList.remove(classToTackle);
    })
}