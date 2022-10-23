let toggle_menu = document.querySelector(".toggle_menu");
let close_menu = document.querySelector(".close_menu");
let toggle_menu_ul = document.querySelector(".toggle_menu + ul");

let ul_links = Array.from(document.querySelectorAll("nav ul li"));
let ul_links_a = Array.from(document.querySelectorAll("nav ul li a"));

///  ======================= toggel_menue ===================
toggle_menu.onclick = function () {
    toggle_menu.style.display = "none";
    close_menu.style.display = "block";
    toggle_menu_ul.style.cssText = `
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: rgb(0 0 0 / 50%);`;
};

close_menu.onclick = function () {
    toggle_menu.style.display = "block";
    close_menu.style.display = "none";
    toggle_menu_ul.style.display = "none";
};


// shuffle landing

let bullets_landing = document.querySelectorAll(".landing .bullets li");

bullets_landing.forEach((el) => {
    el.addEventListener("click",
        function (e) {
            bullets_landing.forEach((ele) => {
                ele.classList.remove("active");
            });
            el.classList.add("active");
        });
});

// ================================ image slider


let backg_box = document.querySelectorAll(".backg_box img");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");


//  ==========================================  loop on links in nav bar

ul_links_a.forEach((el) => {
    el.addEventListener("click",
        function (e) {
            ul_links_a.forEach((ele) => {
                ele.classList.remove("active");
            });
            el.classList.add("active");
        });
});


// creat to top btn 

let top_btn = document.querySelector(".top_btn");
window.onscroll = function () {
    if (window.scrollY >= 800) {
        top_btn.style.display = "block";
    } else {
        top_btn.style.display = "none";
    }
};

top_btn.onclick = function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
};

//  ======================================    shuffle 

let shuffle = document.querySelectorAll(".shuffle li");

shuffle.forEach((el) => {
    el.addEventListener("click",
        function (e) {
            shuffle.forEach((ele) => {
                ele.classList.remove("active");
            });
            el.classList.add("active");
        });
});