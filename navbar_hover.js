let scroll_nav = document.querySelector(".scroll_nav");
window.onscroll = function () {
    let Y = pageYOffset;
    console.log(Y)
    if (Y < 100) {
        // to back top
        scroll_nav.style.top = "-10%"
        scroll_nav.style.transition = " 0.2s"

    } else {
        scroll_nav.style.top = "2%"

    }
}