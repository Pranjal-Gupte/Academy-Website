window.addEventListener("scroll", () => {
    document.querySelector('nav').classList.toggle("window-scroll", window.scrollY > 0);
});

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

// Gallery Script

//getting all required elements
const gallery = document.querySelectorAll(".image");
const previewBox = document.querySelector(".preview-box");
const previewImg = previewBox.querySelector("img");
const closeIcon = previewBox.querySelector(".icon");
const currentImg = previewBox.querySelector(".current-img");
const totalImg = previewBox.querySelector(".total-img");
const shadow = document.querySelector(".shadow");

window.onload = () => {
    for (let i = 0; i < gallery.length; i++) {
        totalImg.textContent = gallery.length; //passing total img length to totalImg variable
        let newIndex = i; //passing i value to newIndex variable
        let clickedImgIndex; //creating new variable

        gallery[i].onclick = () => {
            clickedImgIndex = i; //passing clicked image index to created variable (clickedImgIndex)
            
            function preview() {
                currentImg.textContent = newIndex + 1; //passing current img index to currentImg variable with adding +1
                let imageURL = gallery[newIndex].querySelector("img").src; //getting user clicked img url
                previewImg.src = imageURL; //passing user clicked img url in previewImg src
            }

            preview(); //calling above function

            const prevBtn = document.querySelector(".prev");
            const nextBtn = document.querySelector(".next");

            if (newIndex == 0) { //if index value is equal to 0 then hide prevBtn
                prevBtn.style.display = "none";
            }

            if (newIndex >= gallery.length - 1) { //if index value is greater and equal to gallery length by -1 then hide nextBtn
                nextBtn.style.display = "none";
            }

            prevBtn.onclick = () => {
                newIndex--; //decrement index
                if (newIndex == 0) {
                    preview();
                    prevBtn.style.display = "none";
                } else {
                    preview();
                    nextBtn.style.display = "block";
                }
            }

            nextBtn.onclick = () => {
                newIndex++; //increment index
                if (newIndex >= gallery.length - 1) {
                    preview();
                    nextBtn.style.display = "none";
                } else {
                    preview();
                    prevBtn.style.display = "block";
                }
            }

            document.querySelector("body").style.overflow = "hidden";
            previewBox.classList.add("show");
            shadow.style.display = "block";
            
            closeIcon.onclick = () => {
                newIndex = clickedImgIndex; //assigning user first clicked img index to newIndex
                prevBtn.style.display = "block";
                nextBtn.style.display = "block";
                previewBox.classList.remove("show");
                shadow.style.display = "none";
                document.querySelector("body").style.overflow = "scroll";
            }
        }
    }
}