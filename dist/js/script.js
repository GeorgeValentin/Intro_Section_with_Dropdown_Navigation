window.addEventListener("load", () => {

    let overlayFeatures = document.querySelector(".overlay-features");
    let overlayFeaturesItems = document.querySelectorAll(".overlay-features_item");
    let featuresMenuItem = document.getElementById("features-menu-item");

    for(let i = 0; i < overlayFeaturesItems.clientHeight; i++) {
        overlayFeaturesItems[i].addEventListener("mouseover", () => {
            overlayFeatures.classList.add("show-overlay");
        })

        overlayFeaturesItems[i].addEventListener("mouseout", () => {
            overlayFeatures.classList.remove("show-overlay");
        })
    }

    featuresMenuItem.addEventListener("mouseover", () => {
        overlayFeatures.classList.add("show-overlay");
    })

    overlayFeatures.addEventListener("mouseleave", () => {
        overlayFeatures.classList.remove("show-overlay");
    }) 

})