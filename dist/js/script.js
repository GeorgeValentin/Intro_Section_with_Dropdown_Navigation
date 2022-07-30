window.addEventListener("load", () => {

    let overlayFeatures = document.querySelector(".overlay-features");
    let overlayCompany = document.querySelector(".overlay-company");

    let featuresMenuItem = document.getElementById("features-menu-item");
    let companyMenuItem = document.getElementById("company-menu-item");

    let mobileNavBtn = document.querySelector(".nav-menu_mobile");
    let mobileCloseBtn = document.querySelector(".nav-menu_closeBtn");
    let mobileOverlay = document.querySelector(".mobile-overlay");
    let navLogo = document.querySelector(".nav-menu_logo");

    let mobileFeaturesMenuBtn = document.querySelector(".features-container");
    let mobileFeaturesContainer = document.querySelector(".features-container_content");
    let isFeatureSelected = false;
    let mobileAccountContainer = document.querySelector(".nav-menu-mobile_account");

    let mobileCompanyMenuBtn = document.querySelector(".company-container");
    let mobileCompanyContainer = document.querySelector(".nav-menu-mobile_company_content");
    let isCompanyBtnClicked = false;

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

    toggleMobileFeatures(
        mobileFeaturesMenuBtn,
        "clicked",
        mobileFeaturesContainer,
        "show-mobile-content",
        "click",
        isFeatureSelected,
        mobileAccountContainer,
        "features-showcase-account-position"
    );

    toggleMobileFeatures(
        mobileCompanyMenuBtn,
        "clicked",
        mobileCompanyContainer,
        "show-mobile-content",
        "click",
        isCompanyBtnClicked,
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
    isSelected,
    accountContainer,
    featuresDroppedDownStyle) {
    
    toggler.addEventListener(eventName, () => {

        if (isSelected === false) {
            element.classList.add(elementShowClass);
            toggler.classList.add(togglerStatusClass);
            isSelected = true;
            accountContainer.classList.add(featuresDroppedDownStyle);

            if(
                !accountContainer.classList.contains("features-showcase-account-position") ||
                !accountContainer.classList.contains("company-showcase-account-position")
                ) 
            {
                accountContainer.classList.remove("showcase-account-position");
            } else {
                accountContainer.classList.remove("features-showcase-account-position");
                accountContainer.classList.remove("company-showcase-account-position");
                accountContainer.classList.add("showcase-account-position");
            }
            
        } else {
            element.classList.remove(elementShowClass);
            toggler.classList.remove(togglerStatusClass);
            isSelected = false;
            accountContainer.classList.remove(featuresDroppedDownStyle);

        }

        console.log(toggler.classList)


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