var hamburger = document.querySelector(".hamburger");
var nav = document.querySelector(".nav-menu");

hamburger.addEventListener('click', function (e) {
    const img = hamburger.children;
    console.log(img[0].src);

    if (nav.classList.contains("show-nav")) {
        nav.classList.remove("show-nav");
        img[0].src = "./images/icon-hamburger.svg";
    }
    else {
        nav.classList.add("show-nav");
        img[0].src = "./images/icon-close.svg";

    }
})

// on and off menu items
const labels = document.querySelectorAll('.nav-item label');

labels.forEach(l => {
    const img = l.nextElementSibling;
    const ul = img.nextElementSibling;
    ul.classList.add("close")
    l.addEventListener("click", function (e) {
        const img = l.nextElementSibling;
        const ul = img.nextElementSibling;

        img.style.transform = "rotate(180deg)";


        const arrowImages = document.querySelectorAll(".arrow");

        arrowImages.forEach(i => {
            i.style.transform = "rotate(0deg)";
        })

        const subNavLists = document.querySelectorAll(".sub-nav-list");
        subNavLists.forEach(l => {
            if (!l.classList.contains("close")) {
                l.classList.add("close");
            }
        })

        if (ul.classList.contains("close")) {
            ul.classList.remove("close");
            img.style.transform = "rotate(180deg)";
        }
        else {
            ul.classList.add("close");

        }


    })
})