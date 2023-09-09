window.addEventListener("scroll", () => {
    document.querySelector('nav').classList.toggle("window-scroll", window.scrollY > 0);
});

const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("open");

        const icon = faq.querySelector(".faq-icon i");
        if (icon.className === 'uil uil-plus') {
            icon.className = 'uil uil-minus';
        } else {
            icon.className = 'uil uil-plus';
        }
    });
});

// Swiper.js Settings for Testimonials

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    // When window's width is >= 600
    breakpoints: {
        600: {
            slidesPerView: 2,
        }
    }
});

// Typing Effect

$(document).ready(function () {
    var typed = new Typed(".typing", {
        strings: ["Grow your skills to advance your career path", "Some more slogan goes here", "We can add as many as possible!"],
        typeSpeed: 50,
        backSpeed: 20,
        loop: true
    });

    $(".animate1").waypoint(function () {
        $(".animate1").addClass("animate__animated animate__rollIn");
    }, { offset: "80%" });

    $(".animate2").waypoint(function () {
        $(".animate2").addClass("animate__animated animate__jackInTheBox");
    }, { offset: "80%" });

    $(".animate3").waypoint(function () {
        $(".animate3").addClass("animate__animated animate__lightSpeedInLeft");
    }, { offset: "65%" });

    $(".animate4").waypoint(function () {
        $(".animate4").addClass("animate__animated animate__zoomIn");
    }, { offset: "63%" });

    $(".animate5").waypoint(function () {
        $(".animate5").addClass("animate__animated animate__rotateIn");
    }, { offset: "60%" });

    $(".animate6").waypoint(function () {
        $(".animate6").addClass("animate__animated animate__flipInX");
    }, { offset: "60%" });

    $(".animate7").waypoint(function () {
        $(".animate7").addClass("animate__animated animate__zoomInLeft");
    }, { offset: "65%" });

    $(".animate8").waypoint(function () {
        $(".animate8").addClass("animate__animated animate__zoomInUp");
    }, { offset: "65%" });

    $(".animate9").waypoint(function () {
        $(".animate9").addClass("animate__animated animate__zoomInRight");
    }, { offset: "65%" });

    $(".animate10").waypoint(function () {
        $(".animate10").addClass("animate__animated animate__bounceInUp");
    }, { offset: "60%" });

    $(".animate11").waypoint(function () {
        $(".animate11").addClass("animate__animated animate__fadeInLeft");
    }, { offset: "65%" });

    $(".animate12").waypoint(function () {
        $(".animate12").addClass("animate__animated animate__fadeInRight");
    }, { offset: "65%" });

    $(".animate13").waypoint(function () {
        $(".animate13").addClass("animate__animated animate__fadeInLeft");
    }, { offset: "63%" });

    $(".animate14").waypoint(function () {
        $(".animate14").addClass("animate__animated animate__fadeInRight");
    }, { offset: "63%" });

    $(".animate15").waypoint(function () {
        $(".animate15").addClass("animate__animated animate__fadeInLeft");
    }, { offset: "61%" });

    $(".animate16").waypoint(function () {
        $(".animate16").addClass("animate__animated animate__fadeInRight");
    }, { offset: "61%" });

    $(".animate17").waypoint(function () {
        $(".animate17").addClass("animate__animated animate__fadeInLeft");
    }, { offset: "59%" });

    $(".animate18").waypoint(function () {
        $(".animate18").addClass("animate__animated animate__fadeInRight");
    }, { offset: "59%" });

    $(".animate19").waypoint(function () {
        $(".animate19").addClass("animate__animated animate__fadeInLeft");
    }, { offset: "57%" });

    $(".animate20").waypoint(function () {
        $(".animate20").addClass("animate__animated animate__fadeInRight");
    }, { offset: "57%" });

    $(".animate21").waypoint(function () {
        $(".animate21").addClass("animate__animated animate__fadeInUp");
    }, { offset: "60%" });

    $(".animate22").waypoint(function () {
        $(".animate22").addClass("animate__animated animate__fadeInDown");
    }, { offset: "65%" });
});

// Show / Hide Navbar

const menu = document.querySelector(".nav-menu");
const openMenuBtn = document.querySelector("#open-menu-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");

openMenuBtn.addEventListener("click", () => {
    menu.style.display = "flex";
    closeMenuBtn.style.display = "inline-block";
    openMenuBtn.style.display = "none";
});

// Close Nav Menu

const closeNav = () => {
    menu.style.display = "none";
    closeMenuBtn.style.display = "none";
    openMenuBtn.style.display = "inline-block";
}

closeMenuBtn.addEventListener("click", closeNav);

